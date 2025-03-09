import { Handlers, PageProps } from "$fresh/server.ts";
import Layout from "../components/Layout.tsx";
import Head from "../components/Head.tsx";
import PublicationCard, { type Publication } from "../islands/PublicationCard.tsx";
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
              <PublicationCard key={publication.title} publication={publication} />
            ))}
          </div>

          <div class="prose dark:prose-invert max-w-none">
            <h2 class="text-gray-900 dark:text-gray-100">Preprints and Working Papers</h2>
            <p class="text-gray-700 dark:text-gray-300">
              Coming soon...
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
} 