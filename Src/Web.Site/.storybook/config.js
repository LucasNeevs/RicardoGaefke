import { configure, addDecorator, addParameters } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

const req = require.context('../React/Components', true, /.stories.tsx$/);

function loadStories() {
  req.keys().forEach(req);
}

addDecorator(checkA11y);
addParameters({
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS,
    },
  },
});
configure(loadStories, module);
