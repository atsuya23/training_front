module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
        "out-expo": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  variants: {
    extend: {
      scale: ["group-hover"],
      transitionTimingFunction: ["responsive", "hover", "focus"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
