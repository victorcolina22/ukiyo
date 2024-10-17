/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'custom-black': '#05080E',
        'custom-gray': '#17181a',
      },
    },
  },
  plugins: [],
};
