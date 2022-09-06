/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    border: {
      "1px": "1px",
      "2px": "2px",
      "3px": "3px",
      "4px": "4px",
    },
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
      colors: {
        "gray-div": "#282828",
      },
      text: {
        "1px": "1px",
        "2px": "2px",
        "3px": "3px",
        "4px": "4px",
        "5px": "5px",
        px: "28px",
        "58px": "58px",
      },
    },
  },

  plugins: [],
};
