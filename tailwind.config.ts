import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "light-blue": "#ABE2F8",
      white: "#FFFFFF",
      redError: "#FF0000",
    },
    borderRadius: {
      mainRounded: "30px",
      subRounded: "15px",
    },
    extend: {},
  },
  plugins: [],
} satisfies Config;
