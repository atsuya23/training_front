module.exports = {
  mode: 'jit',
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./styles/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      scale: ["group-hover"],
      translate: ["group-hover"],
      transitionTimingFunction: ["responsive", "hover", "focus"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
