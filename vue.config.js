const path = require("path");

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
      extensions: [".ts", ".tsx"],
    },
    module: {
      rules: [
        {
          test: /\.(jsx|tsx|ts)$/,
          use: [
            "babel-loader",
            {
              loader: "ts-loader",
              options: {
                transpileOnly: true,
                happyPackMode: false,
                appendTsxSuffixTo: ["\\.vue$"],
              },
            },
          ],
        },
      ],
    },
  },
};
