import { Publication } from "../islands/PublicationCard.tsx";

interface BibTeXEntry {
  type: string;
  citationKey: string;
  fields: Record<string, string>;
}

function parseBibTeX(bibtex: string): BibTeXEntry[] {
  const entries: BibTeXEntry[] = [];
  const entryRegex = /@(\w+)\s*{\s*([^,]+),([^@]+)}/g;
  const fieldRegex = /\s*(\w+)\s*=\s*{([^}]+)}/g;

  let match;
  while ((match = entryRegex.exec(bibtex)) !== null) {
    const [_, type, citationKey, fieldsStr] = match;
    const fields: Record<string, string> = {};

    let fieldMatch;
    while ((fieldMatch = fieldRegex.exec(fieldsStr)) !== null) {
      const [__, key, value] = fieldMatch;
      fields[key.toLowerCase()] = value.trim();
    }

    entries.push({
      type,
      citationKey,
      fields,
    });
  }

  return entries;
}

function formatAuthors(authorString: string): string {
  return authorString
    .split(" and ")
    .map(author => author.trim())
    .join(", ");
}

export async function loadPublications(): Promise<Publication[]> {
  try {
    const bibtex = await Deno.readTextFile("static/publications.bib");
    const entries = parseBibTeX(bibtex);

    return entries.map(entry => {
      const publication: Publication = {
        title: entry.fields.title,
        authors: formatAuthors(entry.fields.author),
        journal: entry.fields.journal,
        year: parseInt(entry.fields.year),
        type: entry.type.toLowerCase(),
        bibtex: `@${entry.type}{${entry.citationKey},
  title = {${entry.fields.title}},
  author = {${entry.fields.author}},
  journal = {${entry.fields.journal}},
  year = {${entry.fields.year}}${entry.fields.doi ? `,
  doi = {${entry.fields.doi}}` : ""}
}`
      };

      if (entry.fields.doi) {
        publication.doi = entry.fields.doi;
      }

      if (entry.fields.abstract) {
        publication.abstract = entry.fields.abstract;
      }

      return publication;
    }).sort((a, b) => b.year - a.year); // Sort by year, newest first
  } catch (error) {
    console.error("Error loading publications:", error);
    return [];
  }
} 