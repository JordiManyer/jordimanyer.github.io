import { useSignal } from "@preact/signals";

interface Link {
  href: string;
  text: string;
}

interface MobileNavProps {
  links: Link[];
  active: string;
}

export default function MobileNav({ links, active }: MobileNavProps) {
  const isOpen = useSignal(false);

  return (
    <div>
      <button
        onClick={() => isOpen.value = !isOpen.value}
        class="p-2 rounded-md text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
        aria-label="Open menu"
      >
        <svg
          class={`h-6 w-6 transition-transform ${isOpen.value ? "transform rotate-90" : ""}`}
          stroke="currentColor"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isOpen.value ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      <div
        class={`fixed inset-0 z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen.value ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div class="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={() => isOpen.value = false} />
        <nav class="relative flex flex-col h-full w-64 max-w-sm py-6 px-6 bg-white dark:bg-gray-800 overflow-y-auto">
          <div class="flex items-center justify-between mb-8">
            <h2 class="text-lg font-medium text-gray-900 dark:text-gray-100">Menu</h2>
            <button
              class="rounded-md text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 focus:outline-none"
              onClick={() => isOpen.value = false}
              aria-label="Close menu"
            >
              <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div class="mt-2">
            <div class="flex flex-col space-y-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  class={`px-2 py-1 text-base font-medium rounded-md ${
                    active === link.href
                      ? "text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-700"
                      : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700"
                  }`}
                  onClick={() => isOpen.value = false}
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
} 