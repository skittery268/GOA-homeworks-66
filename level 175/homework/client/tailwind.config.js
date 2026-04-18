/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#16161d",
        sand: "#f5efe6",
        coral: "#f26a4b",
        teal: "#1f7a8c",
        gold: "#f4b942"
      },
      boxShadow: {
        card: "0 20px 45px rgba(22, 22, 29, 0.12)"
      },
      fontFamily: {
        display: ["Georgia", "serif"],
        body: ["Trebuchet MS", "sans-serif"]
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(circle at top left, rgba(242, 106, 75, 0.32), transparent 35%), radial-gradient(circle at bottom right, rgba(31, 122, 140, 0.28), transparent 30%)"
      }
    }
  },
  plugins: []
};
