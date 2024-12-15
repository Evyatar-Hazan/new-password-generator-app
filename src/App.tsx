import './i18n/i18n';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import SplashScreen from './component/splashScreen';
import { RTLProvider } from './i18n/RTLContext';
import Navigation from './navigation';
import { ThemeProvider } from './themes/ThemeContext';

export const randomKeyStorageKey = 'randomKey';

const generateRandomString = (length: number): string => {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

const App: React.FC = () => {
  const { i18n } = useTranslation();
  const [currentLanguage] = useState(i18n.language);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const changeLanguage = (nameLanguage: string) => {
      i18n.changeLanguage(nameLanguage);
    };
    changeLanguage(currentLanguage);

    const loadRandomKey = async () => {
      const existingRandomKey = await AsyncStorage.getItem(randomKeyStorageKey);

      if (existingRandomKey === null) {
        const newRandomKey = generateRandomString(100);
        await AsyncStorage.setItem(randomKeyStorageKey, newRandomKey);
      }
    };

    loadRandomKey();

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
