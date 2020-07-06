/* @flow */

import React from 'react';

import icomoonConfig from '../resources/font/icomoon/selection.json';


type Props = {
  name: string,
  size: number,
  className?: string,
};

type State = {
};

export default class Icon extends React.Component<Props, State> {
  getPath = (iconName: string) => {
    const icon = icomoonConfig.icons.find(icon => icon.properties.name === iconName);
  
    if (icon) {
      return icon.icon.paths.join(' ');
    } else {
      console.warn(`icon ${iconName} does not exist.`);
      return '';
    }
  }

  render() {
    const {
      name,
      size,
      className,
    } = this.props;

    return (
      <svg width={size} height={size} className={className} viewBox="0 0 1024 1024">
        <path d={this.getPath(name)}></path>
      </svg>
    )
  };
};