const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
// const WebpackObfuscator = require('webpack-obfuscator'); // Tạm tắt
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production'

  return {
    entry: './frontend/index.js',
    output: {
      path: path.join(__dirname, '/build'),
      filename: 'bundle.[contenthash].js',
      publicPath: '/',
      assetModuleFilename: 'images/[name].[hash][ext]',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
        {
          test: /\.css$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
          ],
        },
        {
          test: /\.(png|jpe?g|gif|svg|webp)$/i,
          type: 'asset/resource',
        },
      ],
    },
    optimization: {
      minimize: isProduction,
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            compress: true,
            mangle: true,
          },
        }),
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './public/index.html',
        favicon: './public/favicon.ico',
        minify: isProduction
          ? {
              removeComments: true,
              collapseWhitespace: true,
              removeRedundantAttributes: true,
              useShortDoctype: true,
              removeEmptyAttributes: true,
              removeStyleLinkTypeAttributes: true,
              keepClosingSlash: true,
              minifyJS: true,
              minifyCSS: true,
              minifyURLs: true,
            }
          : false,
      }),
      ...(isProduction
        ? [
            // BỎ Obfuscator đi để code chạy ổn
            new MiniCssExtractPlugin({
              filename: 'styles/[name].[contenthash].css',
            }),
            new BundleAnalyzerPlugin({
              analyzerMode: 'static',
              openAnalyzer: false,
            }),
          ]
        : []),
    ],
    devtool: isProduction ? false : 'source-map',
    devServer: {
      static: {
        directory: path.join(__dirname, 'public'),
      },
      compress: true,
      port: 8080,
      hot: true,
      open: true,
      historyApiFallback: true,
    },
  }
}
