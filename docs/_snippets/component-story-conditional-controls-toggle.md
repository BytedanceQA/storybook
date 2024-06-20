```js filename="Button.stories.js" renderer="common" language="js"
import { Button } from './Button';
export default {
  component: Button,
  title: 'Button',
  argTypes: {
    label: { control: 'text' }, // always shows
    advanced: { control: 'boolean' },
    // below are only included when advanced is true
    margin: { control: 'number', if: { arg: 'advanced' } },
    padding: { control: 'number', if: { arg: 'advanced' } },
    cornerRadius: { control: 'number', if: { arg: 'advanced' } },
  },
};
```
