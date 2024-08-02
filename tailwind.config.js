/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#F3F3F7',
        'custom-gray2': '#4D4D4D',
        'bg-color': '#14161b',
        'wix-color': '#4cfc0f',
      },
    },
  },
  plugins: [],
}

