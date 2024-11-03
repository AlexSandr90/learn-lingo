import { createSlice } from '@reduxjs/toolkit';
import { fetchTeachers } from './operations';
import { Teacher } from '../../types/teacher';

interface TeachersStateTypes {
  list: Teacher[];
  loading: boolean;
  error: boolean | null;
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
      .addCase(fetchTeachers.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchTeachers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      });
  },
});

export default teachersSlice.reducer;
