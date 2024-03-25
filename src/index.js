import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from './redux/store';
import { GlobalStyle } from 'common/GiobalStyles';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store} >
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter basename='/medical-store-frontend' >
        <GlobalStyle />
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
</React.StrictMode>
);
