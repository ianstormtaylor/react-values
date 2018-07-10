const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackTemplate = require('html-webpack-template')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

const DefinePlugin = webpack.DefinePlugin
const NamedModulesPlugin = webpack.NamedModulesPlugin
const HotModuleReplacementPlugin = webpack.HotModuleReplacementPlugin
const IS_PROD = process.env.NODE_ENV === 'production'
const IS_DEV = !IS_PROD

const config = {
  entry: ['react-hot-loader/patch', './examples/support/index.js'],
  output: {
    path: path.resolve(__dirname, '../../build'),
    filename: '[name]-[hash].js',
  },
  devtool: IS_PROD ? 'source-map' : 'inline-source-map',
  devServer: {
    contentBase: './examples',
    publicPath: '/',
    port: 8888,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        use: 'source-map-loader',
        enforce: 'pre',
      },
      {
        test: /\.js?$/,
        use: {
          loader: 'babel-loader',
          options: {
            forceEnv: 'webpack',
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
              },
            },
          ],
        }),
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(
        IS_PROD ? 'production' : 'development'
      ),
    }),
    new ExtractTextPlugin('[name]-[contenthash].css'),
    new HtmlWebpackPlugin({
      title: 'react-values',
      template: HtmlWebpackTemplate,
      inject: false,
      scripts: ['https://cdn.polyfill.io/v2/polyfill.min.js'],
      links: [
        'https://fonts.googleapis.com/css?family=Roboto:400,400i,700,700i&subset=latin-ext',
        'https://fonts.googleapis.com/icon?family=Material+Icons',
      ],
    }),
    IS_PROD && new UglifyJSPlugin({ sourceMap: true }),
    IS_DEV && new NamedModulesPlugin(),
    IS_DEV && new HotModuleReplacementPlugin(),
  ].filter(Boolean),
}

module.exports = config
