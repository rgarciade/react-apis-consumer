module.exports = {
  entry: './source/server.js',
  output: {
    filename: 'index.js',
    path: './built/server',
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json',
      },
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /(node_modules)/,
        query: {
          presets: ['es2016','es2017', 'react'],
          plugins: ['transform-es2015-modules-commonjs'],
        }
      }
    ]
  },
  target: 'node',
}
