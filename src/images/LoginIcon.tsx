import React from 'react';
import { SvgIconPropTypes } from '../types/SvgIconPropTypes';

const LoginIcon: React.FC<SvgIconPropTypes> = ({
  width = 32,
  height = 32,
  color1 = '#f4c550',
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
        fill="none"
        stroke={color1}
        style={{ stroke: `var(--color3, ${color1})` }}
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeMiterlimit="4"
        strokeWidth="3.2"
        d="M20 4h1.6c2.24 0 3.36 0 4.216 0.436 0.753 0.383 1.364 0.995 1.748 1.748 0.436 0.856 0.436 1.976 0.436 4.216v11.2c0 2.24 0 3.36-0.436 4.216-0.384 0.753-0.995 1.364-1.748 1.748-0.856 0.436-1.976 0.436-4.216 0.436h-1.6"
      />
      <path
        fill="none"
        stroke={color1}
        style={{ stroke: `var(--color3, ${color1})` }}
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeMiterlimit="4"
        strokeWidth="3.2"
        d="M13.333 9.333l6.667 6.667M20 16l-6.667 6.667M20 16h-16"
      />
    </svg>
  );
};

export default LoginIcon;
