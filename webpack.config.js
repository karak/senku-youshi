const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[hash].js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.tag$/,
        exclude: /node_modules/,
        use: 'riot-tag-loader',
      },
      {
        test: /\.(sass|scss|css)$/,
        use: ['style-loader', { loader: 'css-loader', options: { importLoaders: 1 }}, 'postcss-loader', 'sass-loader'],
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '選句用紙メーカー',
      template: './src/index.html',
    }),
  ],
  externals: {
    riot: 'riot',
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    compress: true,
  },
};
