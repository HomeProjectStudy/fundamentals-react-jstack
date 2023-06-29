const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
     path: path.resolve(__dirname, 'build'),
     filename: 'bundle[hash].js',
     publicPath: '/'
  },
  plugins: [
    new HtmlWebPackPlugin( {
      template: path.resolve(__dirname, 'public', 'index.html')
    }),
    new CleanWebpackPlugin()
  ],
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader', 
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          'sass-loader',
        ],
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    port: 3001,
    historyApiFallback: true,
  }
};