// src/App.tsx
import React, {useEffect, useState} from 'react';
import Navigation from './navigation';
import './i18n/i18n';
import {useTranslation} from 'react-i18next';
import {RTLProvider} from './i18n/RTLContext';
import SplashScreen from './component/splashScreen';
import { ThemeProvider } from './themes/ThemeContext';

const App: React.FC = () => {
  const {i18n} = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const changeLanguage = (nameLanguage: string) => {
      i18n.changeLanguage(nameLanguage);
    };
    changeLanguage(currentLanguage);

    const loadApp = async () => {
      await new Promise(resolve => setTimeout(resolve, 3000));
      setIsLoading(false);
    };

    loadApp();
  }, [currentLanguage, i18n]);

  return (
    <ThemeProvider>
      <RTLProvider>
        {!isLoading ? <Navigation setCurrentLanguage={setCurrentLanguage} /> : <SplashScreen />}
      </RTLProvider>
    </ThemeProvider>
  );
};

export default App;
