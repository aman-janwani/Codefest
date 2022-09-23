/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "test": "testing 4s cubic-bezier(0, 0, 0.2, 1)",
      },
      keyframes: {
        testing: {
          "0%": {
            transform: "scale(0)",
            opacity: "1",
          },
          "25%": {
            transform: "scale(0)",
            opacity: "0.9",
          },
          "50%": {
            transform: "scale(0.5)",
            opacity: "0.8",
          },
          "75%, 100%": {
            transform: "scale(2)",
            opacity: "0",
          },
        },
      },
      colors: {
        "hostinger-blue": "#673DE6",
        "hostinger-Dark-blue": "#2F1C6A",
        "hostinger-pink": "#FC5185",
      },
    },
  },
  plugins: [],
};

// animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;

// @keyframes ping {
//   75%, 100% {
//     transform: scale(2);
//     opacity: 0;
//   }
// }
