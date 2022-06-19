import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';

const root = document.querySelector('#root');

if (import.meta.hot) {
  import.meta.hot.on(
    "vite:beforeUpdate",
    () => console.clear()
  );
}

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
