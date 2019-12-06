const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
    mode: process.env.NODE_ENV,
    plugins:[
        new HTMLWebpackPlugin({
            title: 'Test App',
        }),
        new CleanWebpackPlugin(),
    ],
    devServer: {
        contentBase: './dist',
        port: 8080,
        compress: true,
    },
    entry: {
        index: './es/index.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-react']
                },
                include: /\/es\//,
            }
        ]
    }
};
