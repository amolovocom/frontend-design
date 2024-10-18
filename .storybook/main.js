module.exports = {
  stories: ["../src/**/*.stories.[tj]s"],
  addons: [
    "@storybook/addon-postcss",
    "@storybook/addon-viewport/register",
    "@storybook/addon-a11y",
    "@storybook/addon-actions",
    "@storybook/addon-design-assets/register",
    "@storybook/addon-notes/register",
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          options: {
            implementation: require('sass'),
          },
        },
      ],
    });
    return config;
  },
};
