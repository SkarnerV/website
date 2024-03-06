/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx,jsx,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        ps5bg: "url('./public/img/PS5Background.jpg')",
        avatar: "url('./public/img/avatar.jpg')",
        mainbg: "url('./public/img/wallbg.jpg')",
      },
    },
  },
  plugins: [],
};
