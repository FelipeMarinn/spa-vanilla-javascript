// configuracion de nuestro proyecto para pasar a build

const path = require('path') //permite aceder al alas carpetas del proyecto
const HtmlWebpackPlugin = require('html-webpack-plugin') // plugin html
const CopyWebpackPlugin = require("copy-webpack-plugin")

// configuracion
module.exports = {
    entry: './src/index.js', // punto de entrada del proyecto codigo inicial
    output: { // destino del proyecto compilado y listo para producion
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    resolve: { // extensiones que utilizaremos en el proyecto
        extensions: ['.js'],
    },
    module: { 
        rules: [ // reglas
            {
                test: /\.js?$/, //identificar archivos .js
                exclude: /node_modules/, // excluir archivos
                use: { // config para trabajar nuestro codigo
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [ // plugins a utilizar
        new HtmlWebpackPlugin(
            {
                inject: 'body', // ingresar un valor a un archivo html
                template: './public/index.html',
                filename: './index.html'
            }
        ),
        // new CopyPlugin({
        //     patterns: [
        //         { from: "./src/styles/styles.css", to: "" }
        //     ]
        //   })
        new CopyWebpackPlugin([{
            from: './src/styles/styles.css',
            to: ''
          }])
    ]

}
