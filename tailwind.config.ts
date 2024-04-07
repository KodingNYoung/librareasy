import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        monochrome: {
          DEFAULT: "#212124", //light
          0: "#FFFFFF",
          100: "#fcfcfc",
          200: "#FAFAFB",
          300: "#F7F7F7",
          400: "#F2F2F3",
          500: "#EDEDED",
          600: "#E6E6E7",
          700: "#DEDEDF",
          800: "#d4d4d6",
          900: "#C9C9CB",
          1000: "#BCBCBE",
          1100: "#ADAEB0",
          1200: "#9D9DA0",
          1300: "#8A8A8D",
          1400: "#747579",
          1500: "#5D5E63",
          1600: "#45464B",
          1700: "#2D2E32",
          1800: "#212124",
          1900: "#000000"
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "auth-gradient-light":
          "linear-gradient(180deg, rgba(242, 242, 243, 0.07) 0%, rgba(138, 138, 141, 0.07) 100%)",
        "auth-gradient-dark":
          "linear-gradient(180deg, rgba(110, 110, 119, 0.1) 0%, rgba(38, 38, 39, 0.1) 100%)"
      },
      fontsize: {
        "body-xs": ["12px", { lineHeight: "16px", fontWeight: 400 }],
        "body-sm": ["13px", { lineHeight: "16px", fontWeight: 500 }],
        "body-md": ["14px", { lineHeight: "20px", fontWeight: 500 }],
        "body-lg": ["16px", { lineHeight: "24px", fontWeight: 500 }],
        "label-sm": ["12px", { lineHeight: "16px", fontWeight: 400 }],
        "label-md": ["13px", { lineHeight: "16px", fontWeight: 400 }],
        "label-lg": ["16px", { lineHeight: "20px", fontWeight: 700 }],
        button3: ["14px", { lineHeight: "20px", fontWeight: 500 }],
        button2: ["14px", { lineHeight: "20px", fontWeight: 700 }],
        button1: ["16px", { lineHeight: "20px", fontWeight: 700 }],
        "title-sm": ["16px", { lineHeight: "20px", fontWeight: 600 }],
        "title-md": ["18px", { lineHeight: "23px", fontWeight: 700 }],
        "title-lg": ["22px", { lineHeight: "28px", fontWeight: 600 }],
        "headline-sm": ["24px", { lineHeight: "32px", fontWeight: 600 }],
        "headline-md": ["28px", { lineHeight: "36px", fontWeight: 600 }],
        "headline-lg": ["32px", { lineHeight: "40px", fontWeight: 700 }],
        "display-sm": ["36px", { lineHeight: "44px", fontWeight: 600 }],
        "display-md": ["45px", { lineHeight: "52px", fontWeight: 600 }],
        "display-lg": ["57px", { lineHeight: "64px", fontWeight: 600 }]
      },
      boxShadow: {
        "auth-light": "2px 8px 8px 0px #AAAAAA40",
        "auth-dark": " 2px 8px 8px 0px #43444533"
      }
    }
  },
  darkMode: "class",
  plugins: [
    nextui({
      defaultTheme: "light",
      themes: {
        light: {},
        dark: {}
      }
    })
  ]
};
export default config;
