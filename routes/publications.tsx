import Layout from "../components/Layout.tsx";
import Head from "../components/Head.tsx";
import PublicationCard, { type Publication } from "../islands/PublicationCard.tsx";

const publications: Publication[] = [
  {
    title: "Gridap: An extensible Finite Element toolbox in Julia",
    authors: "F. Verdugo, S. Badia, A. F. Martin, S. Claus, R. Royo, J. Manyer",
    journal: "Journal of Open Source Software",
    year: 2021,
    doi: "10.21105/joss.02520",
    type: "journal-article",
    bibtex: `@article{Verdugo2021,
  title = {Gridap: An extensible Finite Element toolbox in Julia},
  author = {Verdugo, F. and Badia, S. and Martin, A. F. and Claus, S. and Royo, R. and Manyer, J.},
  journal = {Journal of Open Source Software},
  year = {2021},
  doi = {10.21105/joss.02520}
}`
  },
  {
    title: "GridapDistributed: A distributed-memory implementation of the Gridap finite element library",
    authors: "J. Manyer, S. Badia, A. F. Martin",
    journal: "Computer Physics Communications",
    year: 2023,
    type: "journal-article",
    bibtex: `@article{Manyer2023,
  title = {GridapDistributed: A distributed-memory implementation of the Gridap finite element library},
  author = {Manyer, J. and Badia, S. and Martin, A. F.},
  journal = {Computer Physics Communications},
  year = {2023}
}`
  },
];

export default function Publications() {
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
              <PublicationCard publication={publication} />
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