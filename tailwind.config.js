/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'neutral-50': '#F9F9F9',
        'neutral-100': '#F4F4F4',
        'neutral-200': '#E4E4E4',
        'neutral-300': '#D3D3D3',
        'neutral-400': '#A2A2A2',
        'neutral-500': '#737373',
        'neutral-600': '#525252',
        'neutral-700': '#404040',
        'neutral-800': '#262626',
        'neutral-900': '#171717',
        'neutral-950': '#0A0A0A',
        'neutral-1000': '#000000',
        'twitter-blue': '#1D9BF0',
        'twitter-blue-hover':'#1871CA',
        'twitter-blue-disabled':'#1E5D87',
        'blue-wash':'rgba(117, 190, 239, 0.2)',
        'button-stroke':'#546A7A',
        'searchbar-fill':'#212327',
        'card-fill':'#16181C',
        'success':'#00BE74',
        'error':'#8B141A'
      },
      fontFamily:{
        'inter': ['Inter'],
        'chirp': ['Chirp']
      },
      boxShadow:{
        '3xl': '0px 8px 16px 0px rgba(0, 0, 0, 0.25)'
      },
      borderRadius:{
        '6xl':'4.0625rem',
        '2rem':"2rem",
        '0.25':'0.25rem'
      },
      width:{
        'main':'37.375rem',
        'card' : '32rem'
      },
      opacity:{
        "24":'0.24'
      },
      lineHeight:{
        'normal':'normal',
        '1.125':"1.125rem"
      },
      spacing:{
        "1px":'1px',
        "2px":"2px",
        "3px":"3px",
        "15p":"15px",
        "1.125rem":"1.125rem",
        "3.75r":"3.75rem",
        "4.25rem":"4.25rem",
        "12.5rem":"12.5rem"
      },
      fontSize:{
        "10p":"10px",
        "15p":"15px",
        "14p":"14px",
        "31p":"31px"
      }

    },
  },
  plugins: [],
}

