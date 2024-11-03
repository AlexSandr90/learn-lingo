import { RootState } from '../store';

export const selectTeachers = (state: RootState) => state.teachers.list;
export const selectLoadingTeachers = (state: RootState) =>
  state.teachers.loading;
export const selectErrorTeachers = (state: RootState) => state.teachers.error;
