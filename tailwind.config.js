/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // enable dark mode

  theme: {
    extend: {
      colors: {
        'blog-blue': {
          100: '#222535',
          200: '#090d1f',
          300: '#080c1c',
          400: '#070a19',
          500: '#060916'
      },
      'blog-black': {
          100: '#030409',
          200: '#020306',
          300: '#010103',
          400: '#000000',
         
      },
      'blog-white': {
          100: '#ffffff',
          200: '#e6e7e9',
          300: '#cecfd2',
      },

      'blog-grey': {
        100: '#b5b6bc',
        200: '#9d9ea5',
        300: '#84868f',
        400: '#6c6d77',
        500: '#6b6e79',
        600: '#535662',
      }
    
    },
  
    },
  },
  plugins: [],

    themes: {
      

}
}
