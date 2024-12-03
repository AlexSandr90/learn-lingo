import css from './Form.module.scss';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '../Button/Button';
import { loginSchema } from '../../validation/authSchemes';
import Modal from '../Modal/Modal';
import { ModalTriggerProps } from '../../types/modalTriggerTypes';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../services/firebase';
import { useDispatch } from 'react-redux';
import { setTokens } from '../../redux/auth/slice';

interface LoginData {
  email: string;
  password: string;
}

const LoginForm: React.FC<ModalTriggerProps> = ({
  isModalOpen,
  setModalState,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({ resolver: yupResolver(loginSchema) });

  const dispatch = useDispatch();

  const onSubmit = async (data: LoginData) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      const user = userCredential.user;
      const idToken = await user.getIdToken();
      const refreshToken = user.refreshToken;

      dispatch(setTokens({ accessToken: idToken, refreshToken }));
      console.log('user logged in: ', user);
      setModalState(false);
    } catch (error) {
      console.log('Login error', error);
    }
  };

  const handleResetPassword = () => {};

  return (
    <Modal isOpen={isModalOpen} setState={setModalState}>
      <div className={css.formWrap}>
        <h2>Log In</h2>
        <p>
          Welcome back! Please enter your credentials to access your account and
          continue your search for an teacher.
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
          <input
            {...register('email', { required: 'Email is required' })}
            type="input"
            placeholder="Email"
            className={css.input}
          />
          {errors.email && <span>{errors.email.message}</span>}

          <input
            {...register('password', { required: 'Password is required' })}
            type="password"
            placeholder="Password"
            className={css.input}
          />
          {errors.password && <span>{errors.password.message}</span>}

          <Button type="submit" className={css.button}>
            Log In
          </Button>

          <Button onClick={handleResetPassword}>Reset password</Button>
        </form>
      </div>
    </Modal>
  );
};

export default LoginForm;
