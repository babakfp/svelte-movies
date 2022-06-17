module.exports = {
  content: ['./src/**/*.{html,js,svelte}'],
  theme: {
    extend: {
      minWidth: theme => theme('spacing'),
      borderRadius: {
        DEFAULT: '8px',
      },
    },
    container: {
      center: true,
      padding: '1rem',
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
