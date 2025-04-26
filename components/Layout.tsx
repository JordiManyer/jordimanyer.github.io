import { ComponentChildren } from "preact";
import ThemeProvider from "../islands/ThemeProvider.tsx";
import MobileNav from "../islands/MobileNav.tsx";
import BackToTop from "../islands/BackToTop.tsx";
import Head from "./Head.tsx";

interface LayoutProps {
  children: ComponentChildren;
  active: string;
}

export default function Layout({ children, active }: LayoutProps) {
  const links = [
    { href: "/", text: "About" },
    { href: "/software", text: "Software" },
    { href: "/publications", text: "Publications" },
/*     { href: "/blog", text: "Blog" }, */
  ];

  return (
    <>
      <Head />
      <div class="min-h-screen bg-gray-100 dark:bg-gray-900">
        <div class="max-w-4xl mx-auto px-4 py-8">
          <header class="mb-8">
            <nav class="hidden md:flex items-center justify-between">
              <div class="flex items-center space-x-8">
                {links.map((link) => (
                  <a
                    href={link.href}
                    class={`text-sm font-medium transition-colors ${
                      active === link.href
                        ? "text-gray-900 dark:text-gray-100"
                        : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
                    }`}
                  >
                    {link.text}
                  </a>
                ))}
              </div>
              <div class="flex items-center space-x-4">
                <a
                  href="/jordimanyercv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                >
                  CV
                </a>
                <a
                  href="https://github.com/jordimanyer"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <svg
                    class="w-5 h-5 text-gray-600 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"
                    />
                  </svg>
                </a>
                <ThemeProvider />
              </div>
            </nav>
            <div class="md:hidden flex items-center justify-between">
              <MobileNav links={links} active={active} />
              <div class="flex items-center space-x-4">
                <a
                  href="/jordimanyercv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                >
                  CV
                </a>
                <a
                  href="https://github.com/jordimanyer"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <svg
                    class="w-5 h-5 text-gray-600 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"
                    />
                  </svg>
                </a>
                <ThemeProvider />
              </div>
            </div>
          </header>

          <main>
            {children}
          </main>

          <footer class="mt-16 py-8 border-t border-gray-200 dark:border-gray-800">
            <div class="text-center text-sm text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} Jordi Manyer. All rights reserved.
            </div>
          </footer>
        </div>
        <BackToTop />
      </div>
    </>
  );
}
