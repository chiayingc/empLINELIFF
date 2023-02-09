const path =require('path');
module.exports ={
    mode:'development',
    entry:'./src/index.js'
    ,
    output:{
        filename:'bundle.js',
        path: path.resolve(__dirname, "./dist")
    },

    module:{
        rules: [
            //JSX編譯器.ES6編譯器
            { test: /.jsx$/, exclude: /node_modules/, use: { loader: 'babel-loader', options: { presets: ['@babel/preset-react','@babel/preset-env'] } } },
            { test: /.js$/, exclude: /node_modules/, use: { loader: 'babel-loader', options: { presets: ['@babel/preset-env'] } } },
            //css編譯器
            { test: /\.(sass|css|scss)$/, use: ['style-loader','css-loader',]}      
        ],
        
    },
    devServer:{
        port: 9000,
        static: "./dist",
        allowedHosts: ['all'],
        historyApiFallback: true,
    },
    devtool: 'inline-source-map'

};