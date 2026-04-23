/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ide: {
          bg: '#1e1f22',
          tool: '#2b2d30',
          hover: '#3b3e43',
          select: '#2e436e',
          gutter: '#26282b',
        },
        edge: {
          DEFAULT: '#393b40',
          bright: '#4e5157',
        },
        ink: {
          DEFAULT: '#dfe1e5',
          muted: '#a1a3aa',
          subtle: '#6f7277',
        },
        brand: {
          blue: '#3574f0',
          orange: '#cf8e6d',
          green: '#62ae4a',
          red: '#cf5f5f',
          yellow: '#d6b778',
          purple: '#b389db',
          cyan: '#2aacb8',
          md: '#87ceeb',
        },
        accent: {
          DEFAULT: '#3574f0',
          soft: '#5c8bff',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
