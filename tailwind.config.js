/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50:  '#e8f4fb',
          100: '#c8e6f5',
          200: '#9dd0ed',
          300: '#61b2e0',
          400: '#3498d4',
          500: '#1a7cbf',
          600: '#1a4f7a',
          700: '#163f62',
          800: '#10304b',
          900: '#0b2035',
        },
        teal: {
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
        },
        cyan: {
          300: '#67e8f9',
          400: '#22d3ee',
        },
      },
      animation: {
        'fade-up':       'fadeUp .9s ease-out both',
        'fade-up-delay': 'fadeUp .9s .25s ease-out both',
        'fade-up-slow':  'fadeUp .9s .5s ease-out both',
        'float':         'float 5s ease-in-out infinite',
        'float-delay':   'float 5s 1.5s ease-in-out infinite',
        'float-slow':    'float 7s 3s ease-in-out infinite',
        'spin-slow':     'spin 18s linear infinite',
        'ping-slow':     'ping 3s cubic-bezier(0,0,.2,1) infinite',
        'slide-right':   'slideRight .7s ease-out both',
        'scale-in':      'scaleIn .6s ease-out both',
        'glow':          'glow 3s ease-in-out infinite',
        'shimmer':       'shimmer 2.5s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%':     { transform: 'translateY(-14px) rotate(2deg)' },
          '66%':     { transform: 'translateY(-6px) rotate(-1deg)' },
        },
        slideRight: {
          '0%':   { opacity: '0', transform: 'translateX(-24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%':   { opacity: '0', transform: 'scale(.92)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        glow: {
          '0%,100%': { boxShadow: '0 0 20px rgba(34,211,238,.25)' },
          '50%':     { boxShadow: '0 0 40px rgba(34,211,238,.55)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      backdropBlur: { xs: '2px' },
    },
  },
  plugins: [],
};
