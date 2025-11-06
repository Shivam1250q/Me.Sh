tailwind.config = {
   theme:{
      extend:{
      gridTemplateColumns: {
         'auto': 'repeat(auto-fit, minmax(200px, 1fr))',
      },
      animation:{
         spin_slow: 'spin 6s linear infinite',
      },
      colors:{
         lightHover: 'rgb(241,230,236)',
         darkHover: '#2a004a',
         darkTheme: '#11001F'
      },
      boxShadow:{
         'black': '4px 4px 0 #000',
         'white': '4px 4px 0 #fff',
      }
   }
},
     darkMode: 'selector'
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(-50px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 0px rgba(255,255,255,0)' },
          '50%': { boxShadow: '0 0 10px rgba(255,255,255,0.6)' },
        },
      },
      animation: {
        'slide-in': 'slideIn 1s ease-out forwards',
        'float-slow': 'float 3s ease-in-out infinite',
        'glow-hover': 'glow 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
