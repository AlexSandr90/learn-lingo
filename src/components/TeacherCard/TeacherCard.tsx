import React from 'react';
import { TeacherTypes } from '../../types/teacher';
import TeacherRates from '../TeacherRates/TeacherRates';
import css from './TeacherCard.module.scss';
import Reviews from '../Reviews/Reviews';
import LangLevels from '../LangLevels/LangLevels';
import TeacherList from '../TeacherList/TeacherList';
import Button from '../Button/Button';

const TeacherCard: React.FC<TeacherTypes> = ({
  name,
  rating,
  levels,
  surname,
  reviews,
  languages,
  conditions,
  avatar_url,
  experience,
  lesson_info,
  price_per_hour,
  lessons_done,
}) => {
  return (
    <li
      className={`group p-6 border border-gray-200 rounded-lg bg-white transition-shadow duration-200 hover:shadow-md ${css.teachers_item}`}
    >
      <div className={css.avatar}>
        <img src={avatar_url} alt={name} className={css.teacher_img} />
      </div>

      <div className={css.teachers__info}>
        <TeacherRates
          name={name}
          price={price_per_hour}
          rating={rating}
          surname={surname}
          lessonsDone={lessons_done}
        />

        <div className={`flex-1 space-y-4 ${css.teacher__conditions}`}>
          <TeacherList
            languages={languages}
            lessonInfo={lesson_info}
            conditions={conditions}
            experience={experience}
          />

          <Reviews reviews={reviews} />

          <LangLevels levels={levels} />

          <div className="border-t border-gray-200 my-4" />

          <Button className={css.button}>Book trial lesson</Button>
        </div>
      </div>
    </li>
  );
};

export default TeacherCard;