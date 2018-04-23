const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    home: path.join(__dirname, 'src/index.js'),
    precios: path.join(__dirname, 'src/precios.js'),
    contacto: path.join(__dirname, 'src/contacto.js'),

  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'js/[name].js'
  },
  module: {
    rules: [
      // Aquí van los loaders
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
