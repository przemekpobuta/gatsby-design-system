import React from 'react';

// export enum ButtonColor {
//   Primary = 'Primary',
//   Secondary = 'Secondary',
//   Tetriary = 'Tetriary' 
// }

/* eslint-disable-next-line */
export interface ButtonProps {
  border: string;
  color: string;
  children?: React.ReactNode;
  height: string;
  onClick: () => void;
  radius: string
  width: string;
}

export function Button(props: ButtonProps) {
  return (
    <button 
      onClick={props.onClick}
      style={{
         backgroundColor: props.color,
         border: props.border,
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