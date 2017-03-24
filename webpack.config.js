const webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    HtmlWebPackPlugin = require('html-webpack-plugin'),
    ngAnnotatePlugin = require('ng-annotate-webpack-plugin'),
    path = require('path');

module.exports = {

    entry: {
        app: './app/app.js',
        vendor: [
            'angular',
            'angular-ui-router/release/angular-ui-router.min.js',
            'angular-animate/angular-animate.min.js',
            'angular-aria/angular-aria.min.js',
            'angular-material/angular-material.min.js',
            'angular-material/angular-material.min.css',
            'ng-cordova',
            'webpack-material-design-icons'
        ]
    },

    output: {
        filename: '[name].[chunkhash].bundle.js',
        path: path.join(__dirname, 'www')
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor']
        }),

        new HtmlWebPackPlugin({
            template: 'index.html'
        })
    ],

    module: {
        rules: [{
            test: /\.html$/,
            include: path.resolve(__dirname, 'app/'),
            loader: `ngtemplate-loader?relativeTo=${__dirname}/app/!html-loader`,
        }, {
            test: /\index.html$/,
            exclude: path.resolve(__dirname, 'node_modules/'),
            loader: 'html-loader?name=[name].[ext]',
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.styl$/,
            loaders: ['style-loader', 'css-loader', 'stylus-loader']
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }, {
            test: /\.(jpe?g|png|gif|svg|eot|woff|ttf|svg|woff2)$/,
            loader: 'file-loader?name=[name].[ext]'
        }]
    },

    devServer: {
        contentBase: path.join(__dirname, 'www'),
        port: 9000
    },

    watchOptions: {
        aggregateTimeout: 300,
        ignored: path.resolve(__dirname, 'node_modules/')
    },
    devtool: 'source-map'
};
