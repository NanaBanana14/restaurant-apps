/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// eslint-disable-next-line
const webpack = require('webpack');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/scripts/index.js'),
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/templates/index.html'),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/'),
          to: path.resolve(__dirname, 'dist/'),
        },
      ],
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      swDest: './sw.bundle.js',
      runtimeCaching: [
        {
          urlPattern: ({ url }) => url.href.startsWith('https://restaurant-api.dicoding.dev/'),
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'therestaurantbbdb-api',
          },
        },
        {
          urlPattern: ({ url }) => url.href.startsWith('https://restaurant-api.dicoding.dev/list'),
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'thelistrestaurantdb-api',
          },
        },
        {
          urlPattern: ({ url }) => url.href.startsWith('https://restaurant-api.dicoding.dev/images/medium/<pictureId>'),
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'therestaurantbb-image-api',
          },
        },
      ],
    }),
    new WebpackPwaManifest({
      filename: 'manifest.json',
      name: 'Bellybites Catalogue Lite',
      short_name: 'BB Lite',
      description: 'Free Catalogue Restaurant for you',
      background_color: '#ffffff',
      theme_color: '#C63D2F',
      start_url: './index.html',
      display: 'standalone',
      icons: [
        {
          src: path.resolve(__dirname, './src/public/icons/icon-512x512.png'),
          sizes: [96, 128, 192, 256, 384, 512],
        },
      ],
    }),
  ],
};
