const HtmlWebpackPlugin = require("html-webpack-plugin");

const port = 3000;

module.exports = () => {
  return {
    mode: "development",
    entry: "./index.tsx",
    output: {
      path: __dirname + "/dist",
      filename: "bundle.[hash].js",
    },
    resolve: {
      extensions: [".js", ".jsx", ".tsx", ".ts"],
    },
    devServer: {
      host: "localhost",
      port: port,
      open: true,
      historyApiFallback: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "public/index.html",
      }),
    ],
    module: {
      rules: [
        {
          test: /\.(js)$/,
          exclude: /node_modules/,
          use: ["babel-loader"],
        },
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
  };
};
