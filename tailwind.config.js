/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          softred: "hsl(10, 79%, 65%)",
          cyan: "hsl(186, 34%, 60%)",
        },

        neutral: {
          darkbrown: "hsl(25, 47%, 15%)",
          mediumbrown: "hsl(28, 10%, 53%)",
          cream: "hsl(27, 66%, 92%)",
          vpaleorange: "hsl(33, 100%, 98%)"
        }
      },

      fontFamily: {
        body: ["DM Sans"],
      }
    },
  },
  plugins: [],
}