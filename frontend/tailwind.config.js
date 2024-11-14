/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

 extend:{
  backgroundImage:{
    'hero-pattern': "url('/Bold abstract pattern 1.svg')",
    'twinkles-lp': "url('/Twinkles.svg')",
    'twinkles-sp': "url('/Twinkles1.svg')"
     }, 
 }
  },  
  plugins: [],
}