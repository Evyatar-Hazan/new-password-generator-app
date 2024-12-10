import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {View, StyleSheet, Text} from 'react-native';
import FrameInput from '../../component/frameInput';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList, ScreenEnum} from '../../navigation';
import {RouteProp} from '@react-navigation/native';
import {
  extractLetters,
  combineNumbersAndLetters,
  transformToUpperCase,
  transformToSign,
  extractNumbers,
} from 'password-generator-npm';
import Footer from '../../component/footerButton';
import {useTheme} from '../../themes/ThemeContext';
import {themes} from '../../themes/themes';
import RenderIcon from '../../assets/svg/icon';
import {IconsEnum} from '../../assets/svg/icon/iconsMap';

type HubScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  ScreenEnum.Hub
>;
type HubScreenRouteProp = RouteProp<RootStackParamList, 'Hub'>;

type HubProps = {
  navigation: HubScreenNavigationProp;
  route: HubScreenRouteProp;
};
const Hub: React.FC<HubProps> = ({navigation, route}) => {
  const {t} = useTranslation();
  const {theme} = useTheme();
  const colors = themes[theme];
  const {Keyword1, Keyword2} = route.params || {};
  const KeywordArr = [Keyword1 || '', Keyword2 || ''];
  const [numCharacters, setNumCharacters] = useState<number>(8);

  const NumButton = (num: number) => {
    return <Text style={styles(colors).numButton}>{num}</Text>;
  };

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
          {icon: () => NumButton(4), onPress: () => setNumCharacters(4)},
          {
            icon: () => NumButton(8),
            onPress: () => setNumCharacters(8),
          },
          {icon: () => NumButton(12), onPress: () => setNumCharacters(12)},
          {
            icon: () => <RenderIcon name={IconsEnum.PasswordLength} />,
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
    numButton: {
      textAlign: 'center',
      fontSize: 30,
      fontWeight: 'bold',
      fontFamily: 'Roboto',
      color: colors.text,
    },
  });

export default Hub;
