import { createSlice, PayloadAction } from '@reduxjs/toolkit';
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
  reducers: {
    toggleFavorite(state, action: PayloadAction<TeacherTypes>) {
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

        console.log("state.list: ", state.list);
        
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
