//const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
var webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './src/index.js'
    ],
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: "react-hot!babel"
        }]
    },
    resolve: {  
        extensions: ['', '.js', '.jsx']
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js',
    },
    devServer: {
        static: {
        directory: './dist',
        },
        hot: true,
        port: 8080,
    },
    plugins: [
        //new ReactRefreshWebpackPlugin()
        new webpack.HotModuleReplacementPlugin()
    ],
};