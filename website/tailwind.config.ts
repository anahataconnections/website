import { Pattaya, Satisfy, Sarabun } from "next/font/google";
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
        'radial-gradient': 'radial-gradient(56.4% 103.55% at 55.76% 54.29%, rgba(252, 217, 182, 0.85) 0%, rgba(12, 98, 66, 0.5) 50%, rgba(12, 98, 66, 1) 100%)',
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'grey-gradient': 'radial-gradient(56.4% 103.55% at 55.76% 54.29%, rgba(211, 211, 211, 0.5) 0%, rgba(211, 211, 211, 0.8) 100%)',
        'white-gradient': 'radial-gradient(56.4% 103.55% at 55.76% 54.29%, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.6) 100%)',
        'home-page-back': "url('/assets/watermark2.png')",
        'home-grad': 'radial-gradient(56.4% 103.55% at 55.76% 54.29%, rgba(9, 76, 59, 0.8) 0%, rgba(9, 76, 59, 0.8) 100%)',
        'hero': `url('/assets/hero1.png')`,
        'rf': "url('/assets/right_flower.png')",
        'lf': "url('/assets/left_flower.png')",
        'flower_back': "url('/assets/bottom.svg')"
      },

        backgroundSize:{
           'custom':'1500px'
        },
      
      fontFamily: {
        'cantarell': ["Cantarell", 'sans-serif'],
        'eva': ["Dancing Script", 'cursive', 'bold'],
        'Pattaya': ["Pattaya", 'sans-serif'],
        'Satisfy': ["Satisfy", 'cursive'],
        'nota': ["Noto Sans", 'sans-serif'],
        'EvaMayasari': ["var(--font-eva)"],
        'sarabun': ['Sarabun', 'sans-serif'],
      },
      translate: {
        '-full': '-100%',
        '-3/4': '-75%',
        '-1/2': '-50%',
        '-1/4': '-25%',
        '-1/6': '-16.666667%',
        '-1/12': '-8.333333%',
        '1/12': '8.333333%',
        '1/6': '16.666667%',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '100%',
        '50': '196px',
        '52': '200px',
        '54': '204px',
        '56': '206px',
        '58': '212px',
        '60': '216px',
        '62': '220px',
        '64': '224px',
        '66': '228px',
        '68': '232px',
        '70': '236px',
        '72': '240px',
        '74': '260px',
        '76': '280px',
      },
      colors: {
        'rgba-black-33': 'rgba(0, 0, 0, 0.33)',
      },
      screens: {
        'custom': '1376px',
        'custom1':'992px',
        'custom2':'1280px',
        'custom3':'1440px',
        'customMax':'1920px'

        

      },
    },
  },
  plugins: [],
};

export default config;
