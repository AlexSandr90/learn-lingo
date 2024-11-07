import css from './NumberDisplay.module.css';

interface NumberDisplayProps {
  value: number;
  additionValue?: string;
  className?: string;
}

const NumberDisplay: React.FC<NumberDisplayProps> = ({
  value,
  additionValue = '',
  className,
}) => {
  const formattedValue = new Intl.NumberFormat('en-US').format(value);

  return (
    <span className={`${css.number} ${className || ''}`}>
      {formattedValue}
      {additionValue && ` ${additionValue}`}
    </span>
  );
};

export default NumberDisplay;
