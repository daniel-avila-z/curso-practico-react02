const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
    clean: true
  },
  devtool: 'source-map', // para que no salga una advertencia en la consola de google
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@components': path.resolve(__dirname, 'src/components/'),
      '@containers': path.resolve(__dirname, 'src/containers/'),
      '@pages': path.resolve(__dirname, 'src/pages/'),
      '@styles': path.resolve(__dirname, 'src/styles/'),
      '@icons': path.resolve(__dirname, 'src/assets/icons/'),
      '@logos': path.resolve(__dirname, 'src/assets/logos/'),
      '@routes': path.resolve(__dirname, 'src/routes/'),
      '@images': path.resolve(__dirname, 'src/assets/images/'),
      '@hooks': path.resolve(__dirname, 'src/hooks/'),
      '@context': path.resolve(__dirname, 'src/context/')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/, // extensiones html
        use: [
          {
            loader: 'html-loader' // loader a usar
          }
        ]
      },
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      // {
      //   test: /\.(png|jp(e*)g|svg|gif)$/,
      // eslint-disable-next-line no-tabs
      // 	type: 'asset'
      // },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[hash]-[name].[ext]'
            }
          }
        ]
      }
      //  {test: /\.(png|jp(e*)g|svg|gif)$/,
      //     use: [
      //       {
      //         loader: "file-loader",
      //         options: {
      //           name: "images/[hash]-[name].[ext]",
      //         },
      //       },
      //     ]
      //   }
      // {
      //   test: /\.scss$/,
      //   use: [
      //     MiniCssExtractPlugin.loader,
      //     'css-loader',
      //     'sass-loader'
      //   ]
      // },
      // {
      //   test: /\.svg$/,
      //   use: 'file-loader'
      // },
      // {
      //   test: /\.png$/,
      //   use: [
      //     {
      //       loader: 'url-loader',
      //       options: {
      //         mimetype: 'image/png'
      //       }
      //     }
      //   ]
      // }
    ]
  },
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, 'public')
    },
    compress: true,
    port: 9000
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: './public/index.html',
      filename: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
    // new BundleAnalyzerPlugin({
    //   analyzerMode: 'static',
    //   openAnalyzer: false,
    // }),
  ]
}

// const path = require('path'); //path del proyecto principal
// const HtmlWebpackPlugin = require('html-webpack-plugin'); //traemos el plugin
// //de html

// module.exports = {
//     entry: './src/index.js', // punto de entrada
//     output: { // lugar al que saldrán todos los archivos
//         path: path.resolve(__dirname, 'dist'), //en nuestro path, crea la carpeta dist
//         filename: 'bundle.js' // nombre del archivo js resultante
//     },
//     resolve: { // extensión de archivos a tomar en cuenta
//         extensions: ['.js', '.jsx']
//     },
//     module: { // loaders para cada tipo de archivo
//         rules: [ // reglas para usar
//             {
//                 test: /\.(js|jsx)$/, // extensiones en las cuales actuará babel
//                 exclude: /node_modules/, // siempre excluir node modules
//                 use: { // indicamos el loader
//                     loader: 'babel-loader' // babel
//                 }
//             },
//             {
//                 test: /\.html$/, // extensiones html
//                 use: [
//                     {
//                         loader: 'html-loader' // loader a usar
//                     }
//                 ]
//             }
//         ]
//     },
//     plugins: [ // plugins
//         new HtmlWebpackPlugin({ // instanciamos el plugin para html
//             template: './public/index.html', // archivo raíz a transformar
//             filename: './index.html' // el archivo resultante
//         })
//     ]
// }
