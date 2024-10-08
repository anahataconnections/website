import { Pattaya, Satisfy, Sarabun } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        "radial-gradient":
          "radial-gradient(56.4% 103.55% at 55.76% 54.29%, rgba(252, 217, 182, 0.85) 0%, rgba(12, 98, 66, 0.5) 50%, rgba(12, 98, 66, 1) 100%)",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "grey-gradient":
          "radial-gradient(56.4% 103.55% at 55.76% 54.29%, rgba(211, 211, 211, 0.5) 0%, rgba(211, 211, 211, 0.8) 100%)",
        "white-gradient":
          "radial-gradient(56.4% 103.55% at 55.76% 54.29%, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.6) 100%)",
        "home-page-back": "url('/assets/watermark2.png')",
        "home-grad":
          "radial-gradient(56.4% 103.55% at 55.76% 54.29%, rgba(9, 76, 59, 0.8) 0%, rgba(9, 76, 59, 0.8) 100%)",
        hero: `url('/assets/hero1.png')`,
        rf: "url('/assets/right_flower.png')",
        lf: "url('/assets/left_flower.png')",
        flower_back: "url('/assets/lotus.svg')",
      },

      backgroundSize: {
        custom: "1500px",
        custom1: "700px",
        custom2: "1000px",
      },

      fontFamily: {
        cantarell: ["Cantarell", "sans-serif"],
        eva: ["Dancing Script", "cursive", "bold"],
        Pattaya: ["Pattaya", "sans-serif"],
        Satisfy: ["Satisfy", "cursive"],
        nota: ["Noto Sans", "sans-serif"],
        EvaMayasari: ["var(--font-eva)"],
        sarabun: ["Sarabun", "sans-serif"],
      },
      translate: {
        "-full": "-100%",
        "-3/4": "-75%",
        "-1/2": "-50%",
        "-1/4": "-25%",
        "-1/6": "-16.666667%",
        "-1/12": "-8.333333%",
        "1/12": "8.333333%",
        "1/6": "16.666667%",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        full: "100%",
        "50": "196px",
        "52": "200px",
        "54": "204px",
        "56": "206px",
        "58": "212px",
        "60": "216px",
        "62": "220px",
        "64": "224px",
        "66": "228px",
        "68": "232px",
        "70": "236px",
        "72": "240px",
        "74": "260px",
        "76": "280px",
      },
      keyframes: {
        'fade-left': {
          '0%': {
            opacity: '0',
            transform: 'translateX(15rem)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        'fade-right': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-15rem)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        "rgba-black-33": "rgba(0, 0, 0, 0.33)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      screens: {
        customPhone: "360px",
        customPhone1: "390px",
        customPhone2: "430px",
        custom: "1376px",
        custom1: "992px",
        custom2: "1280px",
        custom3: "1440px",
        custom4: "1660px",
        customMax: "1920px",
        mobile: "500px",
        "small-tab": "800px",
        "1250": "1250px",
        "1370": "1370px",
        tab: "1400px",
        pc: "1500px",
      },
    },
  },
  plugins: [
    require('tailwindcss-animate')
  ],
};

export default config;
