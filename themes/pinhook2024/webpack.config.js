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
    'modules/globals/Footer.module/module': './src/modules/globals/Footer.module/module.ts',

    'modules/HeroCarousel.module/module': './src/modules/HeroCarousel.module/module.ts',
    'modules/NavGrid.module/module': './src/modules/NavGrid.module/module.ts',
    'modules/ResourceCards.module/module': './src/modules/ResourceCards.module/module.ts',
    'modules/ServiceCards.module/module': './src/modules/ServiceCards.module/module.ts',
    'modules/TabArch.module/module': './src/modules/TabArch.module/module.ts',

    'modules/blog/RelatedBlogPosts.module/module': './src/modules/blog/RelatedBlogPosts.module/module.ts',

    'modules/hubdb/InsightsListing.module/module': './src/modules/hubdb/InsightsListing.module/module.ts',
    'modules/hubdb/RelatedEvents.module/module': './src/modules/hubdb/RelatedEvents.module/module.ts',
    'modules/hubdb/RelatedInsights.module/module': './src/modules/hubdb/RelatedInsights.module/module.ts',
    'modules/hubdb/RelatedServices.module/module': './src/modules/hubdb/RelatedServices.module/module.ts',
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
