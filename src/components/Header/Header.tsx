import css from './Header.module.css';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import HeaderAuth from '../HeaderAuth/HeaderAuth';

const Header = () => {
  return (
    <header className={css.header}>
      <Logo />
      <Navigation />
      <HeaderAuth />
    </header>
  );
};

export default Header;
