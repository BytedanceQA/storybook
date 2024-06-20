```md renderer="common" language="mdx"
{/* MyComponent.stories.mdx */}

import { Meta } from '@storybook/addon-docs';

<Meta title="A storybook story with syntax highlight registered globally" />

# SCSS example

This is a sample Sass snippet example with Storybook docs

{/* Don't forget to replace (") with (```) when you copy the snippet to your own app */}

"scss
$font-stack: Helvetica, sans-serif;
$primary-color: #333;

body {
font: 100% $font-stack;
  color: $primary-color;
}
"
```