let webpack = require('webpack')
let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')

const ROOT_PATH = path.resolve(__dirname)
const APP_PATH = path.resolve(ROOT_PATH, 'app')
const BUILD_PATH = path.resolve(ROOT_PATH, 'build')

module.exports = {
    entry: {
        app: path.resolve(APP_PATH, 'index.js')
    },
    
    output: {
        filename: 'bundle.js',
        path: BUILD_PATH
    },
    
    module: {
        // 配置 preLoader，加入 eslint
        // preLoaders: [{
        //     test: '\.jsx?$',
        //     loaders: ['eslint'],
        //     include: APP_PATH
        // }],
        loaders: [{
            test: '\.js$',
            loader: 'babel',
            include: APP_PATH
        }]
    },
    
    // 配置 plugin
    plugins: [
      new HtmlWebpackPlugin({
          title: 'My first react app'
      })
    ],
    
    // 开启 dev source map
    devtool: 'eval-source-map',
    
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        // progress: true
    }
}