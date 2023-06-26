/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      extend: {
        fontFamily: {
          sans: ["Inter", "sans-serif"],
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};