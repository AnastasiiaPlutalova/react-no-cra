const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devServer: {
        port: 3000,
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './public/index.html'}),
    ],
    module: {
        rules: [
          {
            test: /\.s[ac]ss$/i,
            use: [
              "style-loader",
              "css-loader",
              "sass-loader",
            ],
          },
        ],
      },
}
