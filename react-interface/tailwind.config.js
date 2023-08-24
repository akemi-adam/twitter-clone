/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}", "./index.html",
  ],
  theme: {
    extend: {
        borderWidth: {
            DEFAULT: '1px',
            '1': '1px',
            '2': '2px',
        },
        fontFamily: {
            arial: [ 'Arimo', 'sans-serif' ],
        },
    },
  },
  plugins: [],
}

