import { RootState } from '../store';
import { createSelector } from 'reselect';

const selectTeachersState = (state: RootState) => state.teachers.list;

export const selectTeachers = createSelector(
  [selectTeachersState],
  (teachersState) => teachersState
);
export const selectLoadingTeachers = (state: RootState) =>
  state.teachers.loading;
export const selectErrorTeachers = (state: RootState) => state.teachers.error;
export const selectHasMoreTeachers = (state: RootState) =>
  state.teachers.hasMore;
