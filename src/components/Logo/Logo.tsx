import css from './Logo.module.css';
import icons from '../../images/icons.svg';

const Logo = () => {
  return (
    <a href="/" className={css.logo_block}>
      <svg className={css.logo}>
        <use href={`${icons}#logo`} />
      </svg>
      <span className={css.logo_text}>LearnLingo</span>
    </a>
  );
};

export default Logo;
