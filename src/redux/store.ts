import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import teachersReducer from './teachers/slice';
import authReducer from './auth/slice';
import favoritesReducer from './favorites/slice';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['accessToken', 'refreshToken'],
};

const persistFavoritesConfig = {
  key: 'favorites',
  storage,
  whitelist: ['list'],
};

const persistedReducer = persistReducer(persistConfig, authReducer);
const persistedFavoritesReducer = persistReducer(
  persistFavoritesConfig,
  favoritesReducer
);

export const store = configureStore({
  reducer: {
    auth: persistedReducer,
    teachers: teachersReducer,
    favorites: persistedFavoritesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
