import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#363738",
        secondary: "#f5f5f5",
        secondary_one: "#FEFAF1",
        gray_text: "#7D8184",
        crimson: "#DB4444",
        success: "#00FF66",
        hover_red: "#E07575",
        hover_blue: "#A0BCE0",
      },
    },
  },
  plugins: [],
};
export default config;
