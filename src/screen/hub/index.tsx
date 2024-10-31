import React, {useState, useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
import FrameInput from '../../component/frameInput';
import FrameFooter from '../../component/frameFooter';
import BackIcon from '../../assets/svg/back';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigation';
import { RouteProp } from '@react-navigation/native';
import { extractLetters, combineNumbersAndLetters, transformToUpperCase, transformToSign, extractNumbers } from 'password-generator-npm';
import FourIcon from '../../assets/svg/footer/fourIcon';
import EightIcon from '../../assets/svg/footer/eightIcon';
import TwelveIcon from '../../assets/svg/footer/twelveIcon';
import PasswordLengthIcon from '../../assets/svg/footer/passwordLengthIcon';

type HubScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Hub'>;
type HubScreenRouteProp = RouteProp<RootStackParamList, 'Hub'>;

type HubProps = {
  navigation: HubScreenNavigationProp;
  route: HubScreenRouteProp;
};

const Hub: React.FC<HubProps> = ({navigation, route}) => {
  const {t} = useTranslation();
  const {Keyword1, Keyword2} = route.params;
  const KeywordArr = [Keyword1, Keyword2];
  const [numCharacters, setNumCharacters] = useState<number>(8);
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const showKeyboard = Keyboard.addListener('keyboardDidShow', () => setKeyboardVisible(true));
    const hideKeyboard = Keyboard.addListener('keyboardDidHide', () => setKeyboardVisible(false));

    return () => {
      showKeyboard.remove();
      hideKeyboard.remove();
    };
  }, []);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={[styles.innerContainer, keyboardVisible && styles.innerContainerKeyboard]}>
          <View style={styles.inputContainer}>
            <FrameInput 
              isInput={false} 
              label={t("hub.veryStrongTitle")} 
              value={transformToSign(KeywordArr, numCharacters)} 
              strengthType="veryStrong"
            />
          </View>

          <View style={styles.inputContainer}>
            <FrameInput 
              isInput={false} 
              label={t("hub.strongTitle")} 
              value={transformToUpperCase(KeywordArr, numCharacters)} 
              strengthType="strong"
            />
          </View>

          <View style={styles.inputContainer}>
            <FrameInput 
              isInput={false} 
              label={t("hub.mediumTitle")} 
              value={combineNumbersAndLetters(KeywordArr, numCharacters)} 
              strengthType="medium"
            />
          </View>

          <View style={styles.inputContainer}>
            <FrameInput 
              isInput={false} 
              label={t("hub.weakTitle")} 
              value={extractLetters(KeywordArr, numCharacters)} 
              strengthType="weak"
            />
          </View>

          <View style={styles.inputContainer}>
            <FrameInput 
              isInput={false} 
              label={t("hub.veryWeakTitle")} 
              value={extractNumbers(KeywordArr, numCharacters)} 
              strengthType="veryWeak"
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
      <FrameFooter
        mapRenderButton={[
          {
            IconComponent: FourIcon,
            onPress: () => setNumCharacters(4),
          },
          {
            IconComponent: EightIcon,
            onPress: () => setNumCharacters(8),
          },
          {
            IconComponent: TwelveIcon,
            onPress: () => setNumCharacters(12),
          },
          {
            IconComponent: PasswordLengthIcon,
            onPress: () => setNumCharacters,
          },
        ]}
      />
    </KeyboardAvoidingView>
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
    marginTop: '20%',
  },
  innerContainerKeyboard: {
    marginTop: 0, // Adjusts when the keyboard is visible
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
});

export default Hub;
