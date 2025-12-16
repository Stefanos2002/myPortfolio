export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Stefanos Kaloulis",
    url: "https://kaloulis.dev",
    image: "https://kaloulis.dev/images/og-image.jpg",
    jobTitle: "Web Developer",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Patras",
      addressRegion: "Western Greece",
      addressCountry: "GR",
    },
    email: "kalouliss@gmail.com",
    sameAs: [
      "https://github.com/Stefanos2002",
      "https://www.linkedin.com/in/stefanos-kaloulis-b4ba792b6/",
    ],
  };

  return (
    <section>
      {/* Add JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
