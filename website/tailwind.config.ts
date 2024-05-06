import { Pattaya, Satisfy } from "next/font/google";
import type { Config } from "tailwindcss";



const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        // "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",rgba(255, 241, 118, 0.6)background: linear-gradient(0deg, #0C6242, #0C6242);background: linear-gradient(0deg, #0C6242, #0C6242);rgba(12, 98, 66, 1)



        'radial-gradient': 'radial-gradient(56.4% 103.55% at 55.76% 54.29%, rgba(252, 217, 182, 0.85) 0% , rgba(12, 98, 66, 1) 100%)',
        "gradient-conic":"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          'grey-gradient' : 'radial-gradient(56.4% 103.55% at 55.76% 54.29%, rgba(211, 211, 211, 0.8) 0%, rgba(211, 211, 211, 0.8) 100%)',
          'white-gradient' : 'radial-gradient(56.4% 103.55% at 55.76% 54.29%, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.7) 100%)',
          'home-page-back': "url('/assets/watermark2.png') ",
          'home-grad' : 'radial-gradient(56.4% 103.55% at 55.76% 54.29%, rgba(9, 76, 59, 0.9) 0%, rgba(9, 76, 59, 0.9) 100%)',
          'hero' : ` url('/assets/hero1.png') `,
          'rf' : "url('/assets/right_flower.png')",
          'lf' : "url('/assets/left_flower.png')",
          'flower_back' : "url('/assets/flower_back.png') "
      },
      fontFamily: {
        'cantarell': ["Cantarell", 'sans-serif'],
        'eva': ["Dancing Script", 'cursive' , 'bold'],
        'Pattaya' : ["Pattaya", 'sans-serif'],
        'Satisfy' : ["Satisfy", 'cursive'],
        'nota' : ["Noto Sans", 'sans-serif'],
        'EvaMayasari': ["var(--font-eva)"],
      },
    },
  },
  plugins: [],
};
export default config;
