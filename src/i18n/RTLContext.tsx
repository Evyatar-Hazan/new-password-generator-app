import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from 'react';
import { I18nManager } from 'react-native';
import i18n from '../i18n/i18n';

interface RTLContextProps {
  isRTL: boolean;
  toggleRTL: (isRTL: boolean) => void;
}

const RTLContext = createContext<RTLContextProps>({
  isRTL: I18nManager.isRTL,
  toggleRTL: () => {},
});

interface RTLProviderProps {
  children: ReactNode;
}

export const RTLProvider: React.FC<RTLProviderProps> = ({ children }) => {
  const [isRTL, setIsRTL] = useState(I18nManager.isRTL);

  const handleLanguageChange = useCallback(
    (lng: string) => {
      const rtl = lng === 'he';
      setIsRTL(rtl);
    },
    []
  );

  useEffect(() => {
    const onLanguageChanged = (lng: string) => {
      const currentRTL = lng === 'he';
      if (currentRTL !== isRTL) {
        handleLanguageChange(lng);
      }
    };

    i18n.on('languageChanged', onLanguageChanged);

    return () => {
      i18n.off('languageChanged', onLanguageChanged);
    };
  }, [handleLanguageChange, isRTL]);

  const toggleRTL = (newIsRTL: boolean) => {
    const newLanguage = newIsRTL ? 'he' : 'en';
    if (newIsRTL !== isRTL) {
      i18n.changeLanguage(newLanguage);
      handleLanguageChange(newLanguage);
    }
  };

  return (
    <RTLContext.Provider value={{ isRTL, toggleRTL }}>
      {children}
    </RTLContext.Provider>
  );
};

export const useRTL = () => useContext(RTLContext);
