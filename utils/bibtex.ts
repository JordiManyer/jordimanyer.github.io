import { Publication } from "../islands/PublicationCard.tsx";

interface BibTeXEntry {
  type: string;
  citationKey: string;
  fieldsString: string;
  fields: Record<string, string>;
}

function parseBibTeX(bibtex: string): BibTeXEntry[] {
  const entries: BibTeXEntry[] = [];
  const entryRegex = /@(\w+)\s*{\s*([^,]+),([^@]+)}/g;
  const fieldRegex = /\s*(\w+)\s*=\s*{([^}]+)}/g;

  let match;
  while ((match = entryRegex.exec(bibtex)) !== null) {
    const [_, type, citationKey, fieldsString] = match;
    const fields: Record<string, string> = {};

    let fieldMatch;
    while ((fieldMatch = fieldRegex.exec(fieldsString)) !== null) {
      const [__, key, value] = fieldMatch;
      fields[key.toLowerCase()] = value.trim();
    }

    entries.push({
      type,
      citationKey,
      fieldsString,
      fields,
    });
  }

  return entries;
}

function formatAuthors(authorString: string): string {
  return authorString
    .split(" and ")
    .map((author) => author.trim())
    .join(", ");
}

function generateBibTeXString(entry: BibTeXEntry): string {
  return `@${entry.type}{${entry.citationKey},${entry.fieldsString}}`;
}

export async function loadPublications(): Promise<Publication[]> {
  try {
    const bibtex = await Deno.readTextFile("static/publications.bib");
    const entries = parseBibTeX(bibtex);

    return entries.map((entry) => {
      const fields = entry.fields;
      const publication: Publication = {
        type: entry.type.toLowerCase(),
        title: fields.title,
        authors: formatAuthors(fields.author),
        journal: fields.journal,
        year: parseInt(fields.year),
        bibtex: generateBibTeXString(entry),
        unpublished: entry.type.toLowerCase() === "unpublished",
      };

      if (fields.doi) {
        publication.doi = fields.doi;
      }

      if (fields.abstract) {
        publication.abstract = fields.abstract;
      }

      if (fields.eprint && (fields.archiveprefix.toLowerCase() === "arxiv")) {
        publication.arxiv = `https://arxiv.org/abs/${fields.eprint}`;
      }

      return publication;
    }).sort((a, b) => b.year - a.year); // Sort by year, newest first
  } catch (error) {
    console.error("Error loading publications:", error);
    return [];
  }
}
