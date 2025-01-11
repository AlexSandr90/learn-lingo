import React, { useEffect, useState } from 'react';

import clsx from 'clsx';
import { AiOutlineClose } from 'react-icons/ai';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import { BiLogOut } from 'react-icons/bi';

import { auth } from '../../services/firebase';
import css from './MobileMenu.module.scss';
import Button from '../Button/Button';
import LoginIcon from '../../images/LoginIcon';
import LoginForm from '../Form/LoginForm';
import RegisterForm from '../Form/RegisterForm';

export interface MobileMenuProps {
  show: boolean;
  setShow: () => void;
}

const getClassName = ({ isActive }: { isActive: boolean }) => {
  return clsx(css.link, isActive && css.active);
};

const MobileMenu: React.FC<MobileMenuProps> = ({ show, setShow }) => {
  const [isAuth] = useAuthState(auth);
  const [user, setUser] = useState<null | string>(null);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser ? currentUser.email : null);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error('Failed to log out', error);
    }
  };

  const handleLoginModalOpen = () => {
    setIsLoginModalOpen(true);
    setShow();
  };

  const handleRegistrationModalOpen = () => {
    setIsRegisterModalOpen(true);
    setShow();
  };

  return (
    <div className={`${css.mobileMenu} ${show && css.show}`}>
      <AiOutlineClose onClick={setShow} className={css.closeBtn} />
      <div className={css.menu}>
        <nav className={css.mobileNavigation}>
          <li>
            <NavLink className={getClassName} to={'/'} onClick={setShow}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={getClassName}
              to={'/teachers'}
              onClick={setShow}
            >
              Teachers
            </NavLink>
          </li>
          <li>
            {isAuth && (
              <NavLink
                className={getClassName}
                to={'/favorites'}
                onClick={setShow}
              >
                Favorite
              </NavLink>
            )}
          </li>
        </nav>

        <div className={css.mobileAuth}>
          {!user ? (
            <>
              <Button
                aria-label="Log in"
                className={css.login}
                onClick={handleLoginModalOpen}
              >
                <LoginIcon className={css.login_icon} />
                Log in
              </Button>

              {isLoginModalOpen && (
                <LoginForm
                  isModalOpen={isLoginModalOpen}
                  setModalState={setIsLoginModalOpen}
                />
              )}

              <Button
                className={css.register}
                aria-label="Registration"
                onClick={handleRegistrationModalOpen}
              >
                Registration
              </Button>

              {isRegisterModalOpen && (
                <RegisterForm
                  isModalOpen={isRegisterModalOpen}
                  setModalState={setIsRegisterModalOpen}
                />
              )}
            </>
          ) : (
            <Button
              aria-label="Log out"
              className={css.login}
              onClick={handleLogout}
            >
              <BiLogOut className={`${css.login_icon} ${css.logout}`} />
              Log out
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
