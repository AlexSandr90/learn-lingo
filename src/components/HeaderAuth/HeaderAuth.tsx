import css from './HeaderAuth.module.css';
import icons from '../../images/icons.svg';
import Button from '../Button/Button';
import { useState } from 'react';
import Modal from '../Modal/Modal';

const HeaderAuth = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(true);
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
        <div>LOGIN MODAL</div>
      </Modal>

      <Button className={css.register} aria-label="Registration">
        Registration
      </Button>
    </div>
  );
};

export default HeaderAuth;
