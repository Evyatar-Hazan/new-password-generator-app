import './i18n/i18n';

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import SplashScreen from './component/splashScreen';
import { RTLProvider } from './i18n/RTLContext';
import Navigation from './navigation';
import { ThemeProvider } from './themes/ThemeContext';

const App: React.FC = () => {
  const { i18n } = useTranslation();
  const [currentLanguage] = useState(i18n.language);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const changeLanguage = (nameLanguage: string) => {
      i18n.changeLanguage(nameLanguage);
    };
    changeLanguage(currentLanguage);

    const loadApp = async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setIsLoading(false);
    };

    loadApp();
  }, [currentLanguage, i18n]);

  return (
    <ThemeProvider>
      <RTLProvider>
        {!isLoading ? <Navigation /> : <SplashScreen />}
      </RTLProvider>
    </ThemeProvider>
  );
};

export default App;
