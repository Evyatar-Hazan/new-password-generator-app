import React from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text } from 'react-native';

interface HomeProps {
  navigation?: any;
}

const Home: React.FC<HomeProps> = ({ navigation }) => {
  const { t } = useTranslation();

  return (
    <View>
      <Text>{t('screen.homeScreenTitle')}</Text>
      {/* Add more UI elements as needed */}
    </View>
  );
};

export default Home;
