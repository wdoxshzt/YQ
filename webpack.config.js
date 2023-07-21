
const path = require('path');
  module.exports = {
    mode: 'development',
  entry: './src/index.tsx', // 入口文件路径
  output: {
    path: path.resolve(__dirname, 'dist'), // 输出目录路径
    filename: 'bundle.js' // 输出文件名
  },
    module: {
        rules: [
          {
            test: /\.css|s[ac]ss$/i,
            use: [
              'style-loader',
              'css-loader',
              'sass-loader'
            ]
          },
          {
            test: /\.(ts|tsx)$/,
            exclude: /(node_modules)/,
            sideEffects: false,
            use: [
              {
                loader: 'babel-loader',
                // options:{
                //   presets: [
                //     [
                //       '@babel/preset-env',
                //       {
                //         targets: {
                //           esmodules: true,
                //         },
                //         modules: false,
    
                //       },
                //     ],
                //   ],
                // }
              },
              {
                loader: 'ts-loader',
    
              },
            ],
          },
        ]
      },
      resolve: {
        alias: {
          '@type': path.resolve(__dirname, './src/Type'),
          '@': path.resolve(__dirname, 'src/')
        }
      },
  }