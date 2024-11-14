import css from './TeachersPage.module.css';
import Filters from '../../components/Filters/Filters';
import Teachers from '../../components/Teachers/Teachers';

const TeachersPage = () => {
  return (
    <section className={css.teachers_block}>
      <Filters />
      <Teachers />
    </section>
  );
};

export default TeachersPage;
