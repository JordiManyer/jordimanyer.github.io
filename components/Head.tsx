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
  description = "Jordi Manyer's personal website.",
  image = "/profile.jpg",
  type = "website",
  path = "",
}: HeadProps) {
  const siteUrl = "https://jordimanyer.deno.dev";
  const fullUrl = `${siteUrl}${path}`;
  const fullTitle = title === "Jordi Manyer"
    ? title
    : `${title} | Jordi Manyer`;
  const faviconFolder = "/favicon_Skranji_J";

  return (
    <FreshHead>
      {/* Theme Script - Must be first to prevent flash */}
      <script id="theme-script">
        {`
          const theme = localStorage.getItem('theme') || 
            (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
          if (theme === 'dark') document.documentElement.classList.add('dark');
        `}
      </script>

      {/* Resource Hints */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />

      {/* Basic Meta Tags */}
      <html lang="en" /> {/* Language declaration */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="author" content="Jordi Manyer" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="theme-color"
        content="#ffffff"
        media="(prefers-color-scheme: light)"
      />
      <meta
        name="theme-color"
        content="#111827"
        media="(prefers-color-scheme: dark)"
      />
      <meta name="color-scheme" content="light dark" />
      <link rel="canonical" href={fullUrl} />
      <meta name="robots" content="index, follow" />

      {/* Open Graph Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${image}`} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Jordi Manyer" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${image}`} />

      {/* Academic Profile Tags */}
      <meta name="citation_author" content="Jordi Manyer" />
      <meta name="citation_author_institution" content="Monash University" />
      <meta
        name="keywords"
        content="computational mathematics, distributed computing, finite element methods, scientific computing, high-performance computing, Jordi Manyer, Monash University"
      />

      {/* Favicon */}
      <link
        rel="icon"
        type="image/x-icon"
        href={`${faviconFolder}/favicon.ico`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={`${faviconFolder}/favicon-32x32.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={`${faviconFolder}/favicon-16x16.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={`${faviconFolder}/apple-touch-icon.png`}
      />

      {/* Schema.org for Google Scholar and Rich Results */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Jordi Manyer",
          "givenName": "Jordi",
          "familyName": "Manyer",
          "email": "jordi.manyer@monash.edu",
          "jobTitle": "Computational Mathematics Researcher",
          "affiliation": {
            "@type": "Organization",
            "name": "Monash University",
            "@id": "https://www.monash.edu/",
          },
          "url": siteUrl,
          "sameAs": [
            "https://scholar.google.com.au/citations?user=f3REzuoAAAAJ&hl=en&authuser=4",
            "https://orcid.org/0000-0002-0178-3890",
            "https://www.linkedin.com/in/jordi-manyer-fuertes/",
          ],
          "alumniOf": [],
          "knowsAbout": [
            "Computational Mathematics",
            "Distributed Computing",
            "Finite Element Methods",
            "Scientific Computing",
            "High-Performance Computing",
          ],
          "image": `${siteUrl}${image}`,
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": fullUrl,
          },
        })}
      </script>
    </FreshHead>
  );
}
