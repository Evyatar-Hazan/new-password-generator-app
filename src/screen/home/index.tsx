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

const Home: React.FC = () => {
  const {t} = useTranslation();
  const [keyboardVisible, setKeyboardVisible] = useState(false);

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
              placeholder="Enter keyword"
              value={'keyword1'}
            />
            <FrameInput isInput={false} label="Keyword 2" value={'keyword2'} />
          </View>
        </View>
      </TouchableWithoutFeedback>

      <FrameFooter />
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
  },
  textContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
  },
  textLarge: {
    fontSize: 24,
    marginBottom: 10,
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
