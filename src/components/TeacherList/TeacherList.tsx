import css from './TeacherList.module.css';

interface TeacherListProps {
  languages: string[];
  lessonInfo: string;
  conditions: string[];
}

const TeacherList: React.FC<TeacherListProps> = ({
  languages,
  conditions,
  lessonInfo,
}) => {
  return (
    <div className={css.teacher}>
      <ul className={css.teacher__list}>
        <li className={css.teacher__item}>
          <span className={css.item__key}>Speaks: </span>
          <span className={`${css.item__value} ${css.item__underscore}`}>
            {languages.join(', ')}
          </span>
        </li>
        <li className={css.teacher__item}>
          <span className={css.item__key}>Lesson Info: </span>
          <span className={css.item__value}>{lessonInfo}</span>
        </li>
        <li className={css.teacher__item}>
          <span className={css.item__key}>Conditions: </span>
          <span className={css.item__value}>{conditions.join(', ')}</span>
        </li>
      </ul>
    </div>
  );
};

export default TeacherList;
