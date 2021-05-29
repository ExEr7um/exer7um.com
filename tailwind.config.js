module.exports = {
  purge: {
    content: [
      './components/**/*.{vue,js}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.{js,ts}',
      './nuxt.config.{js,ts}',
    ],
    options: {
      safelist: { standard: [/^bg-/] },
    },
  },
  darkMode: 'media',
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    fontFamily: {
      sans: ['Inter', 'ui-sans-serif', 'system-ui'],
    },
  },
  variants: {
    extend: {
      invert: ['dark'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
