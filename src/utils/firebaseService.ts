import { child, DatabaseReference, get, ref, set } from 'firebase/database';
import { database } from './firebase';
import { TeacherTypes } from '../types/teacher';

export const saveTeacher = async (
  id: string,
  teacherData: object
): Promise<void> => {
  await set(ref(database, `teachers/${id}`), teacherData);
};

export const getTeachers = async (): Promise<Record<
  string,
  TeacherTypes
> | null> => {
  const dbRef: DatabaseReference = ref(database);
  const snapshot = await get(child(dbRef, 'teachers'));

  if (snapshot.exists()) {
    return snapshot.val();
  } else {
    console.log('No data available');
    return null;
  }
};
