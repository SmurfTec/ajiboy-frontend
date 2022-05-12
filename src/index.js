import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider as StoreProvider } from 'react-redux';
import store from './store';
import 'react-toastify/dist/ReactToastify.css';

if (process.env.NODE_ENV === 'production') {
  console.log = () => {};
  console.error = () => {};
  console.warn = () => {};
}

ReactDOM.render(
  <StoreProvider store={store}>
    <BrowserRouter>
      <ToastContainer
        autoClose={3000}
        closeOnClick
        position='top-right'
      />
      <App />
    </BrowserRouter>
  </StoreProvider>,
  document.getElementById('root')
);
