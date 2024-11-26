require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { EsbuildPlugin } = require('esbuild-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HubSpotAutoUploadPlugin = require('@hubspot/webpack-cms-plugins/HubSpotAutoUploadPlugin');

const clientConfig = ({ portal, autoupload, hsDest }) => ({
  mode: 'production',

  entry: {
    'build/main': './src/main.ts',
    'modules/globals/Header.module/module': './src/modules/globals/Header.module/module.ts',
    'modules/HeroCarousel.module/module': './src/modules/HeroCarousel.module/module.ts',
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
  },

  optimization: {
    minimizer: [new EsbuildPlugin({ target: 'es2020', css: true })],
  },

  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: 'esbuild-loader',
        options: {
          target: 'es2020',
        },
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.ts'],
  },

  plugins: [
    new HubSpotAutoUploadPlugin({
      portal,
      autoupload,
      src: 'dist',
      dest: hsDest,
    }),

    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),

    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/modules', to: 'modules', globOptions: { ignore: ['**/*.ts'] } },
        { from: 'src/images', to: 'images' },
        { from: 'src/queries', to: 'queries' },
        { from: 'src/templates', to: 'templates' },
        { from: 'src/theme.json', to: 'theme.json' },
      ],
    }),
  ],
});

module.exports = clientConfig;
