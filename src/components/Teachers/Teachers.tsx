import css from './Teachers.module.css';
import { Fragment } from 'react/jsx-runtime';
import TeacherCard from '../TeacherCard/TeacherCard';
import { TeacherTypes } from '../../types/teacher';

interface TeachersProps {
  teachers: TeacherTypes[];
}

const Teachers: React.FC<TeachersProps> = ({ teachers }) => {
  return (
    <ul className={css.teachers_list}>
      {teachers.map((teacher: TeacherTypes, index: number) => {
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
