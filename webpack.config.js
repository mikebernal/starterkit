const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  entry: './src/js/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './public'),
    publicPath: 'public/'
  },
  mode: 'none',
  module: {
    rules: [ 
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          outputPath: 'images/'
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: "postcss-loader",
            options: {
              ident: 'postcss',
              plugins: [
                require('autoprefixer'),
              ]
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env'],
            plugins: ['transform-class-properties']
          }
        }
      }
    ]
  },
  plugins: [
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      proxy: `http://localhost:8080/`,
      logConnections: true,
      refresh: false,
      files: ['./*.html'],
      // files: ['./**/*.php'],
      // proxy: 'Whatever your PHP project location is',
      
      // For static websites 
      // server: { baseDir: ['./'] }
    }),
    new TerserPlugin(),
    new MiniCssExtractPlugin({
      filename: 'style.css'
    })
  ] 
};