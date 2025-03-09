import { Head as FreshHead } from "$fresh/runtime.ts";

interface HeadProps {
  title?: string;
  description?: string;
  image?: string;
  type?: string;
  path?: string;
}

export default function Head({
  title = "Jordi Manyer",
  description = "Computational Mathematics Researcher at Monash University, specializing in distributed computing and finite element methods.",
  image = "/profile.jpg",
  type = "website",
  path = "",
}: HeadProps) {
  const siteUrl = "https://jordimanyer.github.io";
  const fullUrl = `${siteUrl}${path}`;
  const fullTitle = title === "Jordi Manyer" ? title : `${title} | Jordi Manyer`;

  return (
    <FreshHead>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="author" content="Jordi Manyer" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${image}`} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Jordi Manyer" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${image}`} />
      
      {/* Academic Profile Tags */}
      <meta name="citation_author" content="Jordi Manyer" />
      <meta name="citation_author_institution" content="Monash University" />
      
      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      
      {/* Schema.org for Google Scholar */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Jordi Manyer",
          "jobTitle": "Computational Mathematics Researcher",
          "affiliation": {
            "@type": "Organization",
            "name": "Monash University"
          },
          "url": siteUrl,
          "sameAs": [
            "https://github.com/jordimanyer",
            "https://orcid.org/0000-0002-0178-3890"
          ]
        })}
      </script>
    </FreshHead>
  );
} 