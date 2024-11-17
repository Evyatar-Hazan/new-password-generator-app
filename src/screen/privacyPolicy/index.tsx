import React from 'react';
import {useTranslation} from 'react-i18next';
import {
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native';
import { RootStackParamList } from '../../navigation';
import { StackNavigationProp } from '@react-navigation/stack';
import ScrollBar from '../../component/scrollBar';
import FrameFooter from '../../component/frameFooter';
import BackIcon from '../../assets/svg/back';

type PrivacyPolicyScreenNavigationProp = StackNavigationProp<RootStackParamList, 'privacyPolicy'>;

const PrivacyPolicy: React.FC<{ navigation: PrivacyPolicyScreenNavigationProp }> = ({ navigation }) => {
  const {t} = useTranslation();
  const content = [
    "Section 1: Privacy Policy Details",
    "Section 2: No data collection.",
    "Section 3: No account creation required.",
    "Section 4: No internet connection required.",
    "Section 5: Advertising policies.",
    "Section 6: Security measures.",
    "Section 7: Children's privacy.",
    "Section 8: Changes to the privacy policy.",
    "Section 9: Contact us for details.",
    "Section 1: Privacy Policy Details",
    "Section 2: No data collection.",
    "Section 3: No account creation required.",
    "Section 4: No internet connection required.",
    "Section 5: Advertising policies.",
    "Section 6: Security measures.",
    "Section 7: Children's privacy.",
    "Section 8: Changes to the privacy policy.",
    "Section 9: Contact us for details.",
    "Section 1: Privacy Policy Details",
    "Section 2: No data collection.",
    "Section 3: No account creation required.",
    "Section 4: No internet connection required.",
    "Section 5: Advertising policies.",
    "Section 6: Security measures.",
    "Section 7: Children's privacy.",
    "Section 8: Changes to the privacy policy.",
    "Section 9: Contact us for details.",
    "Section 1: Privacy Policy Details",
    "Section 2: No data collection.",
    "Section 3: No account creation required.",
    "Section 4: No internet connection required.",
    "Section 5: Advertising policies.",
    "Section 6: Security measures.",
    "Section 7: Children's privacy.",
    "Section 8: Changes to the privacy policy.",
    "Section 9: Contact us for details.",
    "Section 1: Privacy Policy Details",
    "Section 2: No data collection.",
    "Section 3: No account creation required.",
    "Section 4: No internet connection required.",
    "Section 5: Advertising policies.",
    "Section 6: Security measures.",
    "Section 7: Children's privacy.",
    "Section 8: Changes to the privacy policy.",
    "Section 9: Contact us for details.",
    "Section 1: Privacy Policy Details",
    "Section 2: No data collection.",
    "Section 3: No account creation required.",
    "Section 4: No internet connection required.",
    "Section 5: Advertising policies.",
    "Section 6: Security measures.",
    "Section 7: Children's privacy.",
    "Section 8: Changes to the privacy policy.",
    "Section 9: Contact us for details.",
  ];

  return (
    <View style={{ flex: 1 }}>
      <ScrollBar>
        <Text style={{ fontSize: 18 }}>{content.join('\n')}</Text>
        <Button title="Click Me" onPress={() => console.log('Button Pressed')} />
        <View style={{ height: 100, backgroundColor: 'lightblue' }} />
      </ScrollBar>
      <FrameFooter
        mapRenderButton={[
          {IconComponent: BackIcon, onPress: () => console.log('onPress')},
        ]}
      />
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 20,
    marginTop: '20%'
  },
  textContainer: {
    marginVertical: 20,
  },
  textLarge: {
    fontSize: 24,
    marginBottom: 30,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textMedium: {
    fontSize: 18,
    textAlign: 'center',
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
});

export default PrivacyPolicy;
