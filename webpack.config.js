
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
          '@': path.resolve(__dirname, 'src'),
          '@components': path.resolve(__dirname, 'src/components'),
          '@models': path.resolve(__dirname, 'src/models'),
        }
      },
  }