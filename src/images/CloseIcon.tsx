import React from 'react';
import { SvgIconPropTypes } from '../types/SvgIconPropTypes';

const CloseIcon: React.FC<SvgIconPropTypes> = ({
  width = 32,
  height = 32,
  color1 = '#121417',
  className = '',
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M24 8L8 24"
        stroke={color1}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 8L24 24"
        stroke={color1}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CloseIcon;
