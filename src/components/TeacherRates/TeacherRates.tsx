import { useSelector } from 'react-redux';
import { useAuthState } from 'react-firebase-hooks/auth';

import css from './TeacherRates.module.scss';
import { auth } from '../../services/firebase';
import { TeacherTypes } from '../../types/teacher';
import { toggleFavorite } from '../../redux/favorites/slice';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { selectFavoritesTeachers } from '../../redux/favorites/selectors';
import { showErrorToast } from '../../utils/errorMessages';
import BookOpenIcon from '../../images/BookOpenIcon';
import HeartIcon from '../../images/HeartIcon';
import StarIcon from '../../images/StarIcon';

const TeacherRates: React.FC<TeacherTypes> = (teacher) => {
  const { name, surname, lessons_done, rating, price_per_hour } = teacher;
  const dispatch = useAppDispatch();
  const favorites = useSelector(selectFavoritesTeachers);
  const [user] = useAuthState(auth);
  const uniqueKey = `${name}_${surname}`;

  const isFavorite = favorites.some(
    (teacherItem) => `${teacherItem.name}_${teacherItem.surname}` === uniqueKey
  );

  const handleFavoritesClick = () => {
    if (user) {
      dispatch(toggleFavorite({ ...teacher }));
    } else {
      showErrorToast(
        'Only authorized users can add teachers to their favorites'
      );
    }
  };

  return (
    <div className={css.teachers__info_stats}>
      <div className={css.teachers__info_lang}>
        <span className={css.teacher__language}>Languages</span>
        <span className={css.teacher__name}>
          {name} {surname}
        </span>
      </div>

      <div className={css.stats_block}>
        <ul className={css.teachers__rates}>
          <li className={`${css.teacher__rates_item} ${css.icon_item}`}>
            <BookOpenIcon className={`${css.svg_icon} ${css.book}`} />
            <span className={css.label}>Lessons online</span>
          </li>

          <li className={css.teacher__rates_item}>
            <span className={css.label}>Lessons done: {lessons_done}</span>
          </li>

          <li className={`${css.teacher__rates_item} ${css.icon_item}`}>
            <StarIcon className={css.svg_icon} />

            <span className={css.label}>Rating: {rating}</span>
          </li>

          <li className={css.teacher__rates_item}>
            <span className={css.label}>
              Price / 1 hour:{' '}
              <span className={css.price}>{price_per_hour}$</span>
            </span>
          </li>
        </ul>

        <HeartIcon
          className={`${css.heart} ${
            user && isFavorite ? css.heart_like : css.heart_regular
          }`}
          onClick={handleFavoritesClick}
        />
      </div>
    </div>
  );
};

export default TeacherRates;
