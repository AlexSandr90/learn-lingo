import icons from '../../images/icons.svg';
import css from './TeacherRates.module.css';

const TeacherRates = () => {
  return (
    <div className={css.teachers__info_stats}>
      <div className={css.teachers__info_lang}>
        <span className={css.teacher__language}>Languages</span>
        <span className={css.teacher__name}>Jane Smith</span>
      </div>

      <div className={css.stats_block}>
        <ul className={css.teachers__rates}>
          <li className={`${css.teacher__rates_item} ${css.icon_item}`}>
            <svg className={`${css.svg_icon} ${css.book}`}>
              <use href={`${icons}#book-open`} />
            </svg>

            <span className={css.label}>Lessons online</span>
          </li>

          <li className={css.teacher__rates_item}>
            <span className={css.label}>Lessons done: 1098</span>
          </li>

          <li className={`${css.teacher__rates_item} ${css.icon_item}`}>
            <svg className={css.svg_icon}>
              <use href={`${icons}#star`} />
            </svg>

            <span className={css.label}>Rating: 4.8</span>
          </li>

          <li className={css.teacher__rates_item}>
            <span className={css.label}>
              Price / 1 hour: <span className={css.price}>30$</span>
            </span>
          </li>
        </ul>

        <svg className={`${css.heart} ${css.heart_regular}`}>
          <use href={`${icons}#heart`} />
        </svg>
      </div>
    </div>
  );
};

export default TeacherRates;
