
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const HtmlCleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry://入口文件
    {
        main: './src/script/main.js',
        a: './src/script/a.js',
        b: './src/script/b.js',
        c: './src/script/c.js',

    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'script/[name].js',
        //publicPath:'http://cdn.com'//公共路径  eg: http://cdn.com/src/script/a.js
    },
    module:
    {
        rules:
            [
                {
                    // 只命中src目录里的js文件，加快 Webpack 搜索速度
                    include: path.resolve(__dirname, 'src'),
                    test: /\.js$/,
                    use: [{ loader: 'babel-loader' }],
                    // 排除 node_modules 目录下的文件
                    exclude: path.resolve(__dirname, 'node_modules'),
                },
                {
                    test: /\.css$/,
                    use: [
                      { loader: 'style-loader' },
                      {
                        loader: 'css-loader',
                        options: {
                          modules: true
                        }
                      }
                    ]
                  }
            ]
            
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'this is main.html',
            template: 'main.html',//html参照模板
            filename: 'main.html',//最终打包后的html文件名
            inject: "body",//插入到head部 否则 false
            // minify:{//压缩
            //     removeComments:true,//移除注释
            // },
            chunks: ['main'],//指定需要在当前html中加载的js
            //excludeChunks:['b','c'],//指定不包含js队列（与chunks相反）

        }),
        new HtmlWebpackPlugin({
            title: 'this is a.html',
            template: 'main.html',//html参照模板
            filename: 'a.html',//最终打包后的html文件名
            inject: 'head',//插入到head部 否则 false
            minify: {//压缩
                removeComments: true,//移除注释
            },
            chunks: ['a', 'main'],//指定需要在当前html中加载的js
            excludeChunks: ['b', 'c'],//指定不包含js队列（与chunks相反）

        }),
        new HtmlWebpackPlugin({
            title: 'this is b.html',
            template: 'main.html',//html参照模板
            filename: 'b.html',//最终打包后的html文件名
            inject: 'head',//插入到head部 否则 false
            minify: {//压缩
                removeComments: true,//移除注释
            },
            chunks: ['b', 'main'],//指定需要在当前html中加载的js
            excludeChunks: ['a', 'c'],//指定不包含js队列（与chunks相反）
        }),
        new HtmlWebpackPlugin({
            title: 'this is c.html',
            template: 'main.html',//html参照模板
            filename: 'c.html',//最终打包后的html文件名
            inject: 'head',//插入到head部 否则 false
            minify: {//压缩
                removeComments: true,//移除注释
            },
            chunks: ['c', 'main'],//指定需要在当前html中加载的js
            excludeChunks: ['a', 'b'],//指定不包含js队列（与chunks相反）
        })
    ],
}