/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html" ,"./node_modules/flowbite/**/*.js"],
  darkMode: "media",
  theme: {
    extend: {
      screens: {
        mobile: "360px",
        desktop: "1000px",
      },
      height:{
        "hero":"calc(760px - 92px)"
      }
    },
  },
  plugins: [],
};
