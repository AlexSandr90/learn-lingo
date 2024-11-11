import css from './NumberDisplay.module.css';

interface NumberDisplayProps {
  value: number;
  numberFormat?: string;
  additionValue?: string;
  className?: string;
}

const NumberDisplay: React.FC<NumberDisplayProps> = ({
  value,
  numberFormat = 'en-US',
  additionValue = '',
  className,
}) => {
  const formattedValue = new Intl.NumberFormat(numberFormat).format(value);

  return (
    <span className={`${css.number} ${className || ''}`}>
      {formattedValue}
      {additionValue && ` ${additionValue}`}
    </span>
  );
};

export default NumberDisplay;
