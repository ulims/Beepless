import { root } from "postcss";

/** @type {import('tailwindcss').Config} */
module.exports = {
  dark: "class",
  content: [
    "./assets/**/*.{js,vue,ts,}",
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.{vue,js,ts,jsx,tsx}",
    "./plugins/**/*.{js,ts}",
    "./app.{vue,js,ts,jsx,tsx}",
    "./error.vue",
  ],
  theme: {
    // screens: {
    //   "xs": "375px",
    //   'sm': "640px",
    //   'md': "768px",
    //   "lg": "1024px",
    //   "xl": "1280px",
    //   "2xl": "1536px",
    // },
    fontFamily: {
      beep: "Beep, sans-serif",
    },
    extend: {
      colors: {
        primary: "hsl(var(--primary))",
        primaryforeground: "hsl(var(--primary-foreground))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: "hsl(var(--card))",
        cardforeground: "hsl(var(--card-foreground))",
        secondary: "hsl(var(--secondary))",
        secondaryforeground: "hsl(var(--secondary-foreground))",
        destructive: "hsl(var(--destructive))",
        destructiveforeground: "hsl(var(--destructive-foreground))",
        accent: "hsl(var(--accent))",
        accentforeground: "hsl(var(--accent-foreground))",
        input: "hsl(var(--input))",
        border: "hsl(var(--border))",
      },
    },
  },
  plugins: [],
};
