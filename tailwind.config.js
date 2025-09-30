const config = {
  content: ["./src/app/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        neutral: {
          900: "#1a1a1a",
          800: "#2e2e2e",
          700: "#444444",
          600: "#5a5a5a",
          500: "#707070",
          400: "#8a8a8a",
          300: "#a3a3a3",
          200: "#bdbdbd",
          100: "#d6d6d6",
          50: "#f0f0f0",
        },
        bluedeep: { 100: "#0a0e1a" },
      },
    },
  },
  plugins: [],
};

export default config;
