export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: "K Dental Hub",
    description:
      "Premium dental care for children and families. Modern, child-friendly, and trusted dental clinic offering comprehensive dental services.",
    url: "https://kdentalhub.com",
    telephone: "+1-123-456-7890",
    email: "hello@kdentalhub.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Dental Care Boulevard, Suite 200",
      addressLocality: "New York",
      addressRegion: "NY",
      postalCode: "10001",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 40.7407679,
      longitude: -74.0042587,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Thursday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Wednesday",
        opens: "09:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Friday",
        opens: "09:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "15:00",
      },
    ],
    priceRange: "$$",
    image:
      "https://images.pexels.com/photos/6502552/pexels-photo-6502552.jpeg?auto=compress&cs=tinysrgb&w=1200",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "256",
      bestRating: "5",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Dental Services",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "Preventive Care",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Dental Checkup",
                description:
                  "Comprehensive dental examinations with digital X-rays and oral cancer screening.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Cavity Protection",
                description:
                  "Advanced cavity prevention using dental sealants and fluoride treatments.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Deep Cleaning",
                description:
                  "Thorough scaling and root planing for gum health.",
              },
            },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Restorative & Cosmetic",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Root Canal Treatment",
                description:
                  "Pain-free root canal therapy with modern techniques.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Teeth Whitening",
                description:
                  "Professional whitening treatments for a brighter smile.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Dental Implant",
                description:
                  "Permanent tooth replacement with state-of-the-art implants.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Teeth Straightening",
                description:
                  "Clear aligners and braces for a perfectly aligned smile.",
              },
            },
          ],
        },
      ],
    },
    sameAs: [
      "https://facebook.com/kdentalhub",
      "https://instagram.com/kdentalhub",
      "https://twitter.com/kdentalhub",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceSchema({
  name,
  description,
  image,
  priceRange,
  url,
}: {
  name: string;
  description: string;
  image: string;
  priceRange: string;
  url: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    name,
    description,
    image,
    provider: {
      "@type": "Dentist",
      name: "K Dental Hub",
      url: "https://kdentalhub.com",
    },
    areaServed: {
      "@type": "City",
      name: "New York",
    },
    offers: {
      "@type": "Offer",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "USD",
        price: priceRange,
      },
    },
    url,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
