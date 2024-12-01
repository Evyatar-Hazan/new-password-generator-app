import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {
  View,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  StyleSheet,
  ScrollView,
} from 'react-native';
import FrameInput from '../../component/frameInput';
import BackIcon from '../../assets/svg/back';
import {RootStackParamList, ScreenEnum} from '../../navigation';
import {StackNavigationProp} from '@react-navigation/stack';
import Card from '../../component/card/Card';
import Footer from '../../component/footerButton';
import { useTheme } from '../../themes/ThemeContext';
import { themes } from '../../themes/themes';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, ScreenEnum.Home>;

const Home: React.FC<{navigation: HomeScreenNavigationProp}> = ({navigation}) => {
  const { theme } = useTheme();
  const colors = themes[theme];
  const {t} = useTranslation();
  const [Keyword1, setKeyword1] = useState('');
  const [Keyword2, setKeyword2] = useState('');

  const onPressGenerator = () => {
    navigation.navigate(ScreenEnum.Hub, {Keyword1, Keyword2});
  };

  return (
    <View style={styles(colors).container}>
      <KeyboardAvoidingView
        style={styles(colors).contentContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView
            contentContainerStyle={[
              styles(colors).innerContainer,
            ]}
            keyboardShouldPersistTaps="handled">
            <Card
              dominantTitle={t('home.subTitle')}
              dominantTitleStyles={{textAlign: 'center'}}
              content={t('home.note')}
              contentStyles={{textAlign: 'center'}}
            />

            <View style={styles(colors).inputContainer}>
              <FrameInput
                isInput={true}
                label="Keyword 1"
                placeholder={t('home.inputPlaceholder')}
                value={Keyword1}
                onChangeText={setKeyword1}
              />
              <FrameInput
                isInput={true}
                label="Keyword 2"
                placeholder={t('home.inputPlaceholder')}
                value={Keyword2}
                onChangeText={setKeyword2}
              />
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      <Footer
        buttons={[
          {
            icon: BackIcon,
            onPress: () => onPressGenerator(),
          },
        ]}
        />
    </View>
  );
};

const styles = (colors: any) =>
  StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background, 
  },
  contentContainer: {
    flex: 1,
  },
  innerContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16,
  },
  keyboardVisibleContainer: {
    paddingBottom: 20, 
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
  },
});

export default Home;
