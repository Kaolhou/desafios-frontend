/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,tsx,jsx,html}"],
  theme: {
    extend: {
      screens: {
        ssm: "350px",
      },
      fontFamily: {
        lexend: ["Lexend Deca", "sans-serif"],
      },
    },
  },
  plugins: [],
};
