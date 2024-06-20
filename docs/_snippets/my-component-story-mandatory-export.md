```js filename="MyComponent.story.js|jsx|ts|tsx" renderer="common" language="js"
import { MyComponent } from './MyComponent';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Path/To/MyComponent',
  component: MyComponent,
  decorators: [ ... ],
  parameters: { ... }
}
```