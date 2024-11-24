import css from './HeaderAuth.module.scss';
import icons from '../../images/icons.svg';
import Button from '../Button/Button';
import { useState } from 'react';
import Modal from '../Modal/Modal';
import RegisterForm from '../Form/RegisterForm';
import LoginForm from '../Form/LoginForm';

const HeaderAuth = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
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

      <Modal isOpen={isLoginModalOpen} setState={setIsLoginModalOpen}>
        <div className={css.formWrap}>
          <h2>Log In</h2>
          <p>
            Welcome back! Please enter your credentials to access your account
            and continue your search for an teacher.
          </p>
          <LoginForm />
        </div>
      </Modal>

      <Button
        className={css.register}
        aria-label="Registration"
        onClick={() => setIsRegisterModalOpen(true)}
      >
        Registration
      </Button>

      <Modal isOpen={isRegisterModalOpen} setState={setIsRegisterModalOpen}>
        <div className={css.formWrap}>
          <h2>Registration</h2>
          <p>
            Thank you for your interest in our platform! In order to register,
            we need some information. Please provide us with the following
            information
          </p>
          <RegisterForm />
        </div>
      </Modal>
    </div>
  );
};

export default HeaderAuth;
