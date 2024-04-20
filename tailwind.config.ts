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
        // "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        'radial-gradient': 'radial-gradient(56.4% 103.55% at 55.76% 54.29%, rgba(255, 241, 118, 0.6) 0%, rgba(0, 100, 0, 0.8) 100%)',
    
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          'home-page-back': "url('/assets/watermark1.png') ",
          'home-grad' : " radial-gradient(45deg, rgba(255, 0, 0, 0.7), rgba(0, 255, 0, 0.7))",
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
      },
    },
  },
  plugins: [],
};
export default config;
