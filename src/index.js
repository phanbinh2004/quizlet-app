import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import i18n from 'i18next';
import { I18nextProvider } from 'react-i18next';
import enTranslation from "./locales/en.json";
import viTranslation from "./locales/vi.json";
const language = localStorage.getItem('language') || 'vi';

i18n.init({
  interpolation: {escape: false},
  lng: language,
  debug: true,
  resources: {
    en: {
      translation: enTranslation,
    },
    vi: {
      translation: viTranslation,
    }
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);

