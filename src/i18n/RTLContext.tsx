// src/i18n/RTLContext.tsx
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import {I18nManager} from 'react-native';
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

export const RTLProvider: React.FC<RTLProviderProps> = ({children}) => {
  const [isRTL, setIsRTL] = useState(I18nManager.isRTL);

  useEffect(() => {
    const handleLanguageChange = (lng: string) => {
      const isRTL = lng === 'he';
      I18nManager.forceRTL(isRTL);
      setIsRTL(isRTL);
    };

    i18n.on('languageChanged', handleLanguageChange);

    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, []);

  const toggleRTL = (isRTL: boolean) => {
    I18nManager.forceRTL(isRTL);
    setIsRTL(isRTL);
  };

  return (
    <RTLContext.Provider value={{isRTL, toggleRTL}}>
      {children}
    </RTLContext.Provider>
  );
};

export const useRTL = () => useContext(RTLContext);
