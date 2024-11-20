import css from './Button.module.scss';

const Button = ({
  children,
  className,
  onClick,
  ariaLabel,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  ariaLabel?: string;
}) => {
  return (
    <button
      onClick={onClick}
      className={`${css.button} ${className ? className : ''}`}
      aria-label={ariaLabel ? ariaLabel : 'button'}
    >
      {children}
    </button>
  );
};

export default Button;
