/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "Red": "hsl(356, 100%, 66%)",
        "Light-red": "hsl(355, 100%, 74%)",
        "Dark-blue": "hsl(208, 49%, 24%)",
        "White": "hsl(0, 0%, 100%)",
        "Gray-blue": "hsl(240, 2%, 79%)",
        "Dark-grayBlue": "hsl(207, 13%, 34%)",
        "Dark-blackBlue": "hsl(240, 10%, 16%)",
        "Gradient-red": "hsl(13, 100%, 72%)",
        "Gradient-light-red": "hsl(353, 100%, 62%)",
        "Gradient-dark-gray-blue": "hsl(237, 17%, 21%)",
        "Gradient-dark-blue": "hsl(237, 23%, 32%)",
        "Attribution": "hsl(228, 45%, 44%)"
      }
    },
  },
  plugins: [],
}
