import React from 'react';
import { SvgIconPropTypes } from '../types/SvgIconPropTypes';

const HeartIcon: React.FC<SvgIconPropTypes> = ({
  width = 32,
  height = 32,
  className = '',
  onClick,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
    >
      <path
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeMiterlimit="4"
        strokeWidth="2.4615"
        d="M27.787 6.147c-0.681-0.681-1.49-1.222-2.379-1.591s-1.844-0.559-2.807-0.559-1.917 0.19-2.807 0.559c-0.89 0.369-1.699 0.909-2.38 1.591l-1.413 1.413-1.413-1.413c-1.376-1.376-3.241-2.148-5.187-2.148s-3.811 0.773-5.187 2.148c-1.376 1.376-2.148 3.241-2.148 5.187s0.773 3.811 2.148 5.187l11.787 11.787 11.787-11.787c0.681-0.681 1.222-1.49 1.591-2.379s0.559-1.844 0.559-2.807-0.19-1.917-0.559-2.807c-0.369-0.89-0.909-1.699-1.591-2.38z"
      />
    </svg>
  );
};

export default HeartIcon;
