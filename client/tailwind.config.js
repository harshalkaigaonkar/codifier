module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: "#252A34",
      secondary: "#08D9D6",
      tertiary: "#FF2E63",
      black: "#000000",
    }),
    dropShadow: {
      "2xl": "0 35px 35px rgba(255, 46, 99, 0.6);",
    },

    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
      26: "26px",
    },

    colors: {
      // Configure your color palette here

      primary: "#252A34",
      secondary: "#08D9D6",
      btn: "#FF2E63",
      white: "#ffffff",
      black: "#000000",
    },
    fontFamily: {
      serif: ["poppins"],
    },
  },
  variants: {
    backgroundColor: ["active"],
    width: ["responsive", "hover", "focus"],
    transitionProperty: ["responsive", "motion-safe", "motion-reduce"],
    extend: {
      opacity: ["disabled"],
    },
  },
  plugins: [],
};
