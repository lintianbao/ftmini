/**
 * Created by admin on 2017/7/3.
 */

var webpack = require('webpack');
var path = require("path");
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app:'./src/client/app.js',
        defaultSkin:'./src/client/skin/default/defaultSkin.js'

    },
    output: {
        path: path.join(__dirname,'/assets/dist'),//必须绝对路径
        filename: "js/[name].js",
        publicPath: "../"
        // libralyTarget:'amd'
        // libraly:'test'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // new CopyWebpackPlugin([{
        //
        // }])
        new ExtractTextPlugin('style/[name].css'),
        // new CompressionPlugin({
        //     asset:'[path],gz[query]',
        //     algorithm:"gzip",
        //     test:/\.js|html|png|css|gif$/,
        //     threshold:10240,
        //     minRatio:1
        // })
        //{test:/\.svg \?v=\d+\.\d+ ?$/,loader:'url?limit10000$mimetype=image'},
        // new HtmlWebpackPlugin({
        //     filename:"index.html",
        //     template:"./src/client/controller/demo/index.html",
        //     chunk:["index"]
        // })


    ],
    module: {
        loaders: [
            {test: /\.(png|jpe?g|eot|svg|gif?)$/,loader: "file-loader?name=images/[name].[ext]"},
            {test: /\.(ttf|woff2?)$/,loader: "url-loader?name=fonts/[name].[ext]"},
            { test: /\.js?$/, loader: 'babel-loader', exclude: /node_modules/ },
            {test:/\.html$/,loader:'raw-loader'},
            {test: /\.less$/, use: ExtractTextPlugin.extract([ 'css-loader', 'less-loader' ])},
            { test: /\.css$/, use: ExtractTextPlugin.extract([ 'css-loader', 'postcss-loader' ])}
        ]
    }
};