import { lazy, Suspense } from 'react';
import css from './App.module.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header/Header';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const FavoritesPage = lazy(
  () => import('../pages/FavoritesPage/FavoritesPage')
);
const TeachersPage = lazy(() => import('../pages/TeachersPage/TeachersPage'));

const App = () => {
  return (
    <BrowserRouter>
      <main className={css.container}>
        <Suspense fallback={null}>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/teachers" element={<TeachersPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
          </Routes>
        </Suspense>
      </main>
    </BrowserRouter>
  );
};

export default App;
