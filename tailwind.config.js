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
       minHeight: {
        'screen-minus-20': 'calc(100vh - 85px)',
      },
    },
  },
  plugins: [
    "flowbite.plugin()",
    require('tailwind-scrollbar-hide'),
    require('daisyui'),
  ],
}