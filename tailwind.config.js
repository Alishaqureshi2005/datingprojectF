/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-pink': '#EF9DA1',  // Custom color
        'custom-blue': '#01204F',  // Custom color
      },
      scrollbar: {
        thumb: {
          rounded: '9999px', // Fully rounded
        },
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'), // Add the scrollbar plugin
  ],
};
