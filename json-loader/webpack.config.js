const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: path.join(__dirname, 'src/js/index.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      // Aquí van los loaders
      {
        test: /\.(jpg|png|gif|woff|eot|ttf|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000, // bytes
          }
        }
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
      {
        // test - Que tipo de archivo quiero reconocer,
        // use - Que loader se va encargar del archivo
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          // ['style-loader', 'css-loader'],
          // fallback: 'style-loader',
          use: 'css-loader'
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('css/[name].css')
  ]
}
