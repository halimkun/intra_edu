/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./*.{js,jsx,ts,tsx}",
    "./src/screens/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#EFEEF7",
          200: "#D0CCE9",
          300: "#A19AD3",
          400: "#7267BD",
          500: "#4335A7",
          600: "#32277D",
          700: "#211A53",
          800: "#100029",
          900: "#0A0819",
          DEFAULT: "#4335A7",
        },
        secondary: {
          100: "#FFF4EE",
          200: "#FFDFCE",
          300: "#FFBF9E",
          400: "#FF9F6E",
          500: "#FF7F3E",
          600: "#BF5F2E",
          700: "#7F3F1F",
          800: "#3F1F0F",
          900: "#271309",
          DEFAULT: "#FF7F3E",
        },
        neutral: {
          100: "#FFFFFF",
          200: "#F5F5F5",
          300: "#E2E2E2",
          400: "#C6C6C6",
          500: "#AAAAAA",
          600: "#717171",
          700: "#383838",
          800: "#252525",
          900: "#0A0A0A",
          DEFAULT: "#AAAAAA",
        },
        success: {
          100: "#F1F9EC",
          500: "#5BC120",
          DEFAULT: "#5BC120",
        },
        error: {
          100: "#FCEEEC",
          500: "#DD3B1F",
          DEFAULT: "#DD3B1F",
        },
        info: {
          100: "#E9F6FB",
          500: "#0095D1",
          DEFAULT: "#0095D1",
        },
        warning: {
          100: "#FEF8E9",
          500: "#FCB000",
          DEFAULT: "#FCB000",
        },
      },
    },
  },
  plugins: [],
};
