import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { LanguageContext } from '../../context/LanguageContext';
import styles from './Header.module.css';

const Header = () => {
  const { language, toggleLanguage, translations } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <header className={styles.header}>
      <nav>
        <NavLink to="/">{t.new}</NavLink>
        <NavLink to="/in-progress">{t.inProgress}</NavLink>
        <NavLink to="/completed">{t.completed}</NavLink>
      </nav>
      <button onClick={toggleLanguage}>
        {language === 'en' ? 'ქარ' : 'Eng'}
      </button>
    </header>
  );
};

export default Header;
