import React, { useState } from 'react';
import Dropdown from '../Dropdown/Dropdown';
import css from './LanguageDropdown.module.scss';
import { languageOptions } from '../../utils/dropdownOptions';

const LanguageDropdown: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('French');

  const handleLanguageSelect = (value: string) => {
    setSelectedLanguage(value);
  };
  return (
    <Dropdown
      label="Language"
      options={languageOptions}
      selectedValue={selectedLanguage}
      onSelect={handleLanguageSelect}
      containerClassName={css.lang}
    />
  );
};

export default LanguageDropdown;
