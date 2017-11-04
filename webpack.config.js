var path = require('path');

module.exports = [{
    context: path.join(__dirname, 'src', 'app'),
    entry: 'app',
    output: {
        path: path.join(__dirname, 'src', 'app'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.css$/, loader: 'style-loader' },
            { test: /\.css$/, loader: 'css-loader', query: { modules: true, localIdentName: '[name]__[local]__[hase:based64:5' }}
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: ['node_modules']
    }
}];