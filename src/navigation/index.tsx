import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import GlobalHeader from '../component/header/GlobalHeader';
import { useTranslation } from 'react-i18next';
import Home from '../screen/home';
import LanguageButton from '../component/LanguageButton/LanguageButton';
import Hub from '../screen/hub';
import PrivacyPolicy from '../screen/privacyPolicy';
import AboutApp from '../screen/aboutApp';
import AboutUs from '../screen/aboutUs';

export type RootStackParamList = {
  Home: undefined;
  Hub: {Keyword1: string, Keyword2: string};
  LanguageButton: undefined;
  PrivacyPolicy: undefined;
  AboutApp: undefined;
  AboutUs: undefined;
};

export enum ScreenEnum {
  Home = 'Home',
  Hub = 'Hub',
  LanguageButton = 'LanguageButton',
  PrivacyPolicy = 'PrivacyPolicy',
  AboutApp = 'AboutApp',
  AboutUs = 'AboutUs'
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
      <Stack.Navigator initialRouteName={ScreenEnum.Home}>
        <Stack.Screen
          name={ScreenEnum.Home}
          component={Home}
          options={createScreenOptions(t('general.appName'))}
        />
        <Stack.Screen
          name={ScreenEnum.Hub}
          component={Hub}
          options={createScreenOptions(t('general.appName'), true)}
        />
        <Stack.Screen
          name={ScreenEnum.PrivacyPolicy}  
          component={PrivacyPolicy}
          options={createScreenOptions(t('general.privacyPolicy'), true)}
        />
        <Stack.Screen
          name={ScreenEnum.AboutApp}
          component={AboutApp}
          options={createScreenOptions(t('general.aboutApp'), true)}
        />
        <Stack.Screen
          name={ScreenEnum.AboutUs}
          component={AboutUs}
          options={createScreenOptions(t('general.aboutUs'), true)}
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
