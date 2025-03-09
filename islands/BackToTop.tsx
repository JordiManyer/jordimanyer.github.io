import { useEffect, useRef } from "preact/hooks";
import { useSignal } from "@preact/signals";
import { IS_BROWSER } from "$fresh/runtime.ts";

export default function BackToTop() {
  const isVisible = useSignal(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  const handleScroll = () => {
    if (!ticking.current) {
      window.requestAnimationFrame(() => {
        isVisible.value = window.scrollY > 200;
        lastScrollY.current = window.scrollY;
        ticking.current = false;
      });
      ticking.current = true;
    }
  };

  useEffect(() => {
    if (!IS_BROWSER) return;

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    if (!IS_BROWSER) return;
    
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      class={`fixed bottom-8 right-8 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-full p-3 shadow-lg transition-all duration-300 hover:bg-gray-700 dark:hover:bg-gray-300 focus:outline-none ${
        isVisible.value ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
      }`}
      aria-label="Back to top"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  );
} 