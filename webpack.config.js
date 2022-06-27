const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",

  entry: {
    main: path.resolve(__dirname, "src", "index.js"),
  },

  output: {
    path: path.resolve(__dirname, "public"),
    filename: "main.bundle.js",
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif|webp|svg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(js|jsx)/i,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      title: "webpack starter",
      template: require("html-webpack-template"),
      bodyHtmlSnippet: `
      <div id="root"></div>
      <script src="./main.bundle.js"></script>
      `,
    }),
  ],

  devServer: {
    port: 3000,
    open: true,
    liveReload: true,
    static: path.resolve(__dirname, "public"),
  },
};
