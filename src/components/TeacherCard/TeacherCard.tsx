import React, { useState } from 'react';

import css from './TeacherCard.module.scss';
import { TeacherTypes } from '../../types/teacher';
import TeacherRates from '../TeacherRates/TeacherRates';
import Reviews from '../Reviews/Reviews';
import LangLevels from '../LangLevels/LangLevels';
import TeacherList from '../TeacherList/TeacherList';
import Button from '../Button/Button';
import BookTrialLessonForm from '../Form/BookTrialLessonForm';
import clsx from 'clsx';

interface TeacherCardProps {
  teacher: TeacherTypes;
}

const TeacherCard: React.FC<TeacherCardProps> = React.memo(({ teacher }) => {
  const {
    name,
    levels,
    surname,
    reviews,
    languages,
    conditions,
    avatar_url,
    experience,
    lesson_info,
  } = teacher;
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const [isReadMoreOpen, setIsReadMoreOpen] = useState(false);

  const handleReadMore = () => {
    setIsReadMoreOpen(true);
  };

  const handleBook = () => {
    setIsBookModalOpen(true);
  };
  return (
    <li
      className={clsx(
        'group p-6 border border-gray-200 rounded-lg bg-white transition-shadow duration-200 hover:shadow-md',
        css.teachers_item
      )}
    >
      <div className={css.avatar}>
        <img src={avatar_url} alt={name} className={css.teacher_img} />
      </div>

      <div className={css.teachers__info}>
        <TeacherRates {...teacher} />

        <div className={`flex-1 space-y-4 ${css.teacher__conditions}`}>
          <TeacherList
            languages={languages}
            lessonInfo={lesson_info}
            conditions={conditions}
          />

          {!isReadMoreOpen && (
            <Button className={css.read_more__btn} onClick={handleReadMore}>
              Read more
            </Button>
          )}

          {isReadMoreOpen && (
            <>
              <p className={css.teacher__cover_text}>{experience}</p>
              <Reviews reviews={reviews} />
            </>
          )}

          <LangLevels levels={levels} />

          {isReadMoreOpen && (
            <Button className={css.button} onClick={handleBook}>
              Book trial lesson
            </Button>
          )}

          {isBookModalOpen && (
            <BookTrialLessonForm
              fullName={`${name} ${surname}`}
              avatarUrl={avatar_url}
              isModalOpen={isBookModalOpen}
              setModalState={setIsBookModalOpen}
            />
          )}
        </div>
      </div>
    </li>
  );
});

export default TeacherCard;
