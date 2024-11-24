import css from './Form.module.scss';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '../Button/Button';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, database } from '../../utils/firebase';
import { ref, set } from 'firebase/database';

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

interface RegisterProps {
  setIsRegisterModalOpen: (isOpen: boolean) => void;
  isLoginModalOpen: boolean;
}

const RegisterForm: React.FC<RegisterProps> = ({
  setIsRegisterModalOpen,
  isLoginModalOpen,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegisterData>({ resolver: yupResolver(schema) });

  console.log('isLoginModalOpen: ', isLoginModalOpen);

  const onSubmit = async (data: RegisterData) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      const userId = userCredential.user.uid;

      const saveData = set(ref(database, `users/${userId}`), {
        name: data.name,
        email: data.email,
      });

      const timeout = new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Timeout error')), 3000)
      );

      await Promise.race([saveData, timeout]);

      setIsRegisterModalOpen(false);
    } catch (error) {
      console.error('Error registration user: ', error);
    } finally {
      reset();
      setIsRegisterModalOpen(false);
    }
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
