const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    devtool: 'inline-source-map',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].bundle.js',
      publicPath: '/dist'
    },
    devServer: {
      contentBase: './dist',
      historyApiFallback: {
        index: path.join(__dirname, './src/index.js')
      }
    },
    resolve: {
      extensions: ['.js', '.jsx', '.json'],
      alias: {
        '@': path.join(__dirname, './src')
      }
    },
    module: {
      rules: [
        {
            test: /\.(scss|css)$/,
            exclude:/node_modules/,
            loaders: [
              'style-loader',
              'css-loader?modules',
              'sass-loader'
            ]
        },
        {
          test: /\.(js[x]?)$/,
          exclude:/node_modules/,
          loaders: [
            {
              loader: 'babel-loader',
              options: {
                presets:[
                  [
                    '@babel/preset-env',
                    {
                      'useBuiltIns': 'usage',
                      'debug': true
                    }
                  ],
                  '@babel/preset-react'
                ],
                'plugins': [
                  [
                    '@babel/plugin-transform-runtime',
                    {
                      'corejs': 3
                    }
                  ]
                ]
              // plugins:['transform-runtime', 'transform-decorators-legacy']
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
          template: path.join(__dirname, 'index.html'),
          filename: 'index.html',
          chunks:['main', 'node_modules_vendor', 'default_vendor', 'manifest']
      })
    ],
    optimization: {
      splitChunks:{
          cacheGroups: {
              vendors: {
                  test:/[\\/]node_modules[\\/]/,
                  chunks:'initial',
                  name: 'node_modules_vendor',
                  minChunks: 1,
                  priority:-10
              },
              default: {
                  chunks:'initial',
                  name: 'default_vendor',
                  minChunks: 2,
                  priority:-20
              }
          }
      },
      runtimeChunk: { name: 'manifest' }
    }
}