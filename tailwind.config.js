/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkGreen: "#211715",
        darkGray: "#343434",
        white: "#FFFFFF",
        lightGray: "#D9D9D9",
        lightBrown: "#BFBCBB",
        gray: "#85807F",
        darkBlue: "#026A9D",
        mediumBlue: "#4AABD0",
        lightBlue: "#A2D2EE",
        paleBlue: "#BBE1EB",
        azureBlue: "#5394CF",
        mediumGray: "#B3B3B3",
        lightGray2: "#A0A0A0",
        lightBrown2: "#A98A75",
        lightRed: "#F4B3B3",
        black: "#000000",
        skyBlue: "#01A0CA",
        navyBlue: "#0283C1",
        paleBlue2: "#D7ECF4",
        inputWhite: "#F5F5F5",
        lightBlueBG: "#D7ECF4F2",
      },
      animation: {
        bounce200: "bounce 1s infinite 200ms",
        bounce400: "bounce 1s infinite 400ms",
        bounce600: "bounce 1s infinite 600ms",
      },
      keyframes: {
        bounce: {
          "0%, 100%": {
            transform: "translateY(-25%)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(0)",
            "animation-timing-function": "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
      },
    },
  },
  plugins: [],
};
