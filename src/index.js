import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './i18n.js';
import { LanguageProvider } from './LanguageContext.js';

ReactDOM.render(
  <React.StrictMode>
    <LanguageProvider>
    <App />
   </LanguageProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
