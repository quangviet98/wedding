const purgecss = require('@fullhuman/postcss-purgecss').default;
const cssnano = require('cssnano');

module.exports = {
  plugins: [
    purgecss({
      content: ['./src/**/*.{html,js,ts,tsx}'],
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
    }),
    cssnano({
      preset: 'default',
    }),
  ]
};
