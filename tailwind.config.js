module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      keyframes: {
        glow: {
          "0%, 100%": { boxShadow: "0 0 12px #c3f584" },
          "50%": { boxShadow: "0 0 24px #c3f584" }
        }
      },

      extend: {
        backgroundImage: {
          "radial-glow":
            "radial-gradient(circle at center, rgba(122,255,177,0.08), transparent 70%)"
        },
        colors: {
          brand: "#7AFFB1",
          dark: "#0D0D0D"
        },
        fontFamily: {
          playfair: ['"Playfair Display"', "serif"]
        }
      },
      animation: {
        glow: "glow 2s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

// export default config;
