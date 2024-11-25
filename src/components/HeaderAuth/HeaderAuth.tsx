import css from './HeaderAuth.module.scss';
import icons from '../../images/icons.svg';
import Button from '../Button/Button';
import { useEffect, useState } from 'react';
import RegisterForm from '../Form/RegisterForm';
import LoginForm from '../Form/LoginForm';

const HeaderAuth = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  useEffect(() => {
    console.log('isOpen: ', isRegisterModalOpen);
  }, [isRegisterModalOpen]);

  return (
    <div className={css.auth}>
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

      <LoginForm
        isModalOpen={isLoginModalOpen}
        setModalState={setIsLoginModalOpen}
      />

      <Button
        className={css.register}
        aria-label="Registration"
        onClick={() => setIsRegisterModalOpen(true)}
      >
        Registration
      </Button>

      <RegisterForm
        isModalOpen={isRegisterModalOpen}
        setModalState={setIsRegisterModalOpen}
      />
    </div>
  );
};

export default HeaderAuth;
