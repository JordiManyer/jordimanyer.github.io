import { Handlers, PageProps } from "$fresh/server.ts";
import Layout from "../components/Layout.tsx";
import Head from "../components/Head.tsx";
import PublicationCard, {
  type Publication,
} from "../islands/PublicationCard.tsx";
import { loadPublications } from "../utils/bibtex.ts";

interface Data {
  publications: Publication[];
}

export const handler: Handlers<Data> = {
  async GET(_, ctx) {
    try {
      console.log("Loading publications...");
      const publications = await loadPublications();
      console.log(`Loaded ${publications.length} publications`);
      return ctx.render({ publications });
    } catch (error) {
      console.error("Error in publications handler:", error);
      return ctx.render({ publications: [] });
    }
  },
};

export default function Publications({ data }: PageProps<Data>) {
  const { publications } = data;

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
            Publications
          </h1>

          <div class="space-y-6">
            {publications.map((publication) => (
              publication.unpublished ? null : 
              <PublicationCard
                key={publication.title}
                publication={publication}
              />
            ))}
          </div>

          <h1 class="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Preprints
          </h1>

          <div class="space-y-6">
            {publications.map((publication) => (
              publication.unpublished ? 
              <PublicationCard
                key={publication.title}
                publication={publication}
              /> : null
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
}
