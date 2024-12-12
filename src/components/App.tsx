import { lazy, Suspense } from 'react';
import css from './App.module.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './Header/Header';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';
import { Toaster } from 'react-hot-toast';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const FavoritesPage = lazy(
  () => import('../pages/FavoritesPage/FavoritesPage')
);
const TeachersPage = lazy(() => import('../pages/TeachersPage/TeachersPage'));

const App = () => {
  const { pathname } = useLocation();

  return (
    <main
      className={`${css.container} ${
        pathname === '/' ? css.main_page__bg : css.other_pages_bg
      }`}
    >
      <Suspense fallback={null}>
        <Toaster />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/teachers" element={<TeachersPage />} />
          <Route
            path="/favorites"
            element={
              <ProtectedRoute>
                <FavoritesPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Suspense>
    </main>
  );
};

export default App;
