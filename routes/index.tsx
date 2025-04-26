import Layout from "../components/Layout.tsx";
import Head from "../components/Head.tsx";

export default function About() {
  return (
    <>
      <Head
        title="About"
        description="About Jordi Manyer - Computational Mathematics Researcher at Monash University"
        path="/"
      />
      <Layout active="/">
        <div class="space-y-12">
          {/* Profile Section */}
          <section class="text-center space-y-6">
            <div class="flex justify-center">
              <img
                src="https://github.com/JordiManyer.png"
                alt="Jordi Manyer"
                class="w-48 h-48 rounded-full shadow-lg border-2 border-gray-200 dark:border-gray-700"
              />
            </div>
            <div class="space-y-4">
              <h1 class="text-4xl font-bold text-gray-900 dark:text-gray-100">
                Jordi Manyer
              </h1>
              <p class="text-xl text-gray-600 dark:text-gray-300">
                PhD Student in Computational Mathematics
              </p>
              <p class="text-lg text-gray-600 dark:text-gray-300">
                School of Mathematics, Monash University
              </p>
            </div>
          </section>

          {/* About Section */}
          <section class="prose dark:prose-invert max-w-none">
            <p class="text-gray-700 dark:text-gray-300">
              Welcome to my academic website. I am a researcher in computational
              mathematics at Monash University. My research revolves around
              numerical methods for partial differential equations, with focus
              on finite-element methods and high-performance computing.
            </p>
            <p class="text-gray-700 dark:text-gray-300">
              I am also a passionate advocate for open-source research and
              software. I actively contribute to various projects in the Julia
              scientific computing community.
            </p>
            <p class="text-gray-700 dark:text-gray-300">
              Current research interests include:
              <ul class="list-disc list-inside text-gray-700 dark:text-gray-300">
                <li>Robust and scalable solvers for multiphysics problems.</li>
                <li>Non-conforming hybrid polytopal methods.</li>
              </ul>
            </p>
          </section>

          {/* Contact Information */}
          <section class="space-y-6">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100">
              Contact Information
            </h2>

            <div class="grid md:grid-cols-2 gap-6">
              {/* Contact Details - Left Column */}
              <div class="space-y-6">
                <div class="flex items-start space-x-3">
                  <svg
                    class="w-6 h-6 text-gray-600 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <div>
                    <p class="font-medium text-gray-900 dark:text-gray-100">
                      Email
                    </p>
                    <a
                      href="mailto:jordi.manyer@monash.edu"
                      class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:underline"
                    >
                      jordi.manyer@monash.edu
                    </a>
                  </div>
                </div>

                <div class="flex items-start space-x-3">
                  <svg
                    class="w-6 h-6 text-gray-600 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <div>
                    <p class="font-medium text-gray-900 dark:text-gray-100">
                      Location
                    </p>
                    <p class="text-gray-600 dark:text-gray-300">
                      School of Mathematics, Monash University<br />
                      9 Rainforest Walk, Clayton VIC 3168<br />
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links - Right Column */}
              <div class="flex items-start space-x-3">
                <svg
                  class="w-6 h-6 text-gray-600 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                <div>
                  <p class="font-medium text-gray-900 dark:text-gray-100">
                    Social
                  </p>
                  <div class="space-y-1">
                    <a
                      href="https://orcid.org/0000-0002-0178-3890"
                      class="block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      ORCID
                    </a>
                    <a
                      href="https://github.com/JordiManyer"
                      class="block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                    <a
                      href="https://scholar.google.com/citations?user=f3REzuoAAAAJ&hl=en"
                      class="block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Google Scholar
                    </a>
                    <a
                      href="https://www.linkedin.com/in/jordi-manyer-fuertes/"
                      class="block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
