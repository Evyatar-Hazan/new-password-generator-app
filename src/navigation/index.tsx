import { NavigationContainer } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import { createStackNavigator } from '@react-navigation/stack';
import { useTranslation } from 'react-i18next';

import GlobalHeader from '../component/header/GlobalHeader';
import AboutAppScreen from '../screen/aboutApp';
import AboutUsScreen from '../screen/aboutUs';
import HomeScreen from '../screen/home';
import HubScreen from '../screen/hub';
import PrivacyPolicyScreen from '../screen/privacyPolicy';
import { useTheme } from '../themes/ThemeContext';
import { themes } from '../themes/themes';

export type RootStackParamList = {
  Home: undefined;
  Hub: { Keyword1: string; Keyword2: string };
  PrivacyPolicy: undefined;
  AboutApp: undefined;
  AboutUs: undefined;
};

export enum ScreenEnum {
  Home = 'Home',
  Hub = 'Hub',
  PrivacyPolicy = 'PrivacyPolicy',
  AboutApp = 'AboutApp',
  AboutUs = 'AboutUs',
}

export type ScreenEnumType = keyof RootStackParamList;

export type ScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  keyof RootStackParamList
>;

interface ScreenOptionsProps {
  navigation: ScreenNavigationProp;
}

const Stack = createStackNavigator<RootStackParamList>();

const createScreenOptions =
  (titleKey: string, showBackButton = false) =>
  ({ navigation }: ScreenOptionsProps) => ({
    header: () => (
      <GlobalHeader
        title={titleKey}
        navigation={navigation}
        showBackButton={showBackButton}
      />
    ),
  });

const Navigation = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const colors = themes[theme];

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={ScreenEnum.Home}
        screenOptions={{
          cardStyle: {
            backgroundColor: colors.background,
          },
        }}>
        <Stack.Screen
          name={ScreenEnum.Home}
          component={HomeScreen}
          options={createScreenOptions(t('general.appName'))}
        />
        <Stack.Screen
          name={ScreenEnum.Hub}
          component={HubScreen}
          options={createScreenOptions(t('general.appName'), true)}
        />
        <Stack.Screen
          name={ScreenEnum.PrivacyPolicy}
          component={PrivacyPolicyScreen}
          options={createScreenOptions(t('general.privacyPolicy'), true)}
        />
        <Stack.Screen
          name={ScreenEnum.AboutApp}
          component={AboutAppScreen}
          options={createScreenOptions(t('general.aboutApp'), true)}
        />
        <Stack.Screen
          name={ScreenEnum.AboutUs}
          component={AboutUsScreen}
          options={createScreenOptions(t('general.aboutUs'), true)}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
