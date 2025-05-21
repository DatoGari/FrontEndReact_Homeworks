import React, { createContext, useState } from 'react';

export const LanguageContext = createContext();

const translations = {
  en: {
    new: 'New Tasks',
    inProgress: 'In Progress',
    completed: 'Completed',
  },
  ka: {
    new: 'ახალი დავალებები',
    inProgress: 'პროცესშია',
    completed: 'დასრულებული',
  },
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'ka' : 'en'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};