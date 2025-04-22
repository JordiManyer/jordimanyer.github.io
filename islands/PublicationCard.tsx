import { useSignal } from "@preact/signals";

export interface Publication {
  title: string;
  authors: string;
  journal: string;
  year: number;
  doi?: string;
  abstract?: string;
  type: string;
  bibtex?: string;
}

export default function PublicationCard(
  { publication }: { publication: Publication },
) {
  const isCopied = useSignal(false);

  const copyBibtex = async () => {
    if (!publication.bibtex) return;

    try {
      await navigator.clipboard.writeText(publication.bibtex);
      isCopied.value = true;
      setTimeout(() => {
        isCopied.value = false;
      }, 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div class="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
      <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
        {publication.title}
      </h2>
      <p class="text-gray-600 dark:text-gray-300 mb-2">
        {publication.authors}
      </p>
      <div class="flex flex-wrap items-center gap-2 text-gray-500 dark:text-gray-400 text-sm mb-4">
        <span>{publication.journal} ({publication.year})</span>
        {publication.doi && (
          <>
            <span>•</span>
            <a
              href={`https://doi.org/${publication.doi}`}
              class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              DOI: {publication.doi}
            </a>
          </>
        )}
        {publication.bibtex && (
          <>
            <span>•</span>
            <button
              type="button"
              onClick={copyBibtex}
              class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:underline focus:outline-none"
            >
              {isCopied.value ? "Copied!" : "Copy BibTeX"}
            </button>
          </>
        )}
      </div>
      {publication.abstract && (
        <div class="prose dark:prose-invert max-w-none">
          <p class="text-gray-600 dark:text-gray-300">
            {publication.abstract}
          </p>
        </div>
      )}
    </div>
  );
}
