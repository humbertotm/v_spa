var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: path.join(__dirname, 'dist/assets')
    },
    module: {
        loaders: [
            {
                test: /.js?$/,
                loader: 'babel-loader',
                include: path.join(__dirname, 'src'),
                exclude: path.join(__dirname, 'node_modules'),
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};
