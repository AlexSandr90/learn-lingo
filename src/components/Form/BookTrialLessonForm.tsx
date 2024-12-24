import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ModalTriggerProps } from '../../types/modalTriggerTypes';
import Modal from '../Modal/Modal';
import css from './Form.module.scss';
import { bookTrialSchema } from '../../validation/authSchemes';
import Button from '../Button/Button';
import { saveBooking } from '../../services/firebaseService';

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

interface ModalTeacherProps {
  avatarUrl: string;
  fullName: string;
}

const BookTrialLessonForm: React.FC<ModalTriggerProps & ModalTeacherProps> = ({
  fullName,
  avatarUrl,
  isModalOpen,
  setModalState,
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookTrialData>({ resolver: yupResolver(bookTrialSchema) });

  const onSubmit = async (data: BookTrialData) => {
    setIsSubmitting(true);
    const bookingData = {
      ...data,
      teacher: { fullName, avatarUrl },
      createdAt: new Date().toISOString(),
    };

    const bookingId = `${fullName} ${Date.now()}`;

    saveBooking(bookingId, bookingData)
      .then(() => {
        setModalState(false);
      })
      .catch((error) => {
        console.error('Error during booking process:', error);
        setIsSubmitting(false);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <Modal isOpen={isModalOpen} setState={setModalState}>
      <div className={css.formWrap}>
        <h2>Book trial lesson</h2>
        <p className={css.bookParagraph}>
          Our experienced tutor will assess your current language level, discuss
          your learning goals, and tailor the lesson to your specific needs.
        </p>
      </div>

      <div className={css.teacher}>
        <img src={avatarUrl} alt={fullName} className={css.teacherImg} />
        <div className={css.teacherInfo}>
          <span className={css.teacherLabel}>Your teacher</span>
          <span className={css.teacherName}>{fullName}</span>
        </div>
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

        <Button type="submit" disabled={isSubmitting} className={css.button}>
          {isSubmitting ? 'Booking...' : 'Book'}
        </Button>
      </form>
    </Modal>
  );
};

export default BookTrialLessonForm;
