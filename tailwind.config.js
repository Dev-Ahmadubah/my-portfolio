module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", //
  theme: {
    extend: {
      colors: {
        darkGray: "#191919",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
