/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#ff6500",
        secondary: "#1890ff",
        "color-text": "#262626",
        "color-background": "#111111",
        "color-black": "black",
        "color-white": "white",
      },
    },
  },
  plugins: [],
};
