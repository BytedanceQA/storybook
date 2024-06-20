```js filename="src/components/MyComponent.stories.js|jsx" renderer="common" language="js" tabTitle="csf3-story"
import { MyComponent } from './MyComponent';

/**
 * Story written in CSF 3.0 with auto title generation
 * See https://storybook.js.org/docs/7.0/react/api/csf
 * to learn more about it.
 */
export default { component: MyComponent };

export const Default = {
  args: { message: 'Hello world!' },
};
```