import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchTeachers } from './operations';
import { TeacherTypes } from '../../types/teacher';

interface TeachersStateTypes {
  list: TeacherTypes[];
  loading: boolean;
  error: string | null;
}

const initialState: TeachersStateTypes = {
  list: [],
  loading: false,
  error: null,
};

const teachersSlice = createSlice({
  name: 'teachers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTeachers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchTeachers.fulfilled,
        (state, action: PayloadAction<TeacherTypes[]>) => {
          state.loading = false;
          state.list = action.payload;
        }
      )
      .addCase(
        fetchTeachers.rejected,
        (state, action) => {
          state.loading = false;
          state.error = action.payload?.message || 'Unknown error';
        }
      );
  },
});

export default teachersSlice.reducer;
