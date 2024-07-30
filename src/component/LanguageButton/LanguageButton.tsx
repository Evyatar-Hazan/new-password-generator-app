import React from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text, TouchableOpacity } from 'react-native';

interface LanguageButtonProps {
  setCurrentLanguage: (language: string) => void;
}

const LanguageButton: React.FC<LanguageButtonProps> = ({ setCurrentLanguage }) => {
  const { t } = useTranslation();

  return (
    <View>
      <Text>{t('screen.languageSelection')}</Text>
      <TouchableOpacity onPress={() => setCurrentLanguage('he')}>
        <Text style={{ fontSize: 50 }}>he</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setCurrentLanguage('en')}>
        <Text style={{ fontSize: 50 }}>en</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LanguageButton;
