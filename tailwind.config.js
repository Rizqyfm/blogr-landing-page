/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      ctaText: "hsl(356, 100%, 66%)",
      ctaHover: "hsl(355, 100%, 74%)",
      heading: "hsl(208, 49%, 24%)",
      bodyCopy: "hsl(207, 13%, 34%)",
      footerText: "hsl(240, 2%, 79%)",
      footerbackground: "hsl(240, 10%, 16%)",
      gdVeryLightRed: "hsl(13, 100%, 72%)",
      gdLightRed: "hsl(353, 100%, 62%)",
      gdDarkGrayBlue: "hsl(0, 0%, 100%)",
      gdDarkSaturatedBlue: "hsl(0, 0%, 100%)",
      white: "hsl(0, 0%, 100%)",
    },
    fontFamily: {
      Ubuntu: ["Ubuntu", "sans-serif"],
      Overpass: ["Overpass", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
