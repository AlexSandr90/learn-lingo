import { RootState } from '../store';

export const selectFavoritesTeachers = (state: RootState) =>
  state.favorites.list;
export const selectLoadingFavoritesTeachers = (state: RootState) =>
  state.favorites.loading;
export const selectErrorFavoritesTeachers = (state: RootState) =>
  state.favorites.error;
