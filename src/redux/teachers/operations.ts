import { createAsyncThunk } from '@reduxjs/toolkit';
import { get, ref } from 'firebase/database';
import { database } from '../../utils/firebase';

export const fetchTeachers = createAsyncThunk(
  'teachers/fetchTeachers',
  async (_, { rejectWithValue }) => {
    try {
      const dbRef = ref(database, 'teachers');
      const snapshot = await get(dbRef);

      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        throw new Error('No data available');
      }
    } catch (error) {
      console.error('Error fetching teachers: ', error);
      return rejectWithValue('Failed to fetch teachers data');
    }
  }
);
