import React, { createContext, useState, useContext, useEffect } from 'react';
import i18n from 'i18next';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(i18n.language);

  const changeLanguage = (lang) => {
    console.log('LanguageContext changing to:', lang);
    i18n.changeLanguage(lang);
    setLanguage(lang);
  };

  // Listen for language changes
  useEffect(() => {
    const handleLanguageChange = (lng) => {
      console.log('Language changed to:', lng);
      setLanguage(lng);
    };

    i18n.on('languageChanged', handleLanguageChange);
    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, []);

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);