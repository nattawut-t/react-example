const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { resolve } = path

module.exports = {
  entry: {
    app: './src/index.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
      },
    ],
  },
  devServer: {
    // hot: true,
    inline: true,
    host: '0.0.0.0',
    contentBase: './',
    publicPath: '/',
    historyApiFallback: true,
  },
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
