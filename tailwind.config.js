/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'space-pattern': "url('/assets/images/texture.png')",
        'aboutMe-wall': "url('/assets/images/about-me.jpg')",
        
      },
      colors: {
        "primary-30": "#ceefff",
        "primary-40": "#2196f3",
        "primary-50": "#95bcffd8",
        "primary-100": "#3e92cc",
        "primary-200": "#2a628f",
        "primary-300": "#1d3b67",
        "primary-400": "#002962",
        "primary-500": "#13293d",
      },
      fontFamily: {
        "poppins": ["Poppins", "sans-serif"],
        "kristi": ["Kristi", "sans-serif"],
        "bangers": ["Bangers", "sans-serif"],
      },
    },
  },
  plugins: [],
}
