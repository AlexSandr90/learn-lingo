import React from 'react';
import Dropdown from '../Dropdown/Dropdown';
import css from './LanguageDropdown.module.scss';
import { languageOptions } from '../../utils/dropdownOptions';
import { DropdownProps } from '../../types/filterTypes';

const LanguageDropdown: React.FC<DropdownProps> = ({
  selectedValue,
  onSelectValue,
}) => {
  const handleLanguageSelect = (value: string) => {
    onSelectValue(value);
  };
  return (
    <Dropdown
      label="Language"
      options={languageOptions}
      selectedValue={selectedValue}
      onSelect={handleLanguageSelect}
      containerClassName={css.lang}
    />
  );
};

export default LanguageDropdown;
