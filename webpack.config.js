module.exports = {
    entry: ['./index.js'],
    output: {
        path:'./',
        filename: 'index.js',
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