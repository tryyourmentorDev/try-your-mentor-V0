/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light:"#5e17eb",
          dark:"#3a0d94"
        },
        secondary: {
          light: "#ee1176",
          dark: "#bb0d5d"
        },
      },
      textColor: {
        'gradient': 'text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500',
        p1: '#363636',  // A custom blue color
        p2: '#5e5e5e', // A custom purple color
        p3: '#878787',    // A custom amber color
        p4: '#d3d3d3',     // A custom gray color
      },
      fontFamily: {
        body: ["Nunito"],
        // title:["Barlow Condensed", "serif"]
        kanit:["Kanit"],
        poppins:["Poppins"],
      },
      fontSize: {
        '4xl': '2.5rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
        '8xl': '6rem',
        '9xl': '7rem',
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      borderWidth: {
        '14': '14px',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
};
