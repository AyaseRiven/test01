import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
     colors: {
        background: "var(--background)",   // Using CSS variables
        foreground: "var(--foreground)",   // Using CSS variables
        green: {
          DEFAULT: "#00665E",              // Use DEFAULT instead of default for Tailwind's syntax
        },
        gray:{
          DEFAULT:"#6A6A6A",
        }
      },
    },
  },
  plugins: [],
};
export default config;
