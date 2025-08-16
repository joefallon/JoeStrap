console.log('PostCSS config loaded');
module.exports = {
  plugins: [
    require('postcss-import'),
    ...(process.env.POSTCSS_ENV === 'production' ? [require('cssnano')()] : [])
  ]
};
