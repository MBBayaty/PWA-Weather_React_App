module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      aspectRatio: {
        '1/2': '1 / 2'},
      backgroundImage: {
        pic: "url('../src/services/images/snow-mobile.jpg')",
        pic1:"url('../src/services/images/wea1.jpg')",
        pic2:"url('../src/services/images/summer-mobile.jpg')",
      },
    },
  },
  plugins: [],
};
