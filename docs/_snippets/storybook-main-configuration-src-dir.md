```js filename="./storybook/main.js" renderer="common" language="js" tabTitle="main-js"
module.exports = {
  stories: ['../src'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  core: {
    builder: 'webpack5'
  },
};
```