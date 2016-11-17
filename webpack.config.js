var webpack = require('webpack');

module.exports = {
    entry: './app/app.js',
    output: {
        filename: 'bundle.js'
    },
    module: {

        loaders: [{
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
                loader: 'url-loader'
            },
            { test: /.html$/, loader: 'ngtemplate!html' },
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.png$/, loader: 'file-loader' }
        ]
    }
};