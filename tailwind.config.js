module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        light: "0 2rem 3rem rgba(132, 139, 200, 0.18)",
        dark: "0 2rem 3rem rgba(0, 0, 0, 0.4)",
      },
      colors: {
        primary: "#a12219",
        muted: "#7d8da1",
        info: {
          light: "#89afd8",
          DEFAULT: "#6c9bcf",
          dark: "#567ca5",
        },
        warning: {
          light: "#f8d97f",
          DEFAULT: "#f7d060",
          dark: "#debb56",
        },
        success: {
          light: "#48af9d",
          DEFAULT: "#1b9c85",
          dark: "#157c6a",
        },
        danger: {
          light: "#ff327f",
          DEFAULT: "#ff0060",
          dark: "#cc004c",
        },
        dark: {
          100: "#a3bdcc",
          200: "#7d8da1",
          300: "#677483",
          400: "#202528",
          500: "#363949",
        },
        light: "#edeffd",
        shadow: {
          light: "0 2rem 3rem rgba(132, 139, 200, 0.18)",
          dark: "0 2rem 3rem rgba(0, 0, 0, 0.4)",
        },
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
};
