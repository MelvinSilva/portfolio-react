const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/components/Presentation.js",
  ],
  mode: 'jit',
  theme: {
    extend: {
      fontSize: {
        '10xl': '5rem',
      },
      letterSpacing: {
        tightest: '-.06em',
      },
      gradientColorStops: {
        'gradient-3-start': '#fd9a21',
        'gradient-3-end': '#ff322c',
        'gradient-2-start': '#b444ff',
        'gradient-2-end': '#f65aad',
        'gradient-1-start': '#1e55cb',
        'gradient-1-end': '#2dbcff',
      },
      keyframes: {
        'gradient-foreground-1': {
          'from, 16.667%, to': {
            opacity: 1,
          },
          '33.333%, 83.333%': {
            opacity: 0,
          },
        },
        'gradient-background-1': {
          'from, 16.667%, to': {
            opacity: 0,
          },
          '25%, 91.667%': {
            opacity: 1,
          },
        },
        'gradient-foreground-2': {
          'from, to': {
            opacity: 0,
          },
          '33.333%, 50%': {
            opacity: 1,
          },
          '16.667%, 66.667%': {
            opacity: 0,
          },
        },
        'gradient-background-2': {
          'from, to': {
            opacity: 1,
          },
          '33.333%, 50%': {
            opacity: 0,
          },
          '25%, 58.333%': {
            opacity: 1,
          },
        },
        'gradient-foreground-3': {
          'from, 50%, to': {
            opacity: 0,
          },
          '66.667%, 83.333%': {
            opacity: 1,
          },
        },
        'gradient-background-3': {
          'from, 58.333%, 91.667%, to': {
            opacity: 1,
          },
          '66.667%, 83.333%': {
            opacity: 0,
          },
        },
      },
      animation: {
        'gradient-background-1': 'gradient-background-1 4s infinite',
        'gradient-foreground-1': 'gradient-foreground-1 4s infinite',
        'gradient-background-2': 'gradient-background-2 4s infinite',
        'gradient-foreground-2': 'gradient-foreground-2 4s infinite',
        'gradient-background-3': 'gradient-background-3 4s infinite',
        'gradient-foreground-3': 'gradient-foreground-3 4s infinite',
      }
    },
  },
  variants: {
    plugins: [],
  }
}