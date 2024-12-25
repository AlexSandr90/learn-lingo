import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import css from './FavoritesPage.module.scss';
import { selectFavoritesTeachers } from '../../redux/favorites/selectors';
import TeacherCard from '../../components/TeacherCard/TeacherCard';

const FavoritesPage = () => {
  const favoriteTeachers = useSelector(selectFavoritesTeachers);

  return (
    <section className={css.favorites_block}>
      <h2 className={css.header}>Favorites</h2>
      <ul className={css.teachers_list}>
        {favoriteTeachers && favoriteTeachers.length === 0 ? (
          <p className={css.empty_favorites}>
            Oops! It looks like you haven&apos;t added any teachers to your
            favorites yet, so we can&apos;t display what isn&apos;t there. Add
            some favorites and come{' '}
            <Link to="/teachers" className={css.link}>
              back
            </Link>
          </p>
        ) : (
          favoriteTeachers.map((teacher) => (
            <TeacherCard
              teacher={teacher}
              key={`${teacher.name}_${teacher.surname}`}
            />
          ))
        )}
      </ul>
    </section>
  );
};

export default FavoritesPage;
