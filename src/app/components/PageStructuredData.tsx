import Script from "next/script";

interface PageStructuredDataProps {
  type: "WebPage" | "AboutPage" | "ContactPage" | "Service" | "CollectionPage";
  title: string;
  description: string;
  url: string;
  breadcrumbs?: Array<{ name: string; url: string }>;
  services?: Array<{ name: string; description: string }>;
}

export default function PageStructuredData({
  type,
  title,
  description,
  url,
  breadcrumbs,
  services,
}: PageStructuredDataProps) {
  const baseUrl = "https://metricmindconcepts.com";

  // WebPage Schema
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": type,
    name: title,
    description: description,
    url: url,
    inLanguage: "en-NG",
    isPartOf: {
      "@type": "WebSite",
      name: "Metricmind Concepts",
      url: baseUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "Metricmind Concepts",
      url: baseUrl,
    },
    ...(breadcrumbs && breadcrumbs.length > 0 && {
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((crumb, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: crumb.name,
          item: crumb.url,
        })),
      },
    }),
  };

  // Service Schema for services page
  const serviceListSchema = services
    ? {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "IT and Digital Services",
        description: "Comprehensive list of services offered by Metricmind Concepts",
        itemListElement: services.map((service, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "Service",
            name: service.name,
            description: service.description,
            provider: {
              "@type": "Organization",
              name: "Metricmind Concepts",
            },
            areaServed: {
              "@type": "Country",
              name: "Nigeria",
            },
          },
        })),
      }
    : null;

  return (
    <>
      <Script
        id={`page-schema-${type.toLowerCase()}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      {serviceListSchema && (
        <Script
          id="service-list-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceListSchema) }}
        />
      )}
    </>
  );
}

