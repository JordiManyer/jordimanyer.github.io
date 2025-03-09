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
    { href: "/", text: "Home" },
    { href: "/research", text: "Research" },
    { href: "/publications", text: "Publications" },
    { href: "/blog", text: "Blog" },
    { href: "/contact", text: "Contact" },
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
              <ThemeProvider />
            </nav>
            <div class="md:hidden flex items-center justify-between">
              <MobileNav links={links} active={active} />
              <ThemeProvider />
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