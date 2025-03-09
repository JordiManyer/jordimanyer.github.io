import Layout from "../components/Layout.tsx";

export default function Contact() {
  return (
    <Layout active="/contact">
      <div class="space-y-8">
        <h1 class="text-3xl font-bold text-gray-900 dark:text-gray-100">
          Contact
        </h1>

        <div class="grid md:grid-cols-2 gap-8">
          <div class="space-y-6">
            <div class="prose dark:prose-invert">
              <h2 class="text-gray-900 dark:text-gray-100">Contact Information</h2>
              <p class="text-gray-700 dark:text-gray-300">
                Feel free to reach out to me for research collaborations,
                academic inquiries, or other professional matters.
              </p>
            </div>

            <div class="space-y-4">
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
                  <p class="font-medium text-gray-900 dark:text-gray-100">Email</p>
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
                  <p class="font-medium text-gray-900 dark:text-gray-100">Location</p>
                  <p class="text-gray-600 dark:text-gray-300">
                    Monash University<br />
                    School of Mathematics<br />
                    Melbourne, Australia
                  </p>
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
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                <div>
                  <p class="font-medium text-gray-900 dark:text-gray-100">Social</p>
                  <div class="space-y-2">
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
          </div>

          <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Send a Message
            </h2>
            <form class="space-y-4">
              <div>
                <label
                  for="name"
                  class="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  class="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:border-gray-500 focus:ring-gray-500 dark:focus:border-gray-400 dark:focus:ring-gray-400"
                />
              </div>
              <div>
                <label
                  for="email"
                  class="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  class="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:border-gray-500 focus:ring-gray-500 dark:focus:border-gray-400 dark:focus:ring-gray-400"
                />
              </div>
              <div>
                <label
                  for="message"
                  class="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  class="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:border-gray-500 focus:ring-gray-500 dark:focus:border-gray-400 dark:focus:ring-gray-400"
                ></textarea>
              </div>
              <button
                type="submit"
                class="w-full bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-900 py-2 px-4 rounded-md hover:bg-gray-700 dark:hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
} 