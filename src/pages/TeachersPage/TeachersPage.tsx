import css from './TeachersPage.module.scss';
import Filters from '../../components/Filters/Filters';
import Teachers from '../../components/Teachers/Teachers';
import Button from '../../components/Button/Button';

const TeachersPage = () => {
  return (
    <section className={css.teachers_block}>
      <Filters />
      <Teachers />
      <Button className={css.button}>Load more</Button>
    </section>
  );
};

export default TeachersPage;
