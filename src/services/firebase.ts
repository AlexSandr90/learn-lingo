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

console.log('import.meta.env: ', import.meta.env);

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID,
  databaseURL: import.meta.env.VITE_DATABASE_URL,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
