import { action } from '@storybook/addon-actions';
import React from 'react';

import { Button, ButtonProps } from './button';

import type { Story, Meta } from '../../../.storybook/storybook';

export default {
  component: Button,
  title: 'Button',
  args: {
    onClick: action('clicked button'),
    onHover: action('hover on button'),
  },
  argTypes: {
    children: { name: 'Label', control: 'text', defaultValue: 'Text value' },
    backgroundColor: {
      name: 'Background color',
      control: 'color',
      defaultValue: '#3498db',
    },
    color: { name: 'Text color', control: 'color', defaultValue: '#ffffff' },
    height: { name: 'Height', control: 'number', defaultValue: 60 },
    width: { name: 'Width', control: 'number', defaultValue: 200 },
    radius: { name: 'Radius', control: 'number', defaultValue: 100 },
    border: {
      name: 'Border',
      control: 'text',
      defaultValue: '2px solid #2980b9',
    },
  },
} as Meta<ButtonProps>;

export const Default: Story<ButtonProps> = (props: ButtonProps) => (
  <Button {...props} />
);
