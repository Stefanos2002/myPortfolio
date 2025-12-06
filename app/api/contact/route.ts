import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  // Configure NodeMailer transporter (example with Gmail)
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // your email
      pass: process.env.EMAIL_PASS, // app password
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER, // your email
      subject: `New Contact Form Message from ${name ?? email}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`, // fallback
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
  <!-- Import Montserrat -->
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;700&display=swap" rel="stylesheet">

  <h1 style="color:#ffffff; font-weight:300; font-size:22px; margin-bottom:15px;">
    New Contact Form Submission
  </h1>

  <p style="font-size:15px; margin:8px 0;">
    <strong style="margin-right:5px; color:#ffffff; font-size:15px;">Name:</strong>
    <span style="font-style:italic; color:#e0e0e0; font-size:15px;">${name}</span>
  </p>

  <p style="font-size:15px; margin:8px 0;">
    <strong style="margin-right:5px; color:#ffffff; font-size:15px;">Email:</strong>
    <a href="mailto:${email}"
       style="
         font-size:15px;
         font-style:italic;
         color:#e0e0e0 !important;
         text-decoration: underline;
         -webkit-text-fill-color:#e0e0e0;
       "
    >
      ${email}
    </a>
  </p>

  <hr style="border:none; border-top:1px solid #4f5162; margin:20px 0;" />

  <p style="font-size:15px; color:#e0e0e0; margin:8px 0;">
    ${message}
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
