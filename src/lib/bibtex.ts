import { readFile } from "node:fs/promises";
import type { Publication } from "../components/PublicationCard.tsx";
import type { Slide } from "../components/SlideCard.tsx";

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

// A missing or unreadable .bib file throws, so that the build fails rather than
// publishing an empty page.
export async function loadPublications(): Promise<Publication[]> {
  const bibtex = await readFile("public/publications.bib", "utf8");
  const entries = parseBibTeX(bibtex);

  return entries.map((entry) => {
    const fields = entry.fields;
    const publication: Publication = {
      type: entry.type.toLowerCase(),
      title: fields.title,
      authors: formatAuthors(fields.author),
      journal: fields.journal ?? fields.booktitle,
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
    } else if (fields.url) {
      // Non-arXiv preprint (e.g. HAL): link to the URL given in the entry.
      publication.preprint = fields.url;
    }

    return publication;
  }).sort((a, b) => b.year - a.year); // Sort by year, newest first
}

export async function loadSlides(): Promise<Slide[]> {
  const bibtex = await readFile("public/presentations.bib", "utf8");
  const entries = parseBibTeX(bibtex);

  return entries.map((entry) => {
    const fields = entry.fields;
    const slide: Slide = {
      type: entry.type.toLowerCase(),
      title: fields.title,
      authors: formatAuthors(fields.author),
      conference: fields.booktitle,
      year: parseInt(fields.year),
      place: fields.address,
      pdfpath: fields.pdfpath,
      note: fields.note,
    };
    return slide;
  }).sort((a, b) => b.year - a.year); // Sort by year, newest first
}
