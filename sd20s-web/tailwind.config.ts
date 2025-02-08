import type { Config } from "tailwindcss";


const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx,png,svg,jpg}",
    "../sd20s-web/components/**/*.{js,ts,jsx,tsx,mdx,png,svg,jpg}",
    "../sd20s-web/public/**/*.{js,ts,jsx,tsx,mdx,png,svg,jpg}",
  ],
  theme: {
    extend: {
      colors: {
        // background: "var(--background)",
        // foreground: "var(--foreground)",
      background: '#000000',
      foreground: '#171717',
      },
      spacing: {
        '390': '390px',
        '844': '844px',
    },
    },
  },
  plugins: [],
};

export default config;

