import { withInfo } from '@storybook/addon-info';
import { addDecorator, addParameters, configure } from '@storybook/react';
import { themes } from '@storybook/theming';

addParameters({
  options: {
    name: 'React ParticlesJS',
    theme: themes.light,
    showAddonPanel: false,
    addonPanelInRight: true,
  },
});

addDecorator(withInfo({ inline: false, header: false }));

const req = require.context('../stories', true, /.stories.tsx$/);
const loadStories = () => req.keys().forEach(filename => req(filename));

configure(loadStories, module);
