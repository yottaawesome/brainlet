const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env, argv) => {
  // We need to set this manually due to https://github.com/webpack/webpack/issues/7074
  // Note that official documentation at https://webpack.js.org/configuration/mode/ states the following:
  //      Sets process.env.NODE_ENV on DefinePlugin to value production .
  // This is misleading, as printing the process.env.NODE_ENV variable out shows it is undefined,
  // causing the style-loader/minicssextractplugin rule to fail to behave as expected.
  const isDevelopment = (process.env.NODE_ENV = argv.mode) !== 'production';

  return {
    entry: './src/index.js',

    output: {
      path: path.resolve(__dirname, 'lib'),
      filename: 'index.js',
      library: 'brainlet', // https://webpack.js.org/guides/author-libraries/#expose-the-library
      libraryTarget: 'umd'
    },
    
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }
      ]
    },

    plugins: [
      new CleanWebpackPlugin()
    ],
  };
};
