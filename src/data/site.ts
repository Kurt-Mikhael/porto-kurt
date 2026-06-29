const SITE_URL = "https://info-kurt.vercel.app";

export const siteConfig = {
  url: SITE_URL,
  name: "Kurt Mikhael Purba",
  handle: "kurt_mikhael",
  photo: "/foto-porto.webp",
} as const;

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: "Kurt Mikhael Purba",
  givenName: "Kurt Mikhael",
  familyName: "Purba",
  alternateName: "Kurt",
  url: SITE_URL,
  mainEntityOfPage: { "@type": "WebPage", "@id": SITE_URL },
  image: {
    "@type": "ImageObject",
    url: `${SITE_URL}/foto-porto.webp`,
    width: 320,
    height: 320,
    caption: "Kurt Mikhael Purba",
  },
  jobTitle: "Software Engineer & Data Science Enthusiast",
  description:
    "Informatics Engineering student at Institut Teknologi Bandung specializing in Software Engineering, Data Science, and AI/ML.",
  nationality: { "@type": "Country", name: "Indonesia" },
  homeLocation: { "@type": "Place", name: "Bandung, Indonesia" },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Institut Teknologi Bandung",
    sameAs: "https://www.itb.ac.id",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bandung",
      addressCountry: "ID",
    },
  },
  knowsAbout: [
    "Software Engineering",
    "Data Science",
    "Machine Learning",
    "Artificial Intelligence",
    "Frontend Development",
    "React",
    "Next.js",
    "TypeScript",
    "Python",
    "FastAPI",
    "PostgreSQL",
    "Computer Vision",
    "Deep Learning",
    "PyTorch",
  ],
  hasOccupation: {
    "@type": "Occupation",
    name: "Software Engineer",
    occupationLocation: { "@type": "Country", name: "Indonesia" },
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Python",
      "Machine Learning",
      "Data Science",
    ],
  },
  sameAs: [
    "https://github.com/kurt-mikhael",
    "https://linkedin.com/in/kurt-mikhael-purba",
    "https://instagram.com/kurt_mikhael",
  ],
} as const;

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Kurt Mikhael Purba Portfolio",
  description:
    "Official portfolio website of Kurt Mikhael Purba, Informatics Engineering student at ITB.",
  inLanguage: "en-US",
  publisher: { "@id": `${SITE_URL}/#person` },
  author: { "@id": `${SITE_URL}/#person` },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `https://www.google.com/search?q=site:${new URL(SITE_URL).host}+{search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
} as const;

export const profilePageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${SITE_URL}/#profilepage`,
  url: SITE_URL,
  name: "Kurt Mikhael Purba - Software Engineer Portfolio",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  mainEntity: { "@id": `${SITE_URL}/#person` },
  about: { "@id": `${SITE_URL}/#person` },
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: `${SITE_URL}/foto-porto.webp`,
    width: 320,
    height: 320,
  },
  inLanguage: "en-US",
} as const;

export const jsonLdBlocks = [
  personJsonLd,
  websiteJsonLd,
  profilePageJsonLd,
] as const;
