import css from './TeachersPage.module.css';
import Filters from '../../components/Filters/Filters';
import Teacher from '../../components/Teacher/Teacher';

const TeachersPage = () => {
  return (
    <section className={css.teachers_block}>
      <Filters />
      <ul className={css.teachers_list}>
        <Teacher />
      </ul>
    </section>
  );
};

export default TeachersPage;
