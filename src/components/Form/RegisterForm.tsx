import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { ref, set } from 'firebase/database';

import css from './Form.module.scss';
import Modal from '../Modal/Modal';
import Button from '../Button/Button';
import { auth, database } from '../../utils/firebase';
import { registerSchema } from '../../validation/authSchemes';
import { ModalTriggerProps } from '../../types/modalTriggerTypes';

interface RegisterData {
  name: string;
  email: string;
  password: string;
}

const RegisterForm: React.FC<ModalTriggerProps> = ({
  isModalOpen,
  setModalState,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegisterData>({ resolver: yupResolver(registerSchema) });

  console.log('isRegisterModalOpen: ', isModalOpen);

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

      setModalState(false);
    } catch (error) {
      console.error('Error registration user: ', error);
    } finally {
      reset();
      setModalState(false);
    }
  };

  return (
    <Modal isOpen={isModalOpen} setState={setModalState}>
      <div className={css.formWrap}>
        <h2>Registration</h2>
        <p>
          Thank you for your interest in our platform! In order to register, we
          need some information. Please provide us with the following
          information
        </p>
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
      </div>
    </Modal>
  );
};

export default RegisterForm;
