/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx,jsx,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        ps5bg: "url('/public/img/PS5Background.jpg')",
        avatar: "url('/public/img/profile.jpg')",
        mainbg: "url('/public/img/wallbg.jpg')",
        hamburger: "url('/public/svg/hamburger.svg')",
        focus: "url('/public/svg/focus.svg')",
        github: "url('/public/svg/github.svg')",
        linkedin: "url('/public/svg/linkedin.svg')",
        email: "url('/public/svg/email.svg')",
        cross: "url('/public/svg/cross.svg')",
        terminal: "url('/public/svg/terminal.svg')",
        pfizer: "url('/public/img/pfizer.jpeg')",
        siemens: "url('/public/img/siemens.jpeg')",
        neu: "url('/public/img/neu.jpeg')",
        cmu: "url('/public/img/cmu.jpeg')",
        scout: "url('/public/img/scout.jpeg')",
        stealth: "url('/public/img/stealth.jpeg')",
        alibaba: "url('/public/img/alibaba.png')",
      },
    },
  },
  plugins: [],
};
