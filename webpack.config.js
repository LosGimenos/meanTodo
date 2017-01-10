const webpack = require('webpack');
const path = require('path');

module.exports = {
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    proxy: {
      '*': 'http://localhost:3000'
    },
  },
  entry: [
    'webpack-dev-server/client?http://127.0.0.1:0000/',
    'webpack/hot/only-dev-server',
    'bootstrap-loader',
    './src'
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  resolve: {
    modulesDirectories: ['node_modules', 'src'],
    extension: ['', '.js', '.scss']
  },
  module: {
    loaders: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015']
      },
    },
    {
      test: /\.html$/,
      loader: 'raw'
    },
    {
      test: /\.scss$/,
      loaders: [
        'style',
        'css',
        'autoprefixer?browsers=last 3 versions',
        'sass?outputStyle=expanded'
      ]
    },
    {
      test: /\.(woff2?|ttf|eot|svg)$/,
      loader: 'url?limit=1000'
    },
    {
      test: /bootstrap-sass\/assets\/javascripts\//,
      loader: 'imports?jQuery=jquery'
    }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
};
