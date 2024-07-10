// Navigation.tsx
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import GlobalHeader from '../component/header/GlobalHeader';

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
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          name="PasswordGeneratorScreen"
          component={PasswordGeneratorScreen}
          options={({navigation}) => ({
            header: () => <GlobalHeader title="Password generator" navigation={navigation}/>,
          })}
        />
        {/*<Stack.Screen
          name="GeneratedPasswords"showBackButton
          component={GeneratedPasswords}
          options={({navigation}) => ({
            header: () => <GlobalHeader title="Generated Passwords" navigation={navigation} />,
          })}
        />
        <Stack.Screen
          name="PrivacyPolicy"
          component={PrivacyPolicy}
          options={({navigation}) => ({
            header: () => <GlobalHeader title="Privacy Policy" navigation={navigation} showBackButton />,
          })}
        />
        <Stack.Screen
          name="AboutTheApp"
          component={AboutTheApp}
          options={({navigation}) => ({
            header: () => <GlobalHeader title="About The App" navigation={navigation} />,
          })}
        />
        <Stack.Screen
          name="AboutUs"
          component={AboutUs}
          options={({navigation}) => ({
            header: () => <GlobalHeader title="About Us" navigation={navigation} />,
          })}
        />
        <Stack.Screen
          name="HashKey"
          component={HashKey}
          options={({navigation}) => ({
            header: () => <GlobalHeader title="Hash Key" navigation={navigation} />,
          })}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
