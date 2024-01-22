/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      primary:'Poppins , sans-serif',
    }
  },
  container: {
    padding: {
      DEFAULT: '1rem',
      lg: '2rem',
    },
  },
  screens: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1234px'
  },
  extend: {
    colors: {
      primary: '#ff9603',
      secondary: '#ff9603',
    },
  },
  backgroundColor: {
    '1b263b' : '#1b263b',
  },
  plugins: [],
}

