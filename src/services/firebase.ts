import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

console.log('import.meta.env: ', import.meta.env);

const VITE_APP_ID = '1:168383962098:web:cf7a8a73db4e30f02ce96b';
const VITE_API_KEY = 'AIzaSyBo8JLh7yUIE1hJg-v4qO2iDYEvYws0iWU';
const VITE_PROJECT_ID = 'learn-lingo-38318';
const VITE_AUTH_DOMAIN = 'learn-lingo-38318.firebaseapp.com';
const VITE_DATABASE_URL =
  'https://learn-lingo-38318-default-rtdb.europe-west1.firebasedatabase.app/';
const VITE_STORAGE_BUCKET = 'learn-lingo-38318.firebasestorage.app';
const VITE_MEASUREMENT_ID = 'G-2H9SHBG1TP';
const VITE_MESSAGING_SENDER_ID = '168383962098';

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

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
