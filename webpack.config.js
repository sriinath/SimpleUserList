const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.tsx",
    devServer: {
        historyApiFallback: true
    },
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
    module: {
        rules: [
            {
              test: /\.tsx?$/,
              loader: 'awesome-typescript-loader',
              exclude: /node_modules/
            }
        ]
    },
    plugins:[
       new HtmlWebpackPlugin({
          template: './index.html'
       })
    ]
};