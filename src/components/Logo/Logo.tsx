import css from './Logo.module.scss';
import LogoIcon from '../../images/LogoIcon';

const Logo = () => {
  return (
    <a href="/" className={css.logo_block}>
      <LogoIcon className={css.logo} />
      <span className={css.logo_text}>LearnLingo</span>
    </a>
  );
};

export default Logo;
