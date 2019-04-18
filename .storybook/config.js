import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { addDecorator, addParameters, configure } from '@storybook/react';
import { themes } from '@storybook/theming';

addParameters({
  options: {
    brandTitle: '@blackbox-vision/react-particles',
    theme: themes.light,
  },
});

addDecorator(withInfo({ inline: true, header: false }));
addDecorator(withKnobs);

const req = require.context('../stories', true, /.stories.tsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
