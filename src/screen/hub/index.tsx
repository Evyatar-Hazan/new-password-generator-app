import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  View,
  StyleSheet,
} from 'react-native';
import FrameInput from '../../component/frameInput';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList, ScreenEnum } from '../../navigation';
import { RouteProp } from '@react-navigation/native';
import {
  extractLetters,
  combineNumbersAndLetters,
  transformToUpperCase,
  transformToSign,
  extractNumbers,
} from 'password-generator-npm';
import FourIcon from '../../assets/svg/footer/fourIcon';
import EightIcon from '../../assets/svg/footer/eightIcon';
import TwelveIcon from '../../assets/svg/footer/twelveIcon';
import PasswordLengthIcon from '../../assets/svg/footer/passwordLengthIcon';
import Footer from '../../component/footerButton';
import { useTheme } from '../../themes/ThemeContext';
import { themes } from '../../themes/themes';

type HubScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  ScreenEnum.Hub
>;
type HubScreenRouteProp = RouteProp<RootStackParamList, 'Hub'>;

type HubProps = {
  navigation: HubScreenNavigationProp;
  route: HubScreenRouteProp;
};
const Hub: React.FC<HubProps> = ({ navigation, route }) => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const colors = themes[theme];
  const { Keyword1, Keyword2 } = route.params || {};
  const KeywordArr = [Keyword1 || '', Keyword2 || ''];
  const [numCharacters, setNumCharacters] = useState<number>(8);

  const inputConfigs = [
    {
      label: t('hub.veryStrongTitle'),
      value: transformToSign(KeywordArr, numCharacters),
      strengthType: 'veryStrong',
    },
    {
      label: t('hub.strongTitle'),
      value: transformToUpperCase(KeywordArr, numCharacters),
      strengthType: 'strong',
    },
    {
      label: t('hub.mediumTitle'),
      value: combineNumbersAndLetters(KeywordArr, numCharacters),
      strengthType: 'medium',
    },
    {
      label: t('hub.weakTitle'),
      value: extractLetters(KeywordArr, numCharacters),
      strengthType: 'weak',
    },
    {
      label: t('hub.veryWeakTitle'),
      value: extractNumbers(KeywordArr, numCharacters),
      strengthType: 'veryWeak',
    },
  ];

  return (
    <>
      <View style={styles(colors).inputContainer}>
        {inputConfigs.map((config, index) => (
          <FrameInput
            key={index}
            isInput={false}
            label={config.label}
            value={config.value}
            strengthType={config.strengthType}
          />
        ))}
      </View>
      <Footer
        defaultFocusedIndex={1}
        buttons={[
          { icon: FourIcon, onPress: () => setNumCharacters(4) },
          { icon: EightIcon, onPress: () => setNumCharacters(8) },
          { icon: TwelveIcon, onPress: () => setNumCharacters(12) },
          {
            icon: PasswordLengthIcon,
            onPress: () => console.log('Define a meaningful action'),
          },
        ]}
      />
    </>
  );
};

const styles = (colors: any) =>
  StyleSheet.create({
    inputContainer: {
      flex: 1,
      justifyContent: 'flex-start',
      padding: 20,
      backgroundColor: colors.background,
      paddingTop: '10%',
    },
  });

export default Hub;
