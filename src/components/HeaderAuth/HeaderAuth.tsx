import css from './HeaderAuth.module.scss';
import icons from '../../images/icons.svg';
import Button from '../Button/Button';
import { useEffect, useState } from 'react';
import RegisterForm from '../Form/RegisterForm';
import LoginForm from '../Form/LoginForm';
import { auth } from '../../services/firebase';
import { signOut } from 'firebase/auth';
import { BiLogOut } from 'react-icons/bi';

const HeaderAuth = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [user, setUser] = useState<null | string>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser ? currentUser.email : null);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Failed to log out', error);
    }
  };

  return (
    <div className={css.auth}>
      {!user ? (
        <>
          <Button
            aria-label="Log in"
            className={css.login}
            onClick={() => setIsLoginModalOpen(true)}
          >
            <svg className={css.login_icon}>
              <use href={`${icons}#log-in`} />
            </svg>
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
            onClick={() => setIsRegisterModalOpen(true)}
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
  );
};

export default HeaderAuth;
