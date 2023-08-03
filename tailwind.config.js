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
        primary: "",
        muted: "#7d8da1",
        info: {
          light: "",
          DEFAULT: "#6c9bcf",
          dark: "",
        },
        warning: {
          light: "",
          DEFAULT: "#f7d060",
          dark: "",
        },
        success: {
          light: "",
          DEFAULT: "#1b9c85",
          dark: "",
        },
        danger: {
          light: "",
          DEFAULT: "#ff0060",
          dark: "",
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
