const path =require('path');
const fs = require('fs');

module.exports ={
    // mode:'production',
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
        // port: 443,
        // host: "xxx.xxx.xxx.xxx",
        static: "./dist",
        allowedHosts: ['all'],
        historyApiFallback: true,

        
        // https:true

        // https: {
        //     key: fs.readFileSync('./dist/ssl/private.pem'),
        //     cert: fs.readFileSync('./dist/ssl/certificate.pem'),
        //     ca: fs.readFileSync('./dist/ssl/ca_bundle.pem')
        // }
    },
    devtool: 'inline-source-map'

};