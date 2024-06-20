```js filename="List.stories.js|jsx" renderer="react" language="js"
import React from 'react';

import { List } from './List';

//👇 Instead of importing ListItem, we import the stories
import { Unchecked } from './ListItem.stories';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'List',
  component: List,
};

const Template = (args) => <List {...args} />;

export const OneItem = Template.bind({});
OneItem.args = {
  children: <Unchecked {...Unchecked.args} />,
};
```
```ts filename="List.stories.ts|tsx" renderer="react" language="ts"
import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { List } from './List';

//👇 Instead of importing ListItem, we import the stories
import { Unchecked } from './ListItem.stories';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'List',
  component: List,
} as ComponentMeta<typeof List>;

const Template: ComponentStory<typeof List> = (args) => <List {...args} />;

export const OneItem = Template.bind({});
OneItem.args = {
  children: <Unchecked {...Unchecked.args} />,
};
```