/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
//linear-gradient(114.86deg, rgba(12, 98, 66, 0.4) 14.71%, rgba(46, 181, 131, 0.4) 78.23%)
  theme: {
    extend: {
      backgroundImage: {
        'home-page-back': "url('/src/assets/watermark1.png') ",
        'home-grad' : "linear-gradient(114.86deg, rgba(0, 43, 3, 0.8) 14.71%, rgba(33, 109, 38, 0.8) 78.23%)",
        'hero' : ` url('/src/assets/hero1.png') `,
        'rf' : "url('/src/assets/right_flower.png')",
        'lf' : "url('/src/assets/left_flower.png')",
        'flower_back' : "url('/src/assets/flower_back.png') "
      },
    },
  },
  plugins: [],
}

