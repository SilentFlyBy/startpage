module.exports = {
  purge: {
    enabled: true,
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    options: {
      safelist: [/^grid-cols-/, /^row-start-/],
    },
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
