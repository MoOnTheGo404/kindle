import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FBF4EE",
        linen: "#EFE3D8",
        sage: "#F4D8D5",
        spruce: "#6D4C41",
        teal: "#A86F63",
        clay: "#C77D72",
        amber: "#D8A76A",
        ink: "#243033",
        mist: "#F8EDEA",
        blush: "#F2C9C5",
        paper: "#FFFFFF"
      },
      boxShadow: {
        soft: "0 22px 70px rgba(76, 54, 47, 0.10)",
        glow: "0 28px 90px rgba(199, 125, 114, 0.22)"
      }
    }
  },
  plugins: []
};

export default config;
