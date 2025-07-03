/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cyber-green': '#00FF94',
        'neon-pink': '#FF2E63',
      },
      fontFamily: {
        'orbitron': ['Orbitron', 'monospace'],
      },
    },
  },
  plugins: [],
}