import { createSlice } from '@reduxjs/toolkit';
import { toggleFavorite } from './operations';
import { TeacherTypes } from '../../types/teacher';

interface FavoritesStateTypes {
  list: TeacherTypes[];
  loading: boolean;
  error: string | null;
}

const initialState: FavoritesStateTypes = {
  list: [],
  loading: false,
  error: null,
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(toggleFavorite.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(toggleFavorite.fulfilled, (state, action) => {
        state.loading = false;
        const teacher = action.payload;
        const uniqueKey = `${teacher.name}_${teacher.surname}`;

        const exists = state.list.some(
          (item) => `${item.name}_${item.surname}` === uniqueKey
        );

        if (exists) {
          state.list = state.list.filter(
            (item) => `${item.name}_${item.surname}` !== uniqueKey
          );
        } else {
          state.list.push(teacher);
        }
      })
      .addCase(toggleFavorite.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || 'Failed to toggle favorite';
      });
  },
});

export default favoritesSlice.reducer;
