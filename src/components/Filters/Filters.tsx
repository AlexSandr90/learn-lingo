import { useState } from 'react';
import LanguageDropdown from '../LanguageDropdown/LanguageDropdown';
import LanguageLevelDropdown from '../LanguageLevelDropdown/LanguageLevelDropdown';
import PriceDropdown from '../PriceDropdown/PriceDropdown';
import css from './Filters.module.css';

interface FilterTypes {
  language: string;
  level: string;
  price: string;
}

interface FiltersProps {
  onChangeFilters: (value: FilterTypes) => void;
}

const Filters: React.FC<FiltersProps> = ({ onChangeFilters }) => {
  const [filters, setFilters] = useState<FilterTypes>({
    language: '',
    level: '',
    price: '',
  });

  const handleChange = (name: string, value: string) => {
    const updateFilters = { ...filters, [name]: value };
    setFilters(updateFilters);
    onChangeFilters(updateFilters);

    console.log("filters: ", filters);
    
  };

  return (
    <div className={css.filters}>
      <LanguageDropdown
        selectedValue={filters.language}
        onSelectValue={(value: string) => handleChange('language', value)}
      />
      <LanguageLevelDropdown
        selectedValue={filters.level}
        onSelectValue={(value: string) => handleChange('level', value)}
      />
      <PriceDropdown
        selectedValue={filters.price}
        onSelectValue={(value: string) => handleChange('price', value)}
      />
    </div>
  );
};

export default Filters;
