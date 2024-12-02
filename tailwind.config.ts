import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "secondary-text": "rgb(115, 115, 115)",
        "secondary-background": "rgb(250,250,250)",
        "stroke": "rgb(219, 219, 219)",
        "primary-button" : "rgb(0, 149, 246)"
      },
    },
  },
  plugins: [],
} satisfies Config;
