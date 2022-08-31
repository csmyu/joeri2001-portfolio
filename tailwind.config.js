/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      color: {
        "text": "#FFFFFF",
        "background": "#202023",
        "accent": "#363638",
        "accent-blue": "#81E6D9",
        "accent-pink": "#FC62C1",
      },
    },
    screens: {
      "xs": "250px",
      "sm": "640px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px",
      "2xl": "1536px",
    }
  },
  plugins: [],
};
