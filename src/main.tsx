import { createRoot } from 'react-dom/client';
import 'normalize.css';
import './index.css';
import App from './components/App.tsx';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store.ts';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </BrowserRouter>
);
