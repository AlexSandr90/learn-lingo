import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  get,
  limitToFirst,
  orderByKey,
  query,
  ref,
  startAfter,
} from 'firebase/database';
import { database } from '../../services/firebase';
import { TeacherTypes } from '../../types/teacher';

export const fetchTeachers = createAsyncThunk<
  TeacherTypes[],
  { page: number; limit: number },
  { rejectValue: { message: string } }
>('teachers/fetchTeachers', async ({ page, limit }, { rejectWithValue }) => {
  try {
    const dbRef = ref(database);
    console.log('dbRef', dbRef);

    const offset = (page - 1) * limit;

    const teachersQuery = query(
      dbRef,
      orderByKey(),
      startAfter(offset.toString()),
      limitToFirst(limit)
    );

    const snapshot = await get(teachersQuery);

    if (snapshot.exists()) {
      const teachersArray: TeacherTypes[] = Object.values(snapshot.val());
      return teachersArray;
    } else {
      throw new Error('No data available');
    }
  } catch (error) {
    console.error('Error fetching teachers: ', error);
    return rejectWithValue({
      message: 'Failed to fetch teachers data',
    });
  }
});
