const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { resolve } = path

module.exports = {
  entry: {
    app: './src/index.js'
  },
  // module: {
  //   rules: [
  //     {
  //       test: /\.(js|jsx)$/,
  //       use: ['babel-loader'],
  //     },
  //   ],
  // },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    })
  ],
  output: {
    filename: '[name].bundle.js',
    // output path must be absolute path
    // __dirname is global object
    path: resolve(__dirname, 'dist'),
  },
}
