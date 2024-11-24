import css from './Form.module.scss';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '../Button/Button';

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email address')
    .required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

interface LoginData {
  email: string;
  password: string;
}

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({ resolver: yupResolver(schema) });

  const onSubmit = async (data: LoginData) => {
    console.log('Login data:', data);
  };

  const handleResetPassword = () => {
    console.log('Reset password clicked');
    // Тут можна додати функціонал для скидання пароля
  };

  return (
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
  );
};

export default LoginForm;
