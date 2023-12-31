const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = (env, options) => {
  const isProduction = options.mode === 'production'

  return {
    entry: './dev/index.tsx',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [
                  '@babel/preset-env',
                  '@babel/preset-react',
                  '@babel/preset-typescript',
                ],
              },
            },
          ],
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        // Add loaders for other file types as needed
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
      plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'dev', 'index.html'),
      }),
      new webpack.ProvidePlugin({
        React: 'react',
      }),
    ],
    devServer: {
      static: {
        directory: path.resolve(__dirname, 'dev'),
      },
      hot: true,
    },
  }
}
