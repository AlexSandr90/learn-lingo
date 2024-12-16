import React, { useState } from 'react';
import Dropdown from '../Dropdown/Dropdown';
import css from './LanguageLevelDropdown.module.scss';
import { languageLevelOptions } from '../../utils/dropdownOptions';

const LanguageLevelDropdown: React.FC = () => {
  const [languageLevel, setLanguageLevel] = useState('A1 Beginner');

  const handleLanguageLevelSelect = (value: string) => {
    setLanguageLevel(value);
  };
  return (
    <Dropdown
      label="Level of knowledge"
      options={languageLevelOptions}
      selectedValue={languageLevel}
      onSelect={handleLanguageLevelSelect}
      containerClassName={css.level}
    />
  );
};

export default LanguageLevelDropdown;
