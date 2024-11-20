import css from './Teacher.module.css';
import icons from '../../images/icons.svg';
import TeacherRates from '../TeacherRates/TeacherRates';
import { TeacherTypes } from '../../types/teacher';

const Teacher: React.FC<TeacherTypes> = () => {
  return (
    <li className={css.teachers_item}>
      <div className={css.avatar}>
        <img src="" alt="teacher icon" className={css.teacher_img} />
      </div>

      <div className={css.teachers__info}>
        <TeacherRates />

        <div className={css.teacher__conditions}>
          <div className={css.teacher}>
            <ul className={css.teacher__list}>
              <li className={css.teacher__item}>
                <span className={css.item__key}>Speaks: </span>
                <span className={`${css.item__value} ${css.item__underscore}`}>
                  German, French
                </span>
              </li>
              <li className={css.teacher__item}>
                <span className={css.item__key}>Lesson Info: </span>
                <span className={css.item__value}>
                  Lessons are structured to cover grammar, vocabulary, and
                  practical usage of the language.
                </span>
              </li>
              <li className={css.teacher__item}>
                <span className={css.item__key}>Conditions: </span>
                <span className={css.item__value}>
                  Welcomes both adult learners and teenagers (13 years and
                  above).Provides personalized study plans
                </span>
              </li>
            </ul>

            <p className={css.teacher__cover_text}>
              Jane is an experienced and dedicated language teacher specializing
              in German and French. She holds a Bachelor's degree in German
              Studies and a Master's degree in French Literature. Her passion
              for languages and teaching has driven her to become a highly
              proficient and knowledgeable instructor. With over 10 years of
              teaching experience, Jane has helped numerous students of various
              backgrounds and proficiency levels achieve their language learning
              goals. She is skilled at adapting her teaching methods to suit the
              needs and learning styles of her students, ensuring that they feel
              supported and motivated throughout their language journey.
            </p>
          </div>

          <ul className={css.reviews__block}>
            <li className={css.reviews__item}>
              <div className={css.rate__name_block}>
                <img src="" alt="" className={css.review__icon} />
                <div className={css.rate__name}>
                  <span className={css.name}>Frank</span>
                  <div className={css.rate}>
                    <svg className={css.svg_icon}>
                      <use href={`${icons}#star`} />
                    </svg>
                    4.0
                  </div>
                </div>
              </div>
              <p className={css.review}>
                Jane's lessons were very helpful. I made good progress.
              </p>
            </li>
          </ul>

          <ul className={css.lang__levels}>
            <li className={css.lang__levels_item}>

            </li>
          </ul>
          
          <div className={css.button}></div>
        </div>

        <ul className={css.teachers__lang_level}></ul>
      </div>
    </li>
  );
};

export default Teacher;
