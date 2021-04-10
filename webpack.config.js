let path = require('path');
let webpack = require('webpack');
let ExtractTextPlugin = require("extract-text-webpack-plugin");
let UglifyJsPlugin = require('uglifyjs-webpack-plugin');
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        'js/scripts.js' : './src/js/index.js',
        'css/styles.min.css' : './src/scss/styles.scss'
    },
    output: {
        path: path.resolve(__dirname + '/dist/'),
        publicPath: '/dist/',
        filename: '[name]'
    },

    module: {
        rules: [
            {
                test: /\.(css|scss)/, use: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                //exclude: /node_modules/
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: '[name]',
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html'
        })
    ],

    devServer: {
        historyApiFallback: true,
        noInfo: true,
        overlay: true
    },
    performance: {
        hints: false
    },
    devtool: 'source-map',

    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    name: 'js/vendors.js',
                    test: /node_modules/,
                    chunks: 'all',
                    enforce: true
                }
            }
        },
        minimize: true,
        minimizer: [
            new UglifyJsPlugin({
                include: /\.min\.js$/,
                sourceMap: true
            }),
        ],
    },
};

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map';
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ])
}
