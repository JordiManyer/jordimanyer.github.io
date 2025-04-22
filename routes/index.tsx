import Layout from "../components/Layout.tsx";

export default function Home() {
  return (
    <Layout active="/">
      <div class="space-y-8">
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

        <section class="prose dark:prose-invert max-w-none">
          <p class="text-gray-700 dark:text-gray-300">
            Welcome to my academic website. I am a researcher in computational
            mathematics at Monash University, focusing on numerical methods for
            partial differential equations and scientific computing.
          </p>
          <p class="text-gray-700 dark:text-gray-300">
            My work combines advanced numerical techniques with high-performance
            computing to develop efficient solvers for complex mathematical
            problems in scientific and engineering applications.
          </p>
          <p class="text-gray-700 dark:text-gray-300">
            I am also a 
            passionate advocate for open-source research and software. I actively contribute to
            various projects in the Julia scientific computing community.
          </p>
        </section>

        <section class="mt-8">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="/research"
              class="block p-6 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">
                My Research →
              </h3>
              <p class="mt-2 text-gray-600 dark:text-gray-300">
                Explore my current and past research projects
              </p>
            </a>
            <a
              href="/publications"
              class="block p-6 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">
                My Publications →
              </h3>
              <p class="mt-2 text-gray-600 dark:text-gray-300">
                View my published papers and presentations
              </p>
            </a>
            <a
              href="/blog"
              class="block p-6 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">
                Blog and News →
              </h3>
              <p class="mt-2 text-gray-600 dark:text-gray-300">
                Read my latest blog posts and news updates
              </p>
            </a>
            <a
              href="/contact"
              class="block p-6 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">
                Contact Me →
              </h3>
              <p class="mt-2 text-gray-600 dark:text-gray-300">
                Get in touch for collaborations or inquiries
              </p>
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
}
