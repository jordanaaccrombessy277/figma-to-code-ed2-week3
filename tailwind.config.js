/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'tokena-white':'#FFFFFF',
        'tokena-light-gray':'#F3F4F6',
        'tokena-gray':'#D1D5DB',
        'tokena-dark-gray':'#6B7280',
        'tokena-dark':'#1D1D1D',
        'tokena-yellow':'#F2D604',
        'tokena-green':'#01B130',
        'tokena-red':'#CB0101',
        'tokena-blue':'#006EFF',
        'tokena-dark-2':'#0065EA',
        'tokena-dark-blue-1':'#171923',
        'tokena-dark-blue-2':'#292C3B',
        'tokena-blue-opacity7percent':'#006EFF10',
        'tokena-blue-opacity22percent':'#006EFF22',
        'tokena-green-opacity-15':'#01B13015',
        'tokena-blue-opacity-6':'#006EFF06',
        'tokena-red-opacity-15':'#CB010115',
        'tokena-dark-gray-opacity-60':'#6B728060',
        'tokena-grayopacity15':'#D1D5DB15',
        'tokena-light-gray-opacity10':'#F3F4F610',
        'tokena-white-opacity50':'#E5E5E550'
      },
      borderColor:{
        'tokena-light-gray':'#F3F4F6',
        'tokena-dark-gray':'#6B7280',
        'tokena-grayopacity15':'#D1D5DB15',
        'tokena-gray-opacity-20':'#D1D5DB20',
        'tokena-blue-opacity-6':'#006EFF06',
      },
      width:{
        '4.5':'18px'
      },
      height:{
        '4.5':'18px',
        '15.5':'62px',
      },
      translate:{
        'double-full':'200%'
      },
      gap:{
        '5.5':'22px'
      }
    },
  },
  plugins: [],
}

