import React from 'react';

export interface ButtonProps {
  backgroundColor?: string;
  border?: string;
  color?: string;
  children?: React.ReactNode;
  height?: number;
  onClick?: () => void;
  radius?: number;
  width?: number;
}

const initProps: ButtonProps = {
  border: '1px solid black',
  backgroundColor: '#3498db',
  color: 'white',
  height: 100,
  radius: 1,
  width: 250,
};

export function Button(props = initProps) {
  return (
    <button
      onClick={props.onClick}
      style={{
        backgroundColor: props.backgroundColor,
        border: props.border,
        color: props.color,
        borderRadius: props.radius + 'px',
        height: props.height + 'px',
        width: props.width + 'px',
      }}
    >
      {props.children}
    </button>
  );
}

export default Button;
