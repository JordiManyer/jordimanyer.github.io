import { page } from "fresh";
import { define } from "../utils.ts";
import Layout from "../components/Layout.tsx";
import Head from "../components/Head.tsx";
import PublicationCard, {
  type Publication,
} from "../islands/PublicationCard.tsx";
import SlideCard, { type Slide } from "../islands/SlidesCard.tsx";
import { loadPublications, loadSlides } from "../utils/bibtex.ts";

export const handler = define.handlers({
  async GET(_ctx) {
    try {
      console.log("Loading publications and slides...");
      const [publications, slides] = await Promise.all([
        loadPublications(),
        loadSlides(),
      ]);
      console.log(
        `Loaded ${publications.length} publications and ${slides.length} slides`,
      );
      return page({ publications, slides });
    } catch (error) {
      console.error("Error in publications handler:", error);
      return page({
        publications: [] as Publication[],
        slides: [] as Slide[],
      });
    }
  },
});

export default define.page<typeof handler>(function Publications({ data }) {
  const { publications, slides } = data;

  return (
    <>
      <Head
        title="Publications"
        description="Academic publications by Jordi Manyer in computational mathematics and distributed computing."
        type="website"
        path="/publications"
      />
      <Layout active="/publications">
        <div class="space-y-8">
          <h1 class="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Preprints
          </h1>

          <div class="space-y-6">
            {publications.map((publication) =>
              publication.unpublished
                ? (
                  <PublicationCard
                    key={publication.title}
                    publication={publication}
                  />
                )
                : null
            )}
          </div>

          <h1 class="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Publications
          </h1>

          <div class="space-y-6">
            {publications.map((publication) =>
              publication.unpublished ? null : (
                <PublicationCard
                  key={publication.title}
                  publication={publication}
                />
              )
            )}
          </div>

          <h1 class="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Slides
          </h1>

          <div class="space-y-6">
            {slides.map((slide) => (
              <SlideCard
                key={slide.title}
                slide={slide}
              />
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
});
