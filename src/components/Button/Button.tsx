import css from './Button.module.scss';

const Button = ({
  children,
  className,
  onClick,
  ariaLabel,
  type = 'button',
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  ariaLabel?: string;
  type?: 'button' | 'submit' | 'reset';
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${css.button} ${className ? className : ''}`}
      aria-label={ariaLabel ? ariaLabel : 'button'}
    >
      {children}
    </button>
  );
};

export default Button;
