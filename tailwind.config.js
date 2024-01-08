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
  safelist: [
    'leading-[40px]',
    'lg:grid-cols-2',
    'lg:grid-rows-2',
    'lg:grid-rows-3',
    'lg:grid-rows-4',
    'lg:grid-rows-5',
    'lg:grid-rows-6',
  ],
}

