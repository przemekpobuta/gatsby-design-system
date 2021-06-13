import React from 'react';

export interface ButtonProps {
  backgroundColor?: string;
  border?: string;
  color?: string;
  children?: React.ReactNode;
  height?: string;
  onClick?: () => void;
  radius?: string
  width?: string;
}

const initProps: ButtonProps = {
  border: '1px solid black',
  backgroundColor: '#3498db',
  color: 'white',
  height: '100px',
  radius: '1px',
  width: '250px'
}

export function Button(props = initProps) {
  return (
    <button 
      onClick={props.onClick}
      style={{
         backgroundColor: props.backgroundColor,
         border: props.border,
         color: props.color,
         borderRadius: props.radius,
         height: props.height,
         width: props.width
      }}
    >
      {props.children}
    </button>
  );
}

export default Button;