import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  get,
  ref,
  query,
  equalTo,
  orderByChild,
  limitToFirst,
} from 'firebase/database';
import { database } from '../../services/firebase';
import { TeacherTypes } from '../../types/teacher';

export const fetchTeachers = createAsyncThunk<
  TeacherTypes[],
  {
    page: number;
    limit: number;
    language?: string;
    level?: string;
    price?: string;
  },
  { rejectValue: { message: string } }
>(
  'teachers/fetchTeachers',
  async ({ page, limit, language, level, price }, { rejectWithValue }) => {
    try {
      const dbRef = ref(database, 'teachers');

      const startIndex = (page - 1) * limit;

      let teachersQuery = query(dbRef, limitToFirst(startIndex + limit));

      if (language) {
        teachersQuery = query(
          teachersQuery,
          orderByChild('languages'),
          equalTo(language)
        );
      }

      if (level) {
        teachersQuery = query(
          teachersQuery,
          orderByChild('levels'),
          equalTo(level)
        );
      }

      if (price) {
        teachersQuery = query(
          teachersQuery,
          orderByChild('price_per_hour'),
          equalTo(Number(price))
        );
      }

      const snapshot = await get(teachersQuery);

      if (!snapshot.exists()) {
        throw new Error('No data available');
      }

      const teachersArray: TeacherTypes[] = Object.values(snapshot.val());
      console.log('teachersArray: ', teachersArray);

      return teachersArray;
    } catch (error) {
      console.error('Error fetching teachers: ', error);
      return rejectWithValue({
        message: 'Failed to fetch teachers data',
      });
    }
  }
);
