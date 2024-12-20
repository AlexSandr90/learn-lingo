import React from 'react';
import Dropdown from '../Dropdown/Dropdown';
import css from './PriceDropdown.module.scss';
import { priceOptions } from '../../utils/dropdownOptions';
import { DropdownProps } from '../../types/filterTypes';

const PriceDropdown: React.FC<DropdownProps> = ({
  selectedValue,
  onSelectValue,
}) => {
  const handlePriceSelect = (value: string) => {
    onSelectValue(value);
  };

  return (
    <Dropdown
      label="Price"
      options={priceOptions}
      selectedValue={selectedValue}
      onSelect={handlePriceSelect}
      containerClassName={css.price}
    />
  );
};

export default PriceDropdown;
