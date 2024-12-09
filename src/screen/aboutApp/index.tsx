import React from 'react';
import {useTranslation} from 'react-i18next';
import {StyleSheet, View} from 'react-native';
import {RootStackParamList, ScreenEnum} from '../../navigation';
import {StackNavigationProp} from '@react-navigation/stack';
import ScrollBar from '../../component/scrollBar';
import FrameInput from '../../component/frameInput';
import {
  extractLetters,
  combineNumbersAndLetters,
  transformToUpperCase,
  transformToSign,
  extractNumbers,
} from 'password-generator-npm';
import Card from '../../component/card/Card';
import Footer from '../../component/footerButton';
import {useTheme} from '../../themes/ThemeContext';
import {themes} from '../../themes/themes';
import RenderIcon from '../../assets/svg/icon';
import {IconsEnum} from '../../assets/svg/icon/iconsMap';

type AboutAppScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  ScreenEnum.AboutApp
>;

const AboutApp: React.FC<{navigation: AboutAppScreenNavigationProp}> = ({
  navigation,
}) => {
  const {t} = useTranslation();
  const {theme} = useTheme();
  const colors = themes[theme];
  const KeywordArr = [
    t('aboutApp.exampleUsage.personalWord.details'),
    t('aboutApp.exampleUsage.platformWord.details'),
  ];
  const numCharacters = 8;

  return (
    <View style={styles(colors).container}>
      <ScrollBar>
        <Card dominantTitle={t('aboutApp.gettingStarted.title')}>
          <Card
            title={t('aboutApp.gettingStarted.personalWord.description')}
            content={t('aboutApp.gettingStarted.personalWord.details')}
          />
          <Card
            title={t('aboutApp.gettingStarted.platformWord.description')}
            content={t('aboutApp.gettingStarted.platformWord.details')}
          />
        </Card>
        <Card dominantTitle={t('aboutApp.exampleUsage.title')}>
          <Card
            title={t('aboutApp.exampleUsage.personalWord.description')}
            content={t('aboutApp.exampleUsage.personalWord.details')}
          />
          <Card
            title={t('aboutApp.exampleUsage.platformWord.description')}
            content={t('aboutApp.exampleUsage.platformWord.details')}
          />
        </Card>
        <Card dominantTitle={t('aboutApp.generatedPasswords.title')}>
          <FrameInput
            isInput={false}
            label={t('hub.veryStrongTitle')}
            value={transformToSign(KeywordArr, numCharacters)}
            strengthType="veryStrong"
          />
          <FrameInput
            isInput={false}
            label={t('hub.strongTitle')}
            value={transformToUpperCase(KeywordArr, numCharacters)}
            strengthType="strong"
          />
          <FrameInput
            isInput={false}
            label={t('hub.mediumTitle')}
            value={combineNumbersAndLetters(KeywordArr, numCharacters)}
            strengthType="medium"
          />
          <FrameInput
            isInput={false}
            label={t('hub.weakTitle')}
            value={extractLetters(KeywordArr, numCharacters)}
            strengthType="weak"
          />
          <FrameInput
            isInput={false}
            label={t('hub.veryWeakTitle')}
            value={extractNumbers(KeywordArr, numCharacters)}
            strengthType="veryWeak"
          />
        </Card>
        <Card dominantTitle={t('aboutApp.securityTips.title')}>
          <Card
            title={t('aboutApp.securityTips.secret.description')}
            content={t('aboutApp.securityTips.secret.details')}
          />
          <Card
            title={t('aboutApp.securityTips.obvious.description')}
            content={t('aboutApp.securityTips.obvious.details')}
          />
          <Card
            title={t('aboutApp.securityTips.securityNeeds.description')}
            content={t('aboutApp.securityTips.securityNeeds.details')}
          />
        </Card>
        <Card dominantTitle={t('aboutApp.importantNote.title')}>
          <Card content={t('aboutApp.importantNote.Note.details')} />
          <Card content={t('aboutApp.importantNote.thanks.details')} />
        </Card>
      </ScrollBar>
      <Footer
        buttons={[
          {
            icon: () => (
              <RenderIcon
                name={IconsEnum.Back}
                onPress={() => navigation.goBack()}
                rtl
              />
            ),
            onPress: () => navigation.goBack(),
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
  });

export default AboutApp;
