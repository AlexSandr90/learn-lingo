import { Review } from '../../types/teacher';
import css from './Reviews.module.css';
import { getRandomColor } from '../../utils/getRandomColor';
import StarIcon from '../../images/StarIcon';

interface ReviewsProps {
  reviews: Review[];
}

const Reviews: React.FC<ReviewsProps> = ({ reviews }) => {
  return (
    <ul className={css.reviews__block}>
      {reviews.map((review: Review) => (
        <li
          key={`${review.reviewer_name}-${review.reviewer_rating}`}
          className={css.reviews__item}
        >
          <div className={css.rate__name_block}>
            <div
              className={
                'w-11 h-11 rounded-full flex items-center justify-center text-white'
              }
              style={{
                backgroundColor: getRandomColor(),
              }}
            >
              <span className={`${css.review__icon}`}>
                {review.reviewer_name.charAt(0)}
              </span>
            </div>
            <div className={css.rate__name}>
              <span className={css.name}>{review.reviewer_name}</span>
              <div className={css.rate}>
                <StarIcon className={css.svg_icon} />
                {review.reviewer_rating.toFixed(1)}
              </div>
            </div>
          </div>
          <p className={css.review}>{review.comment}</p>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
