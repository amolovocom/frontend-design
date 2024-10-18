const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const glob = require('glob'); // For matching multiple files

module.exports = {
  mode: 'production', // Change to 'development' for non-minified output
  entry: [
    './src/global.scss', // Global SCSS file
    ...glob.sync('./src/components/**/*.scss'), // All SCSS files from components
  ],
  output: {
    path: path.resolve(__dirname, 'dist'), // Output folder
    filename: 'ignore.js', // Placeholder JS file
  },
  module: {
    rules: [
      {
        test: /\.scss$/, // Match SCSS files
        use: [
            MiniCssExtractPlugin.loader, // Change to style-loader for development
            'css-loader',
            {
              loader: 'sass-loader',
              options: {
                implementation: require('sass'), // Ensure sass is imported correctly
              },
            },
          ],
          
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.bundle.css', // Output bundled CSS file
    }),
  ],
  devtool: 'source-map', // Enable source maps for easier debugging
};
