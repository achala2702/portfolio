/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#48329C',
        customPurple: '#87329C',
        customCol_3: '#623288',
        customCol_4: "#A862DE"
      }
    },
  },
  plugins: [],
}