import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaTelegram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { SiViber } from 'react-icons/si';
import './App.css';
import { config } from './config';

const App: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [showModal, setShowModal] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const handleModalClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setShowModal(false);
    }
  };

  return (
    <div className="app">
      <div className="language-selector">
        {config.languages.ru.enabled && (
          <button onClick={() => changeLanguage('ru')}>{config.languages.ru.flag}</button>
        )}
        {config.languages.en.enabled && (
          <button onClick={() => changeLanguage('en')}>{config.languages.en.flag}</button>
        )}
        {config.languages.bg.enabled && (
          <button onClick={() => changeLanguage('bg')}>{config.languages.bg.flag}</button>
        )}
      </div>

      <div className="content">
        <section className="pilot-section">
          <h2>{t('pilot.title')}</h2>
          <p>{t('pilot.registration')}</p>
          {(i18n.language === 'bg' || i18n.language === 'en') && (
            <img src="./certificate_bg.png" alt="Certificate" className="certificate" />
          )}
        </section>

        <section className="contacts-section">
          <h2>{t('contacts.title')}</h2>
          <div className="contacts-container">
            <div className="profile-image">
              <img src="./my_photo.jpg" alt="Profile" />
              <div className="profile-name">{t('contacts.name')}</div>
            </div>
            <div className="contacts">
              <div className="contact-links">
                <div className="contact-item">
                  <span className="contact-label">Email:</span>
                  <a href={`mailto:${t('contacts.email')}`}>
                    <FaEnvelope /> {t('contacts.email')}
                  </a>
                </div>
                <div className="contact-item">
                  <span className="contact-label">Telegram:</span>
                  <a href={`https://t.me/${t('contacts.telegram').replace('@', '')}`}>
                    <FaTelegram /> {t('contacts.telegram')}
                  </a>
                </div>
                <div className="contact-item">
                  <span className="contact-label">WhatsApp:</span>
                  <a href={`https://wa.me/${t('contacts.phone').replace(/\D/g, '')}`}>
                    <FaWhatsapp /> {t('contacts.phone')}
                  </a>
                </div>
                {i18n.language === 'ru' && (
                  <div className="contact-item">
                    <span className="contact-label">Viber:</span>
                    <a href={`viber://chat?number=${t('contacts.phone').replace(/\D/g, '')}`}>
                      <SiViber /> {t('contacts.phone')}
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>

      <button className="found-drone-btn" onClick={() => setShowModal(true)}>
        {t('foundDrone.button')}
      </button>

      {showModal && (
        <div className="modal" onClick={handleModalClick}>
          <div className="modal-content">
            <h3>{t('foundDrone.title')}</h3>
            <p>{t('foundDrone.message')}</p>
            <div className="pray-emoji">🙏</div>
            <button onClick={() => setShowModal(false)}>{t('foundDrone.close')}</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;