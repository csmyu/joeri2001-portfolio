/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      color: {
        text: "#FFFFFF",
        background: "#202023",
        accent: "#363638",
        "accent-blue": "#81E6D9",
        "accent-pink": "#FC62C1",
      },
    },
  },
  plugins: [],
};
