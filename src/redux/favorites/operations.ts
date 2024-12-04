import { createAsyncThunk } from '@reduxjs/toolkit';
import { TeacherTypes } from '../../types/teacher';

export const toggleFavorite = createAsyncThunk<
  TeacherTypes,
  TeacherTypes,
  { rejectValue: { message: string } }
>('favorites/toggleFavorite', async (teacher, { rejectWithValue }) => {
  try {
    return teacher;
  } catch (error) {
    console.error('Error toggling favorite: ', error);
    return rejectWithValue({ message: 'Failed to toggle favorite' });
  }
});
