// src/navigation/index.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import GlobalHeader from '../component/header/GlobalHeader';
import { useTranslation } from 'react-i18next';
import { View, Text } from 'react-native';

type RootStackParamList = {
  PasswordGeneratorHome: undefined;
};

type ScreenNavigationProp = StackNavigationProp<RootStackParamList, keyof RootStackParamList>;

interface ScreenOptionsProps {
  navigation: ScreenNavigationProp;
}

interface PasswordGeneratorHomeProps {
  setCurrentLanguage: (language: string) => void;
}

const PasswordGeneratorHome: React.FC<PasswordGeneratorHomeProps> = ({ setCurrentLanguage }) => {
  const { t } = useTranslation();
  
  return (
    <View>
      <Text>{t('screen.homeScreenTitle')}</Text>
      <Text style={{ fontSize: 50 }} onPress={() => setCurrentLanguage('he')}>he</Text>
      <Text style={{ fontSize: 50 }} onPress={() => setCurrentLanguage('en')}>en</Text>
    </View>
  );
};

const Stack = createStackNavigator<RootStackParamList>();

const createScreenOptions = (titleKey: string, showBackButton = false) => {
  return ({ navigation }: ScreenOptionsProps) => ({
    header: () => <GlobalHeader title={titleKey} navigation={navigation} showBackButton={showBackButton} />,
  });
};

interface NavigationProps {
  setCurrentLanguage: (language: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ setCurrentLanguage }) => {
  const { t } = useTranslation();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PasswordGeneratorHome">
        <Stack.Screen
          name="PasswordGeneratorHome"
          component={() => <PasswordGeneratorHome setCurrentLanguage={setCurrentLanguage} />}
          options={createScreenOptions(t('screen.homeScreenTitle'))}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
