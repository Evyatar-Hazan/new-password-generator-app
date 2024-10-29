import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import GlobalHeader from '../component/header/GlobalHeader';
import { useTranslation } from 'react-i18next';
import Home from '../screen/home';
import LanguageButton from '../component/LanguageButton/LanguageButton';
import Hub from '../screen/hub';

export type RootStackParamList = {
  Home: undefined;
  Hub: {Keyword1: string, Keyword2: string};
  LanguageButton: undefined;

};

  type ScreenNavigationProp = StackNavigationProp<RootStackParamList, keyof RootStackParamList>;

interface ScreenOptionsProps {
  navigation: ScreenNavigationProp;
}


const Stack = createStackNavigator<RootStackParamList>();

const createScreenOptions = (titleKey: string, showBackButton = false) => {
  return ({ navigation }: ScreenOptionsProps) => ({
    header: () => <GlobalHeader title={titleKey} navigation={navigation} showBackButton={showBackButton} />,
  });
};

export interface NavigationProps {
  setCurrentLanguage: (language: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ setCurrentLanguage }) => {
  const { t } = useTranslation();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={createScreenOptions(t('screen.homeScreenTitle'))}
        />
        <Stack.Screen
          name="Hub"
          component={Hub}
          options={createScreenOptions(t('screen.hubScreenTitle'))}
        />
        {/* Uncomment and implement the LanguageButton screen if needed */}
        {/* <Stack.Screen
          name="LanguageButton"
          component={() => <LanguageButton setCurrentLanguage={setCurrentLanguage} />}
          options={createScreenOptions(t('screen.languageButtonTitle'), true)}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
