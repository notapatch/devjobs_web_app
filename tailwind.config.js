const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    './app/views/**/*.html.erb',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        'secondary-gray': {
         100: 'var(--color-secondary-gray-100)',
         200: 'var(--color-secondary-gray-200)',
         300: 'var(--color-secondary-gray-300)',
         400: 'var(--color-secondary-gray-400)',
        },
        'violet': {
          100: 'var(--color-violet-100)',
          300: 'var(--color-violet-300)',
          400: 'var(--color-violet-400)',
          500: 'var(--color-violet-500)',
        }
      },
      fontFamily: {
        sans: ['Kumbh Sans', ...defaultTheme.fontFamily.sans]
      }
    }
  }
}
