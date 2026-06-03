import { siteConfig } from "./data";

export function getPersonStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.title,
    description: siteConfig.summary,
    url: "https://prakashdeep.dev",
    sameAs: [siteConfig.github, siteConfig.linkedin],
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Artificial Intelligence",
      "SaaS Development",
    ],
  };
}

export function getWebsiteStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${siteConfig.name} | Portfolio`,
    description: siteConfig.tagline,
    url: "https://prakashdeep.dev",
    author: {
      "@type": "Person",
      name: siteConfig.name,
    },
  };
}
