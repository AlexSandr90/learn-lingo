import React, { useState } from 'react';
import Dropdown from '../Dropdown/Dropdown';
import css from './PriceDropdown.module.scss';
import { priceOptions } from '../../utils/dropdownOptions';

const PriceDropdown: React.FC = () => {
  const [price, setPrice] = useState('30');

  const handlePriceSelect = (value: string) => {
    setPrice(value);
  };

  return (
    <Dropdown
      label="Price"
      options={priceOptions}
      selectedValue={price}
      onSelect={handlePriceSelect}
      containerClassName={css.price}
    />
  );
};

export default PriceDropdown;
