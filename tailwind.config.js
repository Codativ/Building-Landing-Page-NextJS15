// tailwind.config.js
module.exports = {
    theme: {
      extend: {
        keyframes: {
          'fade-in-up': {
            '0%': { opacity: '0', transform: 'translateY(20px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
          },
          'scale-x': {
            '0%': { transform: 'scaleX(0)' },
            '100%': { transform: 'scaleX(1)' },
          }
        },
        animation: {
          'fade-in-up': 'fade-in-up 0.6s ease-out',
          'scale-x': 'scale-x 0.6s ease-out',
        }
      }
    },
    plugins: [
      plugin(function({ addUtilities }) {
        addUtilities({
          '.scrollbar-hide': {
            '-ms-overflow-style': 'none',
            'scrollbar-width': 'none',
            '&::-webkit-scrollbar': {
              display: 'none',
            },
          }
        })
      })
    ]
  }