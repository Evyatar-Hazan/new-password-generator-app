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
import Navigation, { RootStackParamList } from '../../navigation';
import Hub from '../hub';
import { StackNavigationProp } from '@react-navigation/stack';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const Home: React.FC<{ navigation: HomeScreenNavigationProp }> = ({ navigation }) => {
  const {t} = useTranslation();
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const [Keyword1, setKeyword1] = useState('');
  const [Keyword2, setKeyword2] = useState('');

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => setKeyboardVisible(true),
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => setKeyboardVisible(false),
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const onPressGenerator = () => {
    navigation.navigate('Hub', {Keyword1, Keyword2});
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.innerContainer}>
          {!keyboardVisible && (
            <View style={styles.textContainer}>
              <Text style={styles.textLarge}>{t('home.subTitle')}</Text>
              <Text style={styles.textMedium}>{t('home.note')}</Text>
            </View>
          )}

          <View style={styles.inputContainer}>
            <FrameInput
              isInput={true}
              label="Keyword 1"
              placeholder={t("home.inputPlaceholder")}
              value={Keyword1}
              onChangeText={setKeyword1}
            />
            <FrameInput
              isInput={true}
              label="Keyword 2"
              placeholder={t("home.inputPlaceholder")}
              value={Keyword2}
              onChangeText={setKeyword2}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>

      <FrameFooter
        mapRenderButton={[
          {IconComponent: BackIcon, onPress: () => onPressGenerator()},
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

export default Home;
