import merge from 'lodash.merge';
import React from 'react';
import { getParams } from '../../utils';

export interface ParticlesProps {
  id?: string;
  params: any;
  style?: any;
  width?: string;
  height?: string;
  className?: string;
  withDefaults?: boolean;
}

class Particles extends React.PureComponent<ParticlesProps> {
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

    if ('particlesJS' in window) {
      window.particlesJS(this.props.id, this.getParticles());
    }
  }

  componentDidUpdate(prevProps) {
    if (
      'particlesJS' in window &&
      prevProps.id !== this.props.id &&
      prevProps.params !== this.props.params
    ) {
      window.particlesJS(this.props.id, this.getParticles());
    }
  }

  componentWillUnmount() {
    if (
      'pJSDom' in window &&
      window.pJSDom instanceof Array &&
      window.pJSDom.length > 0
    ) {
      window.pJSDom.forEach(({ pJS }) => pJS && pJS.fn.vendors.destroypJS());
      window.pJSDom = [];
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
