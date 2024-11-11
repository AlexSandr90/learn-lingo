import css from './TeachersPage.module.css';

const TeachersPage = () => {
  return (
    <section className={css.teachers_block}>
      <div className={css.filters}></div>
      <ul className={css.teachers_list}>
        <li className={css.teachers_item}>
          <div className={css.avatar}>
            <img src="" alt="teacher icon" className={css.teacher_img} />
          </div>

          <div className={css.teachers__info}></div>
        </li>
      </ul>
    </section>
  );
};

export default TeachersPage;
