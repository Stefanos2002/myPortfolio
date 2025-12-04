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
        "I develop dynamic, responsive, and scalable websites using technologies I have mastered through university, personal projects, and my internship at Omega Systems. I specialize in React, Next.js, and TypeScript, and have built full-stack applications such as CineGame Critic, hosted on Vercel.",
      qualifications: [
        "Full frontend development with React & Next.js",
        "Clean, structured code using TypeScript",
        "API integration (REST, external APIs like RAWG/TMDB)",
        "Dynamic elements with JavaScript & Bootstrap",
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
        "I have hands-on experience working with custom WordPress themes, both during my internship and in professional projects like the SET store website. I’ve modified templates, rewritten components, and improved design and functionality through PHP, CSS, JavaScript, and Twig.",
      qualifications: [
        "Custom WordPress theme editing (PHP, CSS, Twig)",
        "Feature development and UI enhancements",
        "WooCommerce customization",
        "Dynamic content using PHP & database fields",
        "Correct enqueueing of scripts & styles for performance",
        "Speed optimization and responsive improvements",
      ],
      image: "/images/responsive.png",
      focus:
        "Delivering optimized, reliable, and visually improved WordPress sites for real businesses.",
    },
    {
      number: "05",
      title: "Website Maintenance",
      description:
        "Providing updates, bug fixes, content changes, and overall optimization to keep websites fast and reliable.",
      intro: "",
    },
    {
      number: "06",
      title: "DNS & Database",
      description:
        "Managing DNS records, configuring domains, and handling database administration tasks.",
      intro: "",
    },
  ];

  return (
    <div className="flex relative pt-10 pr-22 pl-20 flex-col w-full h-full">
      <AOSWrapper />
      <div
        data-aos="fade-right"
        className="flex w-full pb-10 pt-10 flex-col order-1"
      >
        <span className="text-neutral-400 text-xs mb-4 bg-neutral-800 w-max uppercase p-3">
          Services
        </span>
        <h1 className="text-white font-extrabold text-3xl">What I Do</h1>
      </div>
      <ServiceClient data={data} />
    </div>
  );
}
