const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    './app/components/**/*',
    './app/helpers/**/*.rb',
    './app/views/**/*.html.erb',
    './app/javascript/**/*.js',
    './app/assets/images/**/*.svg'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'pattern-header': "url('mobile/bg-pattern-header.svg')",
      },
      colors: {
        'secondary-gray': {
         100: 'var(--color-secondary-gray-100)',
         200: 'var(--color-secondary-gray-200)',
         300: 'var(--color-secondary-gray-300)',
         400: 'var(--color-secondary-gray-400)',
        },
        'violet': {
          100: 'var(--color-violet-100)',
          200: 'var(--color-violet-200)',
          300: 'var(--color-violet-300)',
          400: 'var(--color-violet-400)',
          500: 'var(--color-violet-500)',
        }
      },
      fontFamily: {
        sans: ['Kumbh Sans', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ]
}
