import React from 'react';

type LogoIconProps = {
  width?: number;
  height?: number;
  color1?: string;
  color2?: string;
  className?: string;
};

const LogoIcon: React.FC<LogoIconProps> = ({
  width = 32,
  height = 32,
  color1 = '#ffda44',
  color2 = '#338af3',
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
        fill={color1}
        style={{ fill: `var(--color1, ${color1})` }}
        d="M16 32c8.837 0 16-7.163 16-16s-7.163-16-16-16c-8.837 0-16 7.163-16 16s7.163 16 16 16z"
      />
      <path
        fill={color2}
        style={{ fill: `var(--color2, ${color2})` }}
        d="M0 16c0-8.836 7.163-16 16-16s16 7.163 16 16z"
      />
    </svg>
  );
};

export default LogoIcon;
