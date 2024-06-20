```js filename="Button.stories.js" renderer="common" language="js"
import { Button } from './Button';
export default {
  component: Button,
  title: 'Button',
  argTypes: {
    // button can be passed a label or an image, not both
    label: {
      control: 'text',
      if: { arg: 'image', truthy: false },
    },
    image: {
      control: { type: 'select', options: ['foo.jpg', 'bar.jpg'] },
      if: { arg: 'label', truthy: false },
    },
  },
};
```
