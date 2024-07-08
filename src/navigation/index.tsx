// Navigation.tsx
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  CustomHeaderButton,
  CenteredHeaderTitle,
} from '../component/header/index';
// import your screen components here
// import HomeScreen from './HomeScreen';
// import GeneratedPasswords from './GeneratedPasswords';
// import PrivacyPolicy from './PrivacyPolicy';
// import AboutTheApp from './AboutTheApp';
// import AboutUs from './AboutUs';
// import HashKey from './HashKey';

const Stack = createStackNavigator();

const PasswordGeneratorScreen = () => {
  return <></>;
};

const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={({navigation}) => ({
          headerStyle: {
            backgroundColor: '#B88AE8',
            height: 70,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
          },
          headerTintColor: 'red',
          headerTitle: props => <CenteredHeaderTitle title={props.children} />,
          headerTitleAlign: 'center',
          headerLeft: () => (
            <View style={styles.headerButtonContainer}>
              <CustomHeaderButton navigation={navigation} />
            </View>
          ),
          headerRight: () => (
            <View style={styles.headerButtonContainer}>
              <CustomHeaderButton navigation={navigation} />
            </View>
          ),
        })}>
        <Stack.Screen
          name="PasswordGeneratorScreen"
          component={PasswordGeneratorScreen}
          options={{
            title: 'Password generator', // replace with t('navigation.homeScreen') if using i18n
          }}
        />
        {/*<Stack.Screen
          name="GeneratedPasswords"
          component={GeneratedPasswords}
          options={{
            title: 'Generated Passwords', // replace with t('navigation.generatedPasswords') if using i18n
          }}
        />
        <Stack.Screen
          name="PrivacyPolicy"
          component={PrivacyPolicy}
          options={{
            title: 'Privacy Policy', // replace with t('privacyPolicy.title') if using i18n
          }}
        />
        <Stack.Screen
          name="AboutTheApp"
          component={AboutTheApp}
          options={{
            title: 'About The App', // replace with t('aboutTheApp.title') if using i18n
          }}
        />
        <Stack.Screen
          name="AboutUs"
          component={AboutUs}
          options={{
            title: 'About Us', // replace with t('aboutUs.title') if using i18n
          }}
        />
        <Stack.Screen
          name="HashKey"
          component={HashKey}
          options={{
            title: 'Hash Key', // replace with t('hashKey.title') if using i18n
          }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  headerButtonContainer: {
    paddingHorizontal: 15,
  },
});

export default Navigation;
