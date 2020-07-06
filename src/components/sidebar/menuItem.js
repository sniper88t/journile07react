/* @flow */

import React from 'react';
import { Link } from 'react-router-dom';

import Icon from '../icon';


type Props = {
  link: string,
  icon: string,
  label: string,
  active?: boolean,
};

type State = {
};

export default class MenuItem extends React.Component<Props, State> {
  render() {
    const { link, icon, label, active } = this.props;
    return (
      <Link className={`menu-item ${active? "active": ""}`} to={link}>
        <div className="leftline" />
        <li>
          <Icon className="menu-icon" name={icon} size={34} />
          <span className="menu-label">{label}</span>
        </li>
      </Link>
    )
  };
};