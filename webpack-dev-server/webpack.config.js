const path = require('path')

module.exports = {
  entry: path.join(__dirname, 'index.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    port: 9000, // 8080 by default
  },
  module: {
    rules: [
      // Aquí van los loaders
      {
        // test - Que tipo de archivo quiero reconocer,
        // use - Que loader se va encargar del archivo
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}
