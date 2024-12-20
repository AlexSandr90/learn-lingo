import css from './TeachersPage.module.scss';
import Filters from '../../components/Filters/Filters';
import Button from '../../components/Button/Button';
import { useSelector } from 'react-redux';
import {
  selectErrorTeachers,
  selectHasMoreTeachers,
  selectLoadingTeachers,
  selectTeachers,
} from '../../redux/teachers/selectors';
import { useEffect, useMemo, useState } from 'react';
import { fetchTeachers } from '../../redux/teachers/operations';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import TeacherCard from '../../components/TeacherCard/TeacherCard';
import { FilterTypes } from '../../types/filterTypes';

const TeachersPage = () => {
  const dispatch = useAppDispatch();
  const teachers = useSelector(selectTeachers);
  const isLoading = useSelector(selectLoadingTeachers);
  const error = useSelector(selectErrorTeachers);
  const isHasMore = useSelector(selectHasMoreTeachers);
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState<FilterTypes>({
    language: '',
    level: '',
    price: '',
  });

  useEffect(() => {
    dispatch(fetchTeachers({ page, limit: 4, ...filters }));
  }, [dispatch, page, filters]);

  const loadMore = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (isHasMore && !isLoading) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const renderList = useMemo(() => {
    return teachers.map((teacher) => (
      <TeacherCard
        teacher={teacher}
        key={`${teacher.name}_${teacher.surname}`}
      />
    ));
  }, [teachers]);

  const onChangeFilters = (newFilters: FilterTypes) => {
    console.log("newFilters: ", newFilters);
    
    setFilters(newFilters);
    setPage(1);
  };

  return (
    <section className={css.teachers_block}>
      <Filters onChangeFilters={onChangeFilters} />
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul className={css.teachers_list}>{renderList}</ul>
      <Button className={css.button} onClick={loadMore} type="button">
        Load more
      </Button>
    </section>
  );
};

export default TeachersPage;
