const HtmlWebpackPlugin = require('html-webpack-plugin')
const cleanWebpackPlugin = require('clean-webpack-plugin')
module.exports = {
    entry: {
        a: './src/js/a.js',
        b: './src/js/b.js',
        c: './src/js/c.js'
    },
    output: {
        path: __dirname + '/dist',
        filename: './js/[name].bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Output Management',
            chunks: ['a'],
            template: './src/index.html',
            filename: 'index.html'
        }),
        new cleanWebpackPlugin(["dist"]),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ["babel-loader"],
                // 不检查node_modules下的js文件
                exclude: "/node_modules/"
            },
            // {
            //   test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
            //   loader: "url-loader?limit=8192"
            // },

            // {
            //   test: /\.png$/,
            //   loader: "file-loader?name=imgs/[name]-[hash].[ext]"
            // }
        ]
    }
}