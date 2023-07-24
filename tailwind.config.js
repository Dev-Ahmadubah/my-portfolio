module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", //
  theme: {
    extend: {
      colors: {
        gray: "#191919",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
