const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devServer: {
        port: 3000,
    },
    resolve: {
        extensions: ['.js','.jsx'] 
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
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use:  'babel-loader'
          }
        ],
      },
}
