const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const env = process.env.NODE_ENV || 'development'

module.exports = {
  entry: './src/index.tsx',
  mode: env,
  cache: env == 'development',
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: './public/favicon.ico',
      meta: {
        viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
        'theme-color': 'yellow',
      },
      template: 'src/index.html',
    }),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    preferRelative: true,
    alias: {
      '@hooks': path.resolve(__dirname, './src/hooks/'),
    }
  },
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'bundle.js',
  },
}
