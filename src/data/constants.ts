import ogImageSrc from "@images/social.png";

export const baseLocalization = "en-US";

export const SITE = {
  title: "Charity",
  tagline: "Tags",
  description: "Description text",
  description_short: "Description text (short)",
  url: "https://charity.com",
  author: "Author",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: baseLocalization,
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  }
};

export const OG = {
  locale: baseLocalization,
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: : Lorem Ipsum Lorem Ipsum`,
  description: "Some Lorem Ipsum Lorem Descriptions in Lorem Ipsum",
  image: ogImageSrc,
};
