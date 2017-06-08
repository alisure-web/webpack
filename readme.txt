学习webpack
2017-06-08 16:59:17

1.安装:
    全局安装：
        npm install webpack -g
    package.json依赖(创建模块，安装依赖)：
        npm init
        npm install webpack --save-dev

2.创建package.json文件
    npm init

3.安装到项目目录:
    npm install --save-dev webpack

4.编写简单的DEMO

5.运行
    webpack src/main.js public/bundle.js

6.创建配置文件：
    webpack.config.js

7.运行配置文件
    webpack

8.替换命令
    在package.json中对npm的脚本部分进行相关设置:
    "scripts": {
        "start": "webpack"
    }

9.生成Source Maps（使调试更容易）
    四种配置：
        .devtool: 'source-map'
            在一个单独的文件中产生一个完整且功能完全的文件。
        devtool: 'cheap-module-source-map'
            在一个单独的文件中生成一个不带列映射的map。
        devtool: 'eval-source-map'
            使用eval打包源文件模块，在同一个文件中生成干净的完整的source map。
        devtool: 'cheap-module-eval-source-map'
            这是在打包文件时最快的生成source map的方法，
            生成的Source Map 会和打包后的JavaScript文件同行显示，没有列映射。

10. Loaders
    使用例子：转换loader
        1.安装：
            npm install --save-dev json-loader
        2.配置：
            module: {
                loaders: [
                    {
                        test: /\.json$/,
                        loader: "json-loader"
                    }
                ]
            }
        3.创建 .json 文件
        4.更改 greeter.js
        5.运行 npm start

11.CSS
    css-loader style-loader
        0.作用：
            css-loader 会遍历 CSS 文件，然后找到 url() 表达式然后处理他们，
            style-loader 会把原来的 CSS 代码插入页面中的一个 style 标签中。
        1.安装：
            npm install css-loader style-loader
        2.配置：
            module: {
                loaders: [
                    {
                        test: /\.css$/,
                        loader: "style-loader!css-loader"
                    }
                ]
            }
        3.创建 css 文件:
            css/style.css
        4.更改 greeter.js:
            require("./css/style.css")
        5.运行 npm start

12.CSS模块
