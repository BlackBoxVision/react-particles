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
}

// TODO: try to review how to make a deep-merge correctly
class Particles extends React.PureComponent<ParticlesProps> {
  static displayName = 'Particles';

  static defaultProps = {
    style: {},
    width: 'auto',
    height: '100vh',
    id: 'particles-js',
  };

  componentDidMount() {
    require('particles.js');

    if ('particlesJS' in window) {
      window.particlesJS(
        this.props.id,
        merge({}, getParams(), this.props.params)
      );
    }
  }

  componentDidUpdate(prevProps) {
    if (
      'particlesJS' in window &&
      prevProps.id !== this.props.id &&
      prevProps.params !== this.props.params
    ) {
      window.particlesJS(
        this.props.id,
        merge({}, getParams(), this.props.params)
      );
    }
  }

  componentWillUnmount() {
    if (window.pJSDom instanceof Array && window.pJSDom.length > 0) {
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
}

export default Particles;
