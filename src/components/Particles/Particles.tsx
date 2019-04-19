import merge from 'lodash.merge';
import React, { PureComponent } from 'react';
import { getParams } from '../../utils';

interface ParticlesProps {
  /**
   * Determines wheter to render Particles
   *
   * @default "particles-js"
   */
  id?: string;
  /**
   * Determines the configuration for Particles JS
   */
  params: any;
  /**
   * Determines the styles for the Particles container
   *
   * @default {}
   */
  style?: any;
  /**
   * Determines the width for the Particles container
   *
   * @default "auto"
   */
  width?: string;
  /**
   * Determines the height for the Particles container
   *
   * @default "100vh"
   */
  height?: string;
  /**
   * Determines a custom className to apply to Particles container
   */
  className?: string;
  /**
   * Determines if should merge values from params with lib defaults
   *
   * @default true
   */
  withDefaults?: boolean;
}

interface CustomWindow extends Window {
  particlesJS?: any;
  pJSDom?: Array<any>;
}

export class Particles extends PureComponent<ParticlesProps> {
  static displayName = 'Particles';

  static defaultProps = {
    style: {},
    width: 'auto',
    height: '100vh',
    id: 'particles-js',
    withDefaults: true,
  };

  componentDidMount() {
    require('particles.js');

    var w: CustomWindow = window;

    if ('particlesJS' in w) {
      w.particlesJS(this.props.id, this.getParticles());
    }
  }

  componentDidUpdate(prevProps) {
    var w: CustomWindow = window;

    if (
      'particlesJS' in w &&
      prevProps.id !== this.props.id &&
      prevProps.params !== this.props.params
    ) {
      w.particlesJS(this.props.id, this.getParticles());
    }
  }

  componentWillUnmount() {
    var w: CustomWindow = window;

    if ('pJSDom' in w && w.pJSDom instanceof Array && w.pJSDom.length > 0) {
      w.pJSDom.forEach(({ pJS }) => pJS && pJS.fn.vendors.destroypJS());
      w.pJSDom = [];
    }
  }

  render() {
    const { className, style, width, height, id } = this.props;

    return (
      <div
        id={id}
        className={className}
        style={{
          ...style,
          width: width,
          height: height,
        }}
      />
    );
  }

  getParticles = () => {
    if (this.props.withDefaults) {
      return merge({}, getParams(), this.props.params);
    } else {
      return this.props.params;
    }
  };
}

export default Particles;
