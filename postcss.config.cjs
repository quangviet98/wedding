const purgecss = require('@fullhuman/postcss-purgecss').default;
const cssnano = require('cssnano');

module.exports = {
  plugins: [
    purgecss({
      content: ['./src/**/*.{html,js,ts,tsx}'],
      defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
      safelist: [
        /^body$/,
        /^h1$/,
        /^h2$/,
        /^h3$/,
        /^h4$/,
        /^h5$/,
        /^h6$/,
        /^p$/,
        /^a$/,
        /^ul$/,
        /^ol$/,
        /^li$/,
        /^button$/,
        /^img$/,
        /^html$/,
        /^fadein-text-\d+$/,
        /^fadein-text$/,
      ], // Add more tags if needed
    }),
    cssnano({
      preset: 'default',
    }),
  ],
};
