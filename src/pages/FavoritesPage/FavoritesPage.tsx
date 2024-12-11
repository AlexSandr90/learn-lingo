import { useSelector } from 'react-redux';
import css from './FavoritesPage.module.scss';
import { selectFavoritesTeachers } from '../../redux/favorites/selectors';
import TeacherCard from '../../components/TeacherCard/TeacherCard';

const FavoritesPage = () => {
  const favoriteTeachers = useSelector(selectFavoritesTeachers);

  return (
    <section className={css.favorites_block}>
      <ul className={css.teachers_list}>
        {favoriteTeachers &&
          favoriteTeachers.length > 0 &&
          favoriteTeachers.map((teacher) => (
            <TeacherCard
              teacher={teacher}
              key={`${teacher.name}_${teacher.surname}`}
            />
          ))}
      </ul>
    </section>
  );
};

export default FavoritesPage;
