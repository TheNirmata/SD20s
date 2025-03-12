import type { Config } from "tailwindcss";


const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "../sd20s-web/components/**/*.{js,ts,jsx,tsx,mdx}",
    "../sd20s-web/*.{js,ts,jsx,tsx,mdx}",
  ],
  corePlugins: {
    preflight: true,
    //Make sure utilities are enabld
    
  },
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
  animations: true 
};

export default config;

