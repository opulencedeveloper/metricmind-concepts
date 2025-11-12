import Script from "next/script";

export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    name: "Metricmind Concepts",
    description: "Trusted IT and digital solutions company in Aba, Abia State, Nigeria. Providing computer training, CAC services, graphics design, online applications, and comprehensive digital solutions for businesses and individuals.",
    url: "https://metricmindconcepts.com",
    logo: {
      "@type": "ImageObject",
      url: "https://metricmindconcepts.com/logo.jpg",
      width: 1200,
      height: 630,
      contentUrl: "https://metricmindconcepts.com/logo.jpg",
    },
    image: {
      "@type": "ImageObject",
      url: "https://metricmindconcepts.com/logo.jpg",
      width: 1200,
      height: 630,
      contentUrl: "https://metricmindconcepts.com/logo.jpg",
    },
    telephone: "+234-810-259-2057",
    email: "metricmindconcepts@gmail.com",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "No. 7 Omuma Road, By Amaogbonna, Off Osusu Road",
      addressLocality: "Aba",
      addressRegion: "Abia State",
      postalCode: "440001",
      addressCountry: "NG",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "5.1066",
      longitude: "7.3667",
    },
    areaServed: {
      "@type": ["City", "State", "Country"],
      name: ["Aba", "Abia State", "Nigeria"],
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+234-810-259-2057",
        contactType: "Customer Service",
        email: "metricmindconcepts@gmail.com",
        areaServed: "NG",
        availableLanguage: "en",
      },
      {
        "@type": "ContactPoint",
        telephone: "+234-810-259-2057",
        contactType: "Sales",
        email: "metricmindconcepts@gmail.com",
        areaServed: "NG",
        availableLanguage: "en",
      },
    ],
    sameAs: [
      "https://www.instagram.com/MetricmindConcepts",
      "https://www.facebook.com/MetricmindConcepts",
      "https://www.twitter.com/MetricmindConcepts",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "100",
      bestRating: "5",
      worstRating: "1",
    },
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "IT and Digital Solutions",
    provider: {
      "@type": "Organization",
      name: "Metricmind Concepts",
    },
    areaServed: {
      "@type": "Country",
      name: "Nigeria",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Digital Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Computer & IT Solutions",
            description: "General computer services, networking, data recovery, email and domain setup",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "CAC & Business Support",
            description: "Business registration, annual returns, TIN processing, business consultancy",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Computer Training & Digital Skills",
            description: "MS Office training, programming classes, graphics design, UI/UX design",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Graphics Design & Printing",
            description: "Logo design, branding, printing services, digital marketing materials",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "NYSC Services",
            description: "NYSC documentation, clearance assistance, and related services",
          },
        },
      ],
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Metricmind Concepts",
    url: "https://metricmindconcepts.com",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://metricmindconcepts.com/?s={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://metricmindconcepts.com",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What services does Metricmind Concepts offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Metricmind Concepts offers comprehensive IT and digital solutions including computer training, CAC business registration services, graphics design, online applications, IT consultancy, networking services, and NYSC documentation assistance.",
        },
      },
      {
        "@type": "Question",
        name: "Where is Metricmind Concepts located?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Metricmind Concepts is located at No. 7 Omuma Road, By Amaogbonna, Off Osusu Road, Aba, Abia State, Nigeria.",
        },
      },
      {
        "@type": "Question",
        name: "How can I contact Metricmind Concepts?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can contact Metricmind Concepts by phone at +234 810 259 2057, email at metricmindconcepts@gmail.com, or visit our office in Aba, Abia State.",
        },
      },
      {
        "@type": "Question",
        name: "Does Metricmind Concepts provide CAC registration services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Metricmind Concepts provides comprehensive CAC services including business name registration, company incorporation, annual returns filing, TIN processing, and business consultancy services.",
        },
      },
      {
        "@type": "Question",
        name: "What computer training programs are available?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Metricmind Concepts offers training in MS Office applications (Word, Excel, PowerPoint), CorelDraw, programming languages (HTML, Python, Java), graphics design, animation, and UI/UX design.",
        },
      },
    ],
  };

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}

