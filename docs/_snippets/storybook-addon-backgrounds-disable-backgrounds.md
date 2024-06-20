```js filename="Button.stories.js|jsx|ts|tsx" renderer="common" language="js"
import { Button } from './Button';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button',
  component: Button,
};

const Template = (args) => ({
  //👇 Your template goes here
});

export const Large = Template.bind({});
Large.parameters = {
  backgrounds: { disable: true },
};
```
```md renderer="common" language="mdx"
{/* Button.stories.mdx */}

import { Meta, Story } from '@storybook/addon-docs';

import { Button } from './Button';

<Meta title="Button" component={Button} />

export const Template = (args) => ({
   //👇 Your template goes here
});


<Story
  name="Large"
  parameters={{
    backgrounds: {
      disable: true,
    },
  }}>
  {Template.bind({})}
</Story>
```