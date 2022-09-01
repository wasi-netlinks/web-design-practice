/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      screens: {
        xl: "1120px",
      },
    },
    extend: {
      backgroundImage: {
        "card-1": "url('assets/text-cards-images/1.svg')",
        "card-2": "url('assets/text-cards-images/2.svg')",
        "card-3": "url('assets/text-cards-images/3.svg')",
        "card-3": "url('assets/text-cards-image/4.svg')",
      },
    },
  },

  plugins: [],
};
