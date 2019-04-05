const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
// const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './src/index.js',
	devtool: 'cheap-module-source-map',
    output: {
        path: path.join(__dirname, "/dist"),
		sourceMapFilename: '[file].map',
        filename: "index_bundle.js"
    },
    devServer: {
        inline: true,
        port: 8090
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }, {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                },
            },
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(pdf|jpg|png|gif|svg|ico)$/,
                use: [
                    {
                        loader: 'url-loader'
                    },
                ]
            }
        ]
    },
        plugins: [
            new HtmlWebPackPlugin({
                hash: true,
                filename: "index.html",  //target html
                template: "./src/index.html" //source html
            }),
        ]
    }