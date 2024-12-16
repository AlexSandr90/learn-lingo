import LanguageDropdown from '../LanguageDropdown/LanguageDropdown';
import LanguageLevelDropdown from '../LanguageLevelDropdown/LanguageLevelDropdown';
import PriceDropdown from '../PriceDropdown/PriceDropdown';
import css from './Filters.module.css';

const Filters = () => {
  return (
    <div className={css.filters}>
      <LanguageDropdown />
      <LanguageLevelDropdown />
      <PriceDropdown />
    </div>
  );
};

export default Filters;
