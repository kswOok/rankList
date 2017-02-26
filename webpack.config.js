const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const pathResolve = (p) => path.resolve(__dirname, p);

module.exports = {
    entry: {
        rankList: pathResolve('./app/pages/rankList.js'),
        userList: pathResolve('./app/pages/userList.js')
    },
    output: {
        path: pathResolve('./dist'),
        filename: '[name].js'
    },
    plugins: [
        new HTMLWebpackPlugin({
            filename: 'rankList.html',
            template: 'templates/rankList.html',
            inject: true,
            chunks: ['rankList']
        }),
        new HTMLWebpackPlugin({
            filename: 'userList.html',
            template: 'templates/userList.html',
            inject: true,
            chunks: ['userList']
        })
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }, {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader?limit=8192' // 这里的 limit=8192 表示用 base64 编码 <= ８K 的图像
            }, {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                loader: 'url-loader?limit=8192'
            }
        ]
    }
};