import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { translations } from './translations';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      ru: { translation: translations.ru },
      en: { translation: translations.en },
      bg: { translation: translations.bg }
    },
    lng: 'bg',
    fallbackLng: 'bg',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n; 