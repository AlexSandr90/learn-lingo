import css from './Teachers.module.css';
import Teacher from '../Teacher/Teacher';

const Teachers = () => {
  return (
    <ul className={css.teachers_list}>
      <Teacher />
    </ul>
  );
};

export default Teachers;
