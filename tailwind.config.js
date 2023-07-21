/** @type {import('tailwindcss').Config} */
module.exports = {
//   content: ["./src/modules/**/*.tsx",
//   "./src/components/**/*.tsx",
//   './public/index.html'
// ],
purge: ['./src/**/*.tsx',"./src/components/**/*.tsx"],
  theme: {
    extend: {},
  },
  plugins: [],
}

