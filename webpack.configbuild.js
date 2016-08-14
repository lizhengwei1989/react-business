module.exports = {
    entry: ['./components/main.js','./components/category/category.js','./components/category/menu.js','./components/search/search_all.js'],
    output: {
        path:'./',
        filename: 'aaa.js'
    },
    devServer: {
        inline: true,
        port: 7777
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/, 
                loader: 'style-loader!css-loader'
            },
            { 
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, 
                loader: 'url-loader?limit=8192&name=[path][name].[ext]'
            }
        ]
    }
}
