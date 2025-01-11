import { useState } from 'react';
import { AiOutlineMenu as HamburgerBtn } from 'react-icons/ai';

import css from './Header.module.css';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import HeaderAuth from '../HeaderAuth/HeaderAuth';
import MobileMenu from '../MobileMenu/MobileMenu.tsx';

const Header = () => {
  const [show, setShow] = useState(false);

  const handleToggleMobileMenu = () => {
    setShow(!show);
  };

  return (
    <header className={css.header}>
      <Logo/>
      <Navigation/>
      <HeaderAuth/>
      <MobileMenu
        show={show}
        setShow={handleToggleMobileMenu}
      />
      <HamburgerBtn
        onClick={handleToggleMobileMenu}
        className={css.hamburger}
      />
    </header>
  );
};

export default Header;
