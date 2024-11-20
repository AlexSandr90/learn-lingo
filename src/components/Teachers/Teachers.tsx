import css from './Teachers.module.css';
import { teachersData } from '../../mockDatas';
import { Fragment } from 'react/jsx-runtime';
import TeacherCard from '../TeacherCard/TeacherCard';
import { TeacherTypes } from '../../types/teacher';

const Teachers = () => {

  return (
    <ul className={css.teachers_list}>
      {teachersData.map((teacher: TeacherTypes, index: number) => {
        return (
          <Fragment key={index}>
            <TeacherCard {...teacher} />
          </Fragment>
        );
      })}
    </ul>
  );
};

export default Teachers;
