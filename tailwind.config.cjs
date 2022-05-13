module.exports = {
  content: ['./src/**/*.{html,js,svelte}'],
  theme: {
    extend: {
      // maxWidth: theme => theme('spacing'),
      minWidth: theme => theme('spacing'),
      minHeight: theme => theme('spacing'),
      spacing: {
        38: '9.5rem',
        57: '14.25rem',
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '0.875rem' }],
      },
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
