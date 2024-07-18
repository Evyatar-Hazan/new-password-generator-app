// src/App.tsx
import React, {useEffect, useState} from 'react';
import Navigation from './navigation';
import './i18n/i18n';
import {useTranslation} from 'react-i18next';
import {RTLProvider} from './i18n/RTLContext';

const App: React.FC = () => {
  const {i18n} = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  useEffect(() => {
    const changeLanguage = (nameLanguage: string) => {
      i18n.changeLanguage(nameLanguage);
    };
    changeLanguage(currentLanguage);
  }, [currentLanguage, i18n]);

  return (
    <RTLProvider>
      <Navigation setCurrentLanguage={setCurrentLanguage} />
    </RTLProvider>
  );
};

export default App;
