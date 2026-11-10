import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 3;
const RATE_WINDOW_MS = 15 * 60 * 1000;

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now >= record.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return true;
  }

  if (record.count >= RATE_LIMIT) return false;

  record.count++;
  return true;
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again in 15 minutes." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { name, email, message } = body as Record<string, unknown>;

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string"
  ) {
    return NextResponse.json({ error: "Invalid field types" }, { status: 400 });
  }

  const trimmedName = name.trim();
  const trimmedEmail = email.trim();
  const trimmedMessage = message.trim();

  if (!trimmedName || !trimmedEmail || !trimmedMessage) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  if (trimmedName.length < 2 || trimmedName.length > 100) {
    return NextResponse.json(
      { error: "Name must be between 2 and 100 characters." },
      { status: 400 }
    );
  }

  if (!isValidEmail(trimmedEmail)) {
    return NextResponse.json(
      { error: "Invalid email address." },
      { status: 400 }
    );
  }

  if (trimmedMessage.length < 10 || trimmedMessage.length > 2000) {
    return NextResponse.json(
      { error: "Message must be between 10 and 2000 characters." },
      { status: 400 }
    );
  }

  const safeName = escapeHtml(trimmedName);
  const safeEmail = escapeHtml(trimmedEmail);
  const safeMessage = escapeHtml(trimmedMessage).replace(/\n/g, "<br>");

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      replyTo: safeEmail,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form Message from ${safeName}`,
      text: `Name: ${trimmedName}\nEmail: ${trimmedEmail}\nMessage: ${trimmedMessage}`,
      html: `
<div style="
  line-height: 1.5;
  font-family: 'Montserrat', Arial, sans-serif;
  color: #e0e0e0;
  max-width: 600px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: rgb(63,65,82);
  font-size: 15px;
">
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;700&display=swap" rel="stylesheet">

  <h1 style="color:#ffffff; font-weight:300; font-size:22px; margin-bottom:15px;">
    New Contact Form Submission
  </h1>

  <p style="font-size:15px; margin:8px 0;">
    <strong style="margin-right:5px; color:#ffffff; font-size:15px;">Name:</strong>
    <span style="font-style:italic; color:#e0e0e0; font-size:15px;">${safeName}</span>
  </p>

  <p style="font-size:15px; margin:8px 0;">
    <strong style="margin-right:5px; color:#ffffff; font-size:15px;">Email:</strong>
    <a href="mailto:${safeEmail}"
       style="
         font-size:15px;
         font-style:italic;
         color:#e0e0e0 !important;
         text-decoration: underline;
         -webkit-text-fill-color:#e0e0e0;
       "
    >
      ${safeEmail}
    </a>
  </p>

  <hr style="border:none; border-top:1px solid #4f5162; margin:20px 0;" />

  <p style="font-size:15px; color:#e0e0e0; margin:8px 0;">
    ${safeMessage}
  </p>

  <hr style="border:none; border-top:1px solid #4f5162; margin:20px 0;" />

  <p style="font-size:12px; color:#bfbfbf; margin-top:15px;">
    This message was sent from your portfolio contact form.
  </p>
</div>`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
