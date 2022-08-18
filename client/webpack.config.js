const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const path = require("path");
const fs = require("fs");

const PATHS = {
  src: path.join(__dirname, "./src"),
  dist: path.join(__dirname, "./dist")
};

module.exports = (env, argv) => {
    const isEnvDevelopment = argv.mode === "development";
    const isEnvProduction = argv.mode === "production";

    return {   
      entry: `${PATHS.src}/index.js`,
      output: {
        path: `${PATHS.dist}`,
        filename: "./[name].[fullhash].min.js"
      },
        devServer: {
        liveReload: true,
        static:  `${PATHS.dist}`,
        open: true,
        hot: true,
        port: 8080,
        compress: true
      },
      optimization: {
        splitChunks: {
          cacheGroups: {
            vendor: {
              name: "vendor",
              test: /node_modules/,
              chunks: "all",
              enforce: true
            }
          }
        }
      },
      resolve: {
        extensions: [".ts", ".js", '.jsx']
      },
      devtool: isEnvDevelopment ? "eval-cheap-module-source-map" : "source-map",
        module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                  {
                    loader: MiniCssExtractPlugin.loader
                  },
                  {
                    loader: "css-loader",
                    options: { sourceMap: true }
                  },
                  {
                    loader: "postcss-loader",
                    options: { sourceMap: true }
                  }
                ],
                exclude: "/node_modules"
              },
            {
                test: /\.(js|jsx)$/,
                loader: "babel-loader",
                exclude: "/node_modules"
              },
              {
                test: /\.ts$/,
                loader: "ts-loader",
                exclude: "/node_modules"
              },
        ],
        },
        plugins: [
            new CleanWebpackPlugin(),
            new MiniCssExtractPlugin({
            filename: `styles/styles.[hash].min.css`
            }),
            new CopyPlugin({
            patterns: [
                {
                from: "./src/assets/img",
                to: "assets/img",
                noErrorOnMissing: true
                }
            ]
            }),
            new HtmlWebpackPlugin({
              template: 'src/index.html'
            })
        ]
    }
}
