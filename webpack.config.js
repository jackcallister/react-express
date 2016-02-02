var webpack = require('webpack')
var path = require('path')

module.exports = {

  entry: {
    index: './assets/javascripts/renderers/index.jsx'
  },

  output: {
    path: path.join(__dirname, './lib/assets/javascripts'),
    filename: '[name].bundle.js'
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel' },
    ]
  }
}
