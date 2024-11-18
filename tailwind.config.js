/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "flowbite.content()",
  ],
  theme: {
     fontFamily: {
         bodyFont: ["Inter", "sans-serif"],
       },
    extend: {
          colors: {
        'primary': '#00D991',
      },
    },
  },
  plugins: [
    "flowbite.plugin()",
    require('tailwind-scrollbar-hide'),
    require('daisyui'),
  ],
}