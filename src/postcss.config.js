module.exports = ({ file, options, env }) => ({
  plugins: {
    'postcss-cssnext': {
      browsers: ['last 2 versions', '> 3% in JP'],
    },
  },
});
