import NumberDisplay from '../NumberDisplay/NumberDisplay';
import css from './Stats.module.css';

const Stats = () => {
  return (
    <div className={css.stats_block}>
      <ul className={css.stats}>
        <li className={css.stats_item}>
          <NumberDisplay value={32000} additionValue='+' />
          <span className={css.stats_item__legend}>Experienced tutors</span>
        </li>
        <li className={css.stats_item}>
          <NumberDisplay value={300000} additionValue='+' />
          <span className={css.stats_item__legend}>5-star tutor reviews</span>
        </li>
        <li className={css.stats_item}>
          <span className={css.stats_item__num}>120 +</span>
          <span className={css.stats_item__legend}>Subjects taught</span>
        </li>
        <li className={css.stats_item}>
          <span className={css.stats_item__num}>200 +</span>
          <span className={css.stats_item__legend}>Tutor nationalities</span>
        </li>
      </ul>
    </div>
  );
};

export default Stats;
