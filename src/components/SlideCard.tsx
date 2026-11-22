export interface Slide {
  type: string;
  title: string;
  authors: string;
  conference: string;
  place: string;
  year: number;
  pdfpath: string;
  note: string;
}

export default function SlideCard(
  { slide }: { slide: Slide },
) {
  return (
    <div class="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
      <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
        {slide.title}
      </h2>
      <p class="text-gray-600 dark:text-gray-300 mb-2">
        {slide.authors}
      </p>
      <div class="flex flex-wrap items-center gap-2 text-gray-500 dark:text-gray-400 text-sm mb-4">
        <span>
          Presented at {slide.conference} in {slide.place} ({slide.year})
        </span>
        <span>•</span>
        <span>{slide.note}</span>
        <span>•</span>
        <a
          href={slide.pdfpath}
          class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get slides
        </a>
      </div>
    </div>
  );
}
