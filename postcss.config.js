const autoprefixer = require('autoprefixer');
const tailwindcss = require('tailwindcss');
// const postcssimport = require('postcss-import'), // postcss-import needs to be first

module.exports = {
  plugins: [
    require('postcss-import'),
    tailwindcss,
    autoprefixer
  ],
};
