import React, {useState, useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import FrameInput from '../../component/frameInput/nidex';

interface HomeProps {
  navigation?: any;
}

const Home: React.FC<HomeProps> = ({navigation}) => {
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
          {/* <View style={styles.titleContainer}>
            <Text style={styles.title}>{t('home.title')}</Text>
          </View> */}

          {!keyboardVisible && (
            <View style={styles.textContainer}>
              <Text style={styles.textLarge}>{t('home.subTitle')}</Text>
              <Text style={styles.textMedium}>{t('home.note')}</Text>
            </View>
          )}

          <View style={styles.inputContainer}>
            {/* <Text style={styles.inputLabel}>{t('home.Keyword1Title')}</Text>
            <TextInput style={styles.input} placeholder={t('home.inputPlaceholder')} />

            <Text style={styles.inputLabel}>{t('home.Keyword2Title')}</Text>
            <TextInput style={styles.input} placeholder={t('home.inputPlaceholder')} /> */}

            <FrameInput
              isInput={true}
              label="Keyword 1"
              placeholder="Enter keyword"
              value={'keyword1'}
              // onChangeText={setKeyword1}
            />
            <FrameInput isInput={false} label="Keyword 2" value={'keyword2'} />
          </View>
        </View>
      </TouchableWithoutFeedback>

      <View style={styles.footer}>
        <Button
          title={t('home.saveButton')}
          onPress={() => {
            /* handle save */
          }}
        />
      </View>
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
  // titleContainer: {
  //   flex: 1,
  //   justifyContent: 'flex-start',
  // },
  // title: {
  //   fontSize: 24,
  //   fontWeight: 'bold',
  //   textAlign: 'center',
  // },
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
  inputLabel: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: 'center',
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
    width: '80%',
    alignSelf: 'center',
  },
  footer: {
    padding: 20,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
