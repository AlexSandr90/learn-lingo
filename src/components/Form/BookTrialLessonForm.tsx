import { useForm } from 'react-hook-form';
import { ModalTriggerProps } from '../../types/modalTriggerTypes';
import Modal from '../Modal/Modal';
import css from './Form.module.scss';
import { yupResolver } from '@hookform/resolvers/yup';
import { bookTrialSchema } from '../../validation/authSchemes';
import Button from '../Button/Button';

interface BookTrialData {
  name: string;
  email: string;
  phone: string;
}

const BookTrialLessonForm: React.FC<ModalTriggerProps> = ({
  isModalOpen,
  setModalState,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookTrialData>({ resolver: yupResolver(bookTrialSchema) });
  const onSubmit = () => {};
  return (
    <Modal isOpen={isModalOpen} setState={setModalState}>
      <div className={css.formWrap}>
        <h2>Book trial lesson</h2>
        <p>
          Our experienced tutor will assess your current language level, discuss
          your learning goals, and tailor the lesson to your specific needs.
        </p>
      </div>

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
          {...register('phone', { required: 'Phone number is required' })}
          type="string"
          placeholder="Phone Number"
          className={css.input}
        />
        {errors.phone && <span>{errors.phone.message}</span>}

        <Button type="submit" className={css.button}>
          Book
        </Button>
      </form>
    </Modal>
  );
};

export default BookTrialLessonForm;
