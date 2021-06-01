import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

const pt = require('./pt/translation');

i18n.use(initReactI18next).init({
  fallbackLng: 'pt',
  lng: 'pt',
  debug: true,
  resources: {
    pt: {
      translation: pt,
    },
  },
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
});

export default i18n;
