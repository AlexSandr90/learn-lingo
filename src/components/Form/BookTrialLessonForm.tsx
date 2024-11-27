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
  reason:
    | 'Career and business'
    | 'Lesson for kids'
    | 'Living abroad'
    | 'Exams and coursework'
    | 'Culture, travel or hobby';
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
        <p className={css.bookParagraph}>
          Our experienced tutor will assess your current language level, discuss
          your learning goals, and tailor the lesson to your specific needs.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
        <div className={css.radioGroup}>
          <label className={css.radioLabel}>
            <input
              {...register('reason', { required: 'Reason is required' })}
              type="radio"
              value="Career and business"
              className={css.radioInput}
            />
            <span className={css.radioText}>Career and business</span>
          </label>
          <label className={css.radioLabel}>
            <input
              {...register('reason', { required: 'Reason is required' })}
              type="radio"
              value="Lesson for kids"
              className={css.radioInput}
            />
            <span className={css.radioText}>Lesson for kids</span>
          </label>
          <label className={css.radioLabel}>
            <input
              {...register('reason', { required: 'Reason is required' })}
              type="radio"
              value="Living abroad"
              className={css.radioInput}
            />
            <span className={css.radioText}>Living abroad</span>
          </label>
          <label className={css.radioLabel}>
            <input
              {...register('reason', { required: 'Reason is required' })}
              type="radio"
              value="Exams and coursework"
              className={css.radioInput}
            />
            <span className={css.radioText}>Exams and coursework</span>
          </label>
          <label className={css.radioLabel}>
            <input
              {...register('reason', { required: 'Reason is required' })}
              type="radio"
              value="Culture, travel or hobby"
              className={css.radioInput}
            />
            <span className={css.radioText}>Culture, travel or hobby</span>
          </label>
        </div>
        {errors.reason && <span>{errors.reason.message}</span>}

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
