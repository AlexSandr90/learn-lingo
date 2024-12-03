import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const {
  VITE_APP_ID,
  VITE_API_KEY,
  VITE_PROJECT_ID,
  VITE_AUTH_DOMAIN,
  VITE_DATABASE_URL,
  VITE_STORAGE_BUCKET,
  VITE_MEASUREMENT_ID,
  VITE_MESSAGING_SENDER_ID,
} = import.meta.env;

const firebaseConfig = {
  apiKey: VITE_API_KEY,
  authDomain: VITE_AUTH_DOMAIN,
  projectId: VITE_PROJECT_ID,
  storageBucket: VITE_STORAGE_BUCKET,
  messagingSenderId: VITE_MESSAGING_SENDER_ID,
  appId: VITE_APP_ID,
  measurementId: VITE_MEASUREMENT_ID,
  databaseURL: VITE_DATABASE_URL,
};

// const firebaseConfig = {
//   apiKey: 'AIzaSyBo8JLh7yUIE1hJg-v4qO2iDYEvYws0iWU',
//   authDomain: 'learn-lingo-38318.firebaseapp.com',
//   projectId: 'learn-lingo-38318',
//   storageBucket: 'learn-lingo-38318.firebasestorage.app',
//   messagingSenderId: '168383962098',
//   appId: '1:168383962098:web:cf7a8a73db4e30f02ce96b',
//   measurementId: 'G-2H9SHBG1TP',
//   databaseURL:
//     'https://learn-lingo-38318-default-rtdb.europe-west1.firebasedatabase.app/',
// };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
