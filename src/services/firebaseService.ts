import {
  child,
  DatabaseReference,
  get,
  getDatabase,
  ref,
  set,
} from 'firebase/database';
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

// export const saveBooking = async (
//   id: string,
//   bookingData: object
// ): Promise<void> => {
//   console.log('saveBooking called with:', id, bookingData); 
//   return new Promise((resolve, reject) => {
//     const db = getDatabase();
//     const bookingRef = ref(db, `bookings/${id}`);
//     console.log('Firebase ref created:', bookingRef); 
//     set(bookingRef, bookingData)
//       .then(() => {
//         console.log('Booking saved successfully');
//         resolve();
//       })
//       .catch((error) => {
//         console.error('Error saving booking:', error);
//         reject(error);
//       });
//   });
// };

export const saveBooking = async (id: string, bookingData: object): Promise<void> => {
  try {
    const db = getDatabase();
    const bookingRef = ref(db, `booking/${id}`);
    console.log('Firebase ref created:', bookingRef);
    await set(bookingRef, bookingData);
    console.log('Booking saved successfully');
  } catch (error) {
    console.error('Error saving booking:', error);
    throw error; // щоб дозволити обробку помилки у виклику
  }
};
