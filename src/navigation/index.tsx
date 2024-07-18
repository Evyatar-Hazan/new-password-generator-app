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

const PasswordGeneratorHome: React.FC = () => {
  const { t } = useTranslation()
  return (
    <View>
      <Text>{t('screen.homeScreenTitle')}</Text>
    </View>
  );
};

const Stack = createStackNavigator<RootStackParamList>();

const createScreenOptions = (titleKey: string, showBackButton = false) => {
  return ({ navigation }: ScreenOptionsProps) => ({
    header: () => <GlobalHeader title={titleKey} navigation={navigation} showBackButton={showBackButton} />,
  });
};

const Navigation: React.FC = () => {
  const { t } = useTranslation();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PasswordGeneratorHome">
        <Stack.Screen
          name="PasswordGeneratorHome"
          component={PasswordGeneratorHome}
          options={createScreenOptions(t('screen.homeScreenTitle'))}
        />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
