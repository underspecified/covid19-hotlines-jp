const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
//const InlineChunkHtmlPlugin =
// require("react-dev-utils/InlineChunkHtmlPlugin");

module.exports = {
  entry: './src/index.tsx',
  plugins: [
        new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ['public/build']
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: 'public/index.html',
    }),
    // new InlineChunkHtmlPlugin(
    //   HtmlWebpackPlugin,
    //   // [/runtime/], {
    //   //   inlineChunks: ['manifest']
    //   // }
    // )
  ],
  output: {
    path: __dirname + '/public',
    filename: 'build/[name].[contenthash].js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      { test: /\.tsx?$/, exclude: /node_modules/, loader: 'ts-loader' },
      { test: /\.css$/i,
        use: [
          "style-loader",
          "@teamsupercell/typings-for-css-modules-loader",
          {
            loader: "css-loader",
            options: { modules: true }
          }
        ]
      }
    ]
  }
}

// noinspection JSUndefinedPropertyAssignment
module.loaders = [
  { test: /\.css$/,
    loader: 'typings-for-css-modules-loader?modules&namedExport&camelCase' },
  { test: /\.scss$/, loader: 'typings-for-css-modules-loader?modules&sass' }
  ]
