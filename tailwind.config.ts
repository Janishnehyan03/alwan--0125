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
        primary: "#901689",
        secondary: "#fb923c",
        primaryDark: "#3c0539",
        primaryLight: "#e9f7f7",
        textDark: "#333333",
        textLight: "#767268",
        white: "#ffffff",
      },
      maxWidth: {
        'custom': '1200px',
      },
      animation: {
        "fade-in-slide-up": "fadeInSlideUp 1s ease-out forwards",
        "fade-in-delay": "fadeInSlideUp 1s ease-out 0.5s forwards",
        "fade-in-delay-2": "fadeInSlideUp 1s ease-out 1s forwards",
      },
      keyframes: {
        fadeInSlideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
