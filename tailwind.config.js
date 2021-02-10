module.exports = {
  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    safelist: [/^grid-cols-/],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['roboto', 'sans-serif'],
    },
    extend: {
      colors: {
        blue: {
          deep: '#3056cf',
        },
      },
    },
  },
  variants: {
    extend: {
      padding: ['hover', 'group-hover', 'last'],
      fontStyle: ['hover'],
    },
  },
  plugins: [],
};
