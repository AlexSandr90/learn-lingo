import css from './Form.module.scss';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '../Button/Button';

const schema = yup.object().shape({
  name: yup
    .string()
    .min(3, 'Name must be at least 6 characters')
    .required('Name is required'),
  email: yup
    .string()
    .email('Invalid email address')
    .required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

interface RegisterData {
  name: string;
  email: string;
  password: string;
}

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterData>({ resolver: yupResolver(schema) });

  const onSubmit = async (data: RegisterData) => {
    console.log('data: ', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
      <input
        {...register('name', { required: 'Name is required' })}
        type="input"
        placeholder="Name"
        className={css.input}
      />
      {errors.email && <span>{errors.email.message}</span>}

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
        Submit
      </Button>
    </form>
  );
};

export default RegisterForm;
