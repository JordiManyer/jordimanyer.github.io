import { type Config } from "tailwindcss";
import typography from "npm:@tailwindcss/typography";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100%',
            color: 'inherit',
            a: {
              color: 'inherit',
              '&:hover': {
                color: '#3B82F6',
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    typography,
  ],
} satisfies Config;
