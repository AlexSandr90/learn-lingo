import React from 'react';
import Dropdown from '../Dropdown/Dropdown';
import css from './LanguageLevelDropdown.module.scss';
import { languageLevelOptions } from '../../utils/dropdownOptions';
import { DropdownProps } from '../../types/filterTypes';

const LanguageLevelDropdown: React.FC<DropdownProps> = ({
  selectedValue,
  onSelectValue,
}) => {
  const handleLanguageLevelSelect = (value: string) => {
    onSelectValue(value);
  };
  return (
    <Dropdown
      label="Level of knowledge"
      options={languageLevelOptions}
      selectedValue={selectedValue}
      onSelect={handleLanguageLevelSelect}
      containerClassName={css.level}
    />
  );
};

export default LanguageLevelDropdown;
