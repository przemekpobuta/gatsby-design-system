import { color, number, text } from '@storybook/addon-knobs';
import React from 'react';

import { Button, ButtonProps } from './button';

export default {
  component: Button,
  title: 'Button'
};

export const Simple = () => {
  
  const props: ButtonProps = {
    border: text('Border', '2px solid #2980b9'),
    backgroundColor: color('Background color', '#3498db'),
    color: color('Color', 'white'),
    height: number('Height [px]', 60) + 'px',
    radius: number('Radius [px]', 10) + 'px',
    width: number('Width [px]', 200) + 'px',
    children: text('Label', 'Text label'),
    onClick: () => console.log('Clicked!'),
  };

  return <Button 
    border = {props.border}
    color = {props.color}
    backgroundColor = {props.backgroundColor}
    children = {props.children}
    height = {props.height}
    onClick = {props.onClick}
    radius = {props.radius}
    width = {props.width} />;
};