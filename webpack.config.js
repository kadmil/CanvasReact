var webpack = require('webpack')

module.exports = {
    resolve: {
        extensions: ['', '.js', '.json', '.jsx']
    },
    entry: [
        'webpack-dev-server/client?http://localhost:8080', // WebpackDevServer host and port
        'webpack/hot/only-dev-server',
        './src/app' // Your appʼs entry point
    ],
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loaders: ['react-hot', 'babel?optional[]=runtime']
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader!postcss-loader'
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    postcss: {
        defaults: [require('postcss-import')(), require('postcss-mixins'), require('postcss-simple-vars'), require('postcss-calc')(), require('postcss-color-function')(), require('postcss-nested'), require('autoprefixer-core'), require('csswring')]
    }
};
