import React from 'react';

import styles from './button.module.scss';

export enum ButtonColor {
  Primary = 'Primary',
  Secondary = 'Secondary',
  Tetriary = 'Tetriary' 
}

/* eslint-disable-next-line */
export interface ButtonProps {
  label: string;
  color: ButtonColor;
}

export function Button(props: ButtonProps) {
  return (
    <button className={ styles.button }>{props.label}</button>
  );
}

export default Button;
