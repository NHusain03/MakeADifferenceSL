/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        offwhite: '#e5e7eb',
        slyellow: '#FFBE29',
        slred: '#8D153A',
        slgreen: '#00534E',
        ashgray: '#A1B0AB',
        battlegray: '#929487',
        teagreen: '#C3DAC3',
        nyanza: '#D5ECD4',
        celadon: '#B6D7B9',
        cambridge: '#9ABD97'
      }
    },
  },
  plugins: [],
}
