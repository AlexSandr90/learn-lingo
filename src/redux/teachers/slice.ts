import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchTeachers } from './operations';
import { TeacherTypes } from '../../types/teacher';

interface TeachersStateTypes {
  list: TeacherTypes[];
  loading: boolean;
  error: string | null;
  hasMore: boolean;
}

const initialState: TeachersStateTypes = {
  list: [],
  loading: false,
  error: null,
  hasMore: true,
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

          if (action.payload.length === 0) {
            state.hasMore = false;
          } else {
            const uniqueTeachers = action.payload.filter((newTeacher) => {
              return !state.list.some(
                (existingTeacher) =>
                  existingTeacher.name === newTeacher.name &&
                  existingTeacher.surname === newTeacher.surname
              );
            });

            state.list = [...state.list, ...uniqueTeachers];
          }

        }
      )
      .addCase(fetchTeachers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || 'Unknown error';
      });
  },
});

export default teachersSlice.reducer;
