const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  context: path.resolve(__dirname, "src"),
  mode: "development",
  entry: {
    main: "./index.js",
    stat: "./statistics.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].bundle.js"
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@model": path.resolve(__dirname, "src/model"),
      "@css": path.resolve(__dirname, "src/css"),
      "@assets": path.resolve(__dirname, "src/assets")
    },
    extensions: [".js", ".json", ".jsx", ".ts", ".tsx"]
  },
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./index.html" }),
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/images/[name].[contenthash].[ext]"
        }
      },
      {
        test: /\.(woff|woff2|ttf|eot)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/fonts/[name].[contenthash].[ext]"
        }
      },
      {
        test: /\.xml$/,
        use: ["xml-loader"]
      },
      {
        test: /\.csv$/,
        use: ["csv-loader"]
      }
    ]
  }
};
