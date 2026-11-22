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
    <div class="px-4 py-2 bg-gray-50 dark:bg-gray-800 rounded-lg">
      <h2 class="font-semibold text-gray-900 dark:text-gray-100">
        {slide.title}
      </h2>
      <p class="text-gray-600 dark:text-gray-300">
        {slide.authors}
      </p>
      <div class="flex flex-wrap items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
        <span>
          {slide.conference}, {slide.place} ({slide.year})
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
