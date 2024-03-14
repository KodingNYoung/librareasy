import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
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
        "display-lg": ["57px", { lineHeight: "64px", fontWeight: 600 }],
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      defaultTheme: "light",
      themes: {
        light: {},
        dark: {},
      },
    }),
  ],
};
export default config;
