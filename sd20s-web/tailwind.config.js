const {heroui} = require('@heroui/theme');
// filepath: /Users/croissants/Desktop/SD20s/sd20s-web/tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@heroui/theme/dist/components/(dropdown|menu|divider|popover|button|ripple|spinner).js"
  ],
  theme: {
    extend: {
      colors: {
        background: '#000000',
        foreground: '#171717',
      },
      spacing: {
        '390': '390px',
        '844': '844px',
      },
    },
  },
  plugins: [heroui()],
}