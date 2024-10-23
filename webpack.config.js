const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js', // Точка входа для JS
  output: {
    filename: 'bundle.js', // Итоговый файл с собранным JS
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    assetModuleFilename: 'images/[name].[contenthash][ext]', // Путь для изображений
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/, // Правило для всех файлов с расширением .js
        exclude: /node_modules/, // Исключаем node_modules
        use: {
          loader: 'babel-loader', // Используем Babel для транспиляции
          options: {
            presets: ['@babel/preset-env'], // Пресет для современного JS
          },
        },
      },
      {
        test: /\.scss$/, // Обработка SCSS
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [
                path.resolve(__dirname, 'src/scss/**/*.scss'),
                path.resolve(__dirname, 'src/components/**/*.scss'),
              ],
            },
          },
        ],
      },
      {
        test: /\.pug$/, // Обработка Pug-файлов
        loader: 'pug-loader',
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i, // Обработка изображений
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    alias: {
      '@scss': path.resolve(__dirname, 'src/scss'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@images': path.resolve(__dirname, 'src/images'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.pug', // Шаблон для HTML
      filename: 'index.html',
      inject: true,
      minify: false,
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css', // Вывод итогового CSS
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
    open: true,
    hot: true,
    watchFiles: {
      paths: ['src/components/**/*.pug'],
      options: {
        usePolling: true,
      },
    },
  },
};
