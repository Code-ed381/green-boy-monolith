/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "green-primary": "#3d7a18",
        "green-light": "#edf5e6",
        "green-border": "#c8e6b0",
        "gray-dark": "#0a0a0a",
        "gray-medium": "#555550",
        "gray-light": "#999990",
        "gray-border": "#e8e8e0",
        "gray-divider": "#d0d0c8",
        "gray-bg": "#f7f7f5",
        cream: "#f5f0e8",
        "blue-light": "#e8eef5",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      // Custom CSS properties for dynamic positioning
      keyframes: {
        "object-position": {
          "0%": "0% 50%",
          "50%": "50% 50%",
          "100%": "100% 50%",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
