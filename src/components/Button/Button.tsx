import css from './Button.module.scss';

const Button = ({
  children,
  className,
  onClick,
  ariaLabel,
  type = 'button',
  disabled = false,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  ariaLabel?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}) => {
  return (
    <button
      type={type}
      onClick={(event) => onClick && onClick(event)}
      disabled={disabled}
      className={`${css.button} ${className ? className : ''}`}
      aria-label={ariaLabel ? ariaLabel : 'button'}
    >
      {children}
    </button>
  );
};

export default Button;
