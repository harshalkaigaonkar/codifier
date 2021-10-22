module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: "#252A34",
      secondary: "#08D9D6",
      tertiary: "#FF2E63",
    }),
    dropShadow: {
      "2xl": "0 35px 35px rgba(255, 46, 99, 0.6);",
    },

    // padding: {
    //   sm: '8px',
    //   md: '16px',
    //   lg: '24px',
    //   xl: '48px',
    //   br:'132px'
    //  },

    colors: {
      // Configure your color palette here

      primary: "#252A34",
      secondary: "#08D9D6",
      btn: "#FF2E63",
      white: "#ffffff",
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
