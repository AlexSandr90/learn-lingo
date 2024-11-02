import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyBo8JLh7yUIE1hJg-v4qO2iDYEvYws0iWU',
  authDomain: 'learn-lingo-38318.firebaseapp.com',
  projectId: 'learn-lingo-38318',
  storageBucket: 'learn-lingo-38318.firebasestorage.app',
  messagingSenderId: '168383962098',
  appId: '1:168383962098:web:cf7a8a73db4e30f02ce96b',
  measurementId: 'G-2H9SHBG1TP',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
