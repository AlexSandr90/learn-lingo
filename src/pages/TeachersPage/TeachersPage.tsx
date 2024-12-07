import css from './TeachersPage.module.scss';
import Filters from '../../components/Filters/Filters';
import Teachers from '../../components/Teachers/Teachers';
import Button from '../../components/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectErrorTeachers,
  selectHasMoreTeachers,
  selectLoadingTeachers,
  selectTeachers,
} from '../../redux/teachers/selectors';
import { useEffect, useState } from 'react';
import { fetchTeachers } from '../../redux/teachers/operations';
import { useAppDispatch } from '../../hooks/useAppDispatch';

const TeachersPage = () => {
  // const dispatch = useDispatch();
  const dispatch = useAppDispatch();
  const teachers = useSelector(selectTeachers);
  const isLoading = useSelector(selectLoadingTeachers);
  const error = useSelector(selectErrorTeachers);
  const isHasMore = useSelector(selectHasMoreTeachers);
  const [page, setPage] = useState(1);

  useEffect(() => {
    console.log('first');

    dispatch(fetchTeachers({ page, limit: 4 }));
  }, [dispatch, page]);

  const loadMore = () => {
    if (isHasMore && !isLoading) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <section className={css.teachers_block}>
      <Filters />
      <Teachers teachers={teachers} />
      <Button className={css.button} onClick={loadMore}>
        Load more
      </Button>
    </section>
  );
};

export default TeachersPage;
