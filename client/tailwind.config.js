/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "border1":"#F0F0F0"
      },
      fontSize:{
            "heading":"30px"
      },
      fontFamily: {
       "poppins":["Poppins","serif"],
       "roboto":["Roboto","sans-serif"],
       "jost":["Jost","sans-serif"],
      },
      // -------------------animation-------------------
      animation: {
        'slide-in': 'slide-in 1s ease-in-out forwards',
        'zoom-in': 'zoom-in 1s ease-in-out forwards',
        'move-slowly': 'move-slowly 10s infinite',
        'cloud-left': 'cloud-left 3s forwards',
        'cloud-right': 'cloud-right 3s forwards',
      },
      keyframes: {
        'slide-in': {
          '0%': {
            transform: 'translateX(100%)', // Start off-screen to the right
            opacity: '0',
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1',
          },
        },
        'cloud-left': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-50%) translateX(0)',
          },
          '50%': {
            opacity: '1',
            transform: 'translateY(-50%) translateX(50px)',
          },
          '100%': {
            opacity: '0',
            transform: 'translateY(-50%) translateX(100px)',
          },
        },
      'cloud-left': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-50%) translateX(0)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(-50%) translateX(50px)',
          },
        },
        'cloud-right': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-50%) translateX(0)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(-50%) translateX(-50px)',
          },
        },
        'move-slowly': {
          '0%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(2px, 2px)' }, // Adjust movement
          '100%': { transform: 'translate(0, 0)' },
        },
        'zoom-in': {
          '0%': {
            transform: 'scale(0.8)', // Start smaller
            opacity: '0',
          },
          '100%': {
            transform: 'scale(1)', // Zoom to full size
            opacity: '1',
          },
          'move-slowly': {
            '0%': { transform: 'translate(0, 0)' },
            '50%': { transform: 'translate(10px, 10px)' }, // Increase movement distance
            '100%': { transform: 'translate(0, 0)' },
          },
        },
        
      }
      // -------------------animation-------------------
    },
  },
  plugins: [],
}