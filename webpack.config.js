/**
 * Created by admin on 2017/7/3.
 */

var webpack = require('webpack');
var path = require("path");
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        app:'./src/client/app.js',
        defaultSkin:'./src/client/skin/default/defaultSkin.js'
    },
    output: {
        path: path.join(__dirname,'/assets/dist'),
        filename: "js/[name].js",
        publicPath: "../"
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // new CopyWebpackPlugin([{
        //
        // }])
        new ExtractTextPlugin('style/[name].css')
        // new CompressionPlugin({
        //     asset:'[path],gz[query]',
        //     algorithm:"gzip",
        //     test:/\.js|html|png|css|gif$/,
        //     threshold:10240,
        //     minRatio:1
        // })
    ],
    module: {
        loaders: [
            { test: /\.js?$/, loader: 'babel-loader', exclude: /node_modules/ },
            {test:/\.html$/,loader:'raw-loader'},
            {test: /\.less$/, use: ExtractTextPlugin.extract([ 'css-loader', 'less-loader' ])},
            { test: /\.css$/, use: ExtractTextPlugin.extract([ 'css-loader', 'postcss-loader' ])}
        ]
    }
};