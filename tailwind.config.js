/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    theme: {
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      }
    },
    colors  : {
      'clay': {
        '50': '#f6f6f9',
        '100': '#ebecf3',
        '200': '#d3d5e4',
        '300': '#acb0cd',
        '400': '#7f87b1',
        '500': '#5f6798',
        '600': '#4b517e',
        '700': '#3d4167',
        '800': '#353857',
        '900': '#2b2d42',
    },
  },    
    extend: {},
  },
  plugins: [],
}