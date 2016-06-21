var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/js/main.jsx',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist/',
    publicPath: '/dist/',
  },
  // devServer: {
  //   outputPath: __dirname + '/dist/',
  // },
  module: {
      loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
        },
      },
      ]
    },
    plugins: [
      new CopyWebpackPlugin([
        {from: './node_modules/bootswatch/simplex/bootstrap.min.css'},
        {from: './node_modules/jquery/dist/jquery.min.js'},
        {from: './src/app.html', to: 'index.html'}
      ]),
    ],
}
