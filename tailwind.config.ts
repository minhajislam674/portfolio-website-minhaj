import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./.storybook/**/*.{js,ts,jsx,tsx,mdx}", // 👈 add Storybook
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
