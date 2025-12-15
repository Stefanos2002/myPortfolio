import AOSWrapper from "../components/Animations/AOSWrapper/AOSWrapper";
import ServiceClient from "../components/Services/ServiceClient/ServiceClient";

export default function Services() {
  const data = [
    {
      number: "01",
      title: "Web Design",
      description:
        "Crafting modern, and visually appealing layouts tailored to client needs while ensuring both aesthetics and usability.",
      intro:
        "During my studies and professional experience, I have designed websites focused on usability, clean structure, and modern visuals. My work includes redesigns for real businesses such as Boston Kitchen, Nekenergy, and SET, where I improved layouts, optimized structure, and enhanced the overall user experience.",
      qualifications: [
        "Custom UI layouts built with modern design principles",
        "Clean, professional structures using HTML5, CSS, and Tailwind CSS",
        "Improved readability, spacing, and visual hierarchy",
        "Mobile-first design approach",
        "Brand-aligned presentation and style consistency",
      ],
      image: "/images/web-design.jpeg",
      focus:
        "Creating user-centric designs that balance aesthetics with functionality.",
    },
    {
      number: "02",
      title: "Web Development",
      description:
        "Building fast, dynamic, and scalable websites using HTML, CSS, JavaScript, React, Next.js, TypeScript, and Tailwind CSS.",
      intro:
        "I develop dynamic, responsive, and scalable websites using technologies I have learned through university, personal projects, and my internship at Omega Systems. I specialize in React, Next.js, and TypeScript, and have built full-stack applications such as CineGame Critic, hosted on Vercel.",
      qualifications: [
        "Full frontend development with React & Next.js",
        "Clean, structured code using TypeScript",
        "API integration (REST, external APIs like RAWG/TMDB)",
        "Dynamic elements with JavaScript & React hooks",
        "Authentication (NextAuth)",
        "Performance optimization & SEO-friendly builds",
      ],
      image: "/images/web-dev.webp",
      focus:
        "Creating user-centric designs that balance aesthetics with functionality.",
    },
    {
      number: "03",
      title: "Wordpress",
      description:
        "Building custom themes, adding features, optimizing design, and enhancing WordPress performance.",
      intro:
        "I have hands-on experience working with custom WordPress themes, both during my internship and in professional projects like the SET store website. I’ve modified templates, rewritten components, and improved design and functionality through PHP, CSS, JavaScript, and Twig.",
      qualifications: [
        "Custom WordPress theme editing (PHP, CSS, Twig)",
        "Feature development and UI enhancements",
        "WooCommerce customization",
        "Dynamic content using PHP & database fields",
        "Correct enqueueing of scripts & styles for performance",
        "Speed optimization and responsive improvements",
      ],
      image: "/images/wordpress.png",
      focus:
        "Delivering optimized, reliable, and visually improved WordPress sites for real businesses.",
    },
    {
      number: "04",
      title: "Responsive Design",
      description:
        "Ensuring seamless user experiences across all devices with fully responsive, mobile-friendly layouts.",
      intro:
        "I ensure that every website I build is fully responsive and mobile-friendly. I’ve delivered major responsiveness improvements for projects such as SET, Nekenergy, and Boston Kitchen, where I optimized layout behavior on phones, tablets, and larger screens.",
      qualifications: [
        "Mobile-first structure with CSS and Tailwind",
        "Flexible grids, optimized scaling, and adaptive components",
        "Fixing broken layouts, alignment issues, and spacing",
        "Improving usability on touch devices",
        "Cross-device testing",
      ],
      image: "/images/responsive2.png",
      focus:
        "Giving users a smooth and consistent experience on any screen size.",
    },
    {
      number: "05",
      title: "Website Maintenance",
      description:
        "Providing updates, bug fixes, content changes, and overall optimization to keep websites fast and reliable.",
      intro:
        "Through my internship, I provided maintenance for real client websites — fixing bugs, updating content, improving performance, and making UI/UX enhancements. I also worked directly with clients, delivering updates on time and ensuring service quality.",
      qualifications: [
        "Bug fixing and troubleshooting",
        "Content updates (images, text, pages, product info)",
        "Speed improvements",
        "Layout adjustments and UI fixes",
        "Updating plugins, scripts, or dependencies",
        "Ensuring stable website operation",
      ],
      image: "/images/web-maintenance.webp",
      focus: "Keeping your website secure, fast, and fully up-to-date.",
    },
    {
      number: "06",
      title: "DNS & Database",
      description:
        "Managing DNS records, configuring domains, and handling database administration tasks.",
      intro:
        "At Omega Systems, I handled DNS records, ensured proper domain routing, and managed databases through phpMyAdmin. I worked with live production environments, making precise changes to avoid downtime and maintain data integrity.",
      qualifications: [
        "DNS records configuration (A, MX, CNAME, TXT, SPF, etc.)",
        "Domain routing, subdomains, and email verification setup",
        "Database modifications using phpMyAdmin",
        "Optimization and cleanup for better performance",
        "Backup and restore workflows",
        "Troubleshooting hosting or connection issues",
      ],
      image: "/images/database2.png",
      focus:
        "Ensuring domains, servers, and databases run reliably and securely.",
    },
  ];

  return (
    <div className="flex px-10 min-[830px]:px-20 min-h-screen relative pt-24 xl:pt-10 flex-col w-full">
      <AOSWrapper />
      <div
        data-aos="fade-right"
        className="flex w-full pb-10 pt-10 flex-col order-1"
      >
        <span className="text-neutral-400 transition-colors duration-300 light:text-black light:border-[0.5] light:border-stone-400 text-xs mb-4 bg-neutral-800 light:bg-stone-300 light:font-semibold w-max uppercase p-3">
          Services
        </span>
        <h1 className="text-white light:text-black transition-all duration-300 font-extrabold text-3xl">
          What I Do
        </h1>
      </div>
      <ServiceClient data={data} />
    </div>
  );
}
