/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkGreen: '#211715',
        darkGray: '#343434',
        white: '#FFFFFF',
        lightGray: '#D9D9D9',
        lightBrown: '#BFBCBB',
        gray: '#85807F',
        darkBlue: '#026A9D',
        mediumBlue: '#4AABD0',
        lightBlue: '#A2D2EE',
        paleBlue: '#BBE1EB',
        azureBlue: '#5394CF',
        mediumGray: '#B3B3B3',
        lightGray2: '#A0A0A0',
        lightBrown2: '#A98A75',
        lightRed: '#F4B3B3',
        black: '#000000',
        skyBlue: '#01A0CA',
        navyBlue: '#0283C1',
        paleBlue2: '#D7ECF4',
        inputWhite: '#F5F5F5',
      },
    },
  },
  plugins: [],
}
