# React Particles JS [![npm version](https://badge.fury.io/js/%40blackbox-vision%2Freact-particles.svg)](https://badge.fury.io/js/%40blackbox-vision%2Freact-particles) [![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT) [![Known Vulnerabilities](https://snyk.io/test/github/blackboxvision/react-particles/badge.svg)](https://snyk.io/test/github/blackboxvision/react-particles)

🎉Blazing fast ParticlesJS wrapper for ReactJS. Check out the [demo](https://blackboxvision.github.io/react-particles/).

## Install

You can install this library via NPM or YARN.

### NPM

```bash
npm i @blackbox-vision/react-particles
```

### YARN

```bash
yarn add @blackbox-vision/react-particles
```

## Usage

The usage is really simple:

```javascript
// App.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Particles } from '@blackbox-vision/react-particles';

const ParticlesJs = () => (
  <Particles
    id="simple"
    width="auto"
    height="100vh"
    style={{
      backgroundColor: 'blue',
    }}
    params={{
      particles: {
        number: {
          value: 50,
        },
        size: {
          value: 3,
        },
      },
      interactivity: {
        events: {
          onhover: {
            enable: true,
            mode: 'repulse',
          },
        },
      },
    }}
  />
);

ReactDOM.render(<ParticlesJs />, document.getElementById('root'));
```

## Props

`Particles` rely on the following props:

| Properties   | Types    | Default Value        | Description                                                                                                                                  |
| ------------ | -------- | -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| id           | string   | particles-js         | Determines wheter to render Particles.                                                                                                       |
| params       | object   | -----                | Determines the configuration for Particles JS.                                                                                               |
| style        | object   | {}                   | Determines the styles for the Particles container.                                                                                           |
| width        | string   | auto                 | Determines the width for the Particles container.                                                                                            |
| height       | string   | 100vh                | Determines the height for the Particles container.                                                                                           |
| className    | string   | -----                | Determines a custom className to apply to Particles container.                                                                               |
| withDefaults | boolean  | true                 | Determines if should merge values from params with lib defaults.                                                                             |

## Issues

Please, open an [issue](https://github.com/BlackBoxVision/react-particles/issues) following one of the issues templates. We will do our best to fix them.

## Contributing

If you want to contribute to this project see [contributing](https://github.com/BlackBoxVision/react-particles/blob/master/CONTRIBUTING.md) for more information.

## License

Distributed under the **MIT license**. See [LICENSE](https://github.com/BlackBoxVision/react-particles/blob/master/LICENSE) for more information.
