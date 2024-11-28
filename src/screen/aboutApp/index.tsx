import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';
import { RootStackParamList, ScreenEnum } from '../../navigation';
import { StackNavigationProp } from '@react-navigation/stack';
import ScrollBar from '../../component/scrollBar';
import FrameFooter from '../../component/frameFooter';
import BackIcon from '../../assets/svg/back';
import TextBox from '../../component/text';
import FrameInput from '../../component/frameInput';
import { extractLetters, combineNumbersAndLetters, transformToUpperCase, transformToSign, extractNumbers } from 'password-generator-npm';

type AboutAppScreenNavigationProp = StackNavigationProp<RootStackParamList, ScreenEnum.AboutApp>;

const AboutApp: React.FC<{ navigation: AboutAppScreenNavigationProp }> = ({ navigation }) => {
  const { t } = useTranslation();
  const KeywordArr = [t("aboutApp.exampleUsage.personalWord.details"), t("aboutApp.exampleUsage.platformWord.details")];
  const numCharacters = 8

  return (
    <View style={styles.container}>
      <ScrollBar>
        <TextBox 
          gapReduction={5}
          title={t('aboutApp.gettingStarted.title')} 
        />
        <TextBox 
          gapReduction={5}
          title={t('aboutApp.gettingStarted.personalWord.description')} 
          subText={t('aboutApp.gettingStarted.personalWord.details')}
        />
        <TextBox 
          gapReduction={5}
          title={t('aboutApp.gettingStarted.platformWord.description')} 
          subText={t('aboutApp.gettingStarted.platformWord.details')}
        />
        <TextBox 
          gapReduction={5}
          title={t('aboutApp.exampleUsage.title')} 
        />
        <TextBox 
          gapReduction={5}
          title={t('aboutApp.exampleUsage.personalWord.description')} 
          subText={t('aboutApp.exampleUsage.personalWord.details')}
        />
        <TextBox 
          gapReduction={5}
          title={t('aboutApp.exampleUsage.platformWord.description')} 
          subText={t('aboutApp.exampleUsage.platformWord.details')}
        />
        <TextBox 
          gapReduction={5}
          title={t('aboutApp.generatedPasswords.title')} 
        />
        <FrameInput 
              isInput={false} 
              label={t("hub.veryStrongTitle")} 
              value={transformToSign(KeywordArr, numCharacters)} 
              strengthType="veryStrong"
            />
         <FrameInput 
              isInput={false} 
              label={t("hub.strongTitle")} 
              value={transformToUpperCase(KeywordArr, numCharacters)} 
              strengthType="strong"
            />
         <FrameInput
              isInput={false} 
              label={t("hub.mediumTitle")} 
              value={combineNumbersAndLetters(KeywordArr, numCharacters)} 
              strengthType="medium"
            />
             <FrameInput 
              isInput={false} 
              label={t("hub.weakTitle")} 
              value={extractLetters(KeywordArr, numCharacters)} 
              strengthType="weak"
            />
             <FrameInput 
              isInput={false} 
              label={t("hub.veryWeakTitle")} 
              value={extractNumbers(KeywordArr, numCharacters)} 
              strengthType="veryWeak"
            />
        <TextBox 
          gapReduction={5}
          title={t('aboutApp.securityTips.title')} 
        />
        <TextBox 
          gapReduction={5}
          title={t('aboutApp.securityTips.secret.description')} 
          subText={t('aboutApp.securityTips.secret.details')}
        />
        <TextBox 
          gapReduction={5}
          title={t('aboutApp.securityTips.obvious.description')} 
          subText={t('aboutApp.securityTips.obvious.details')}
        />
        <TextBox 
          gapReduction={5}
          title={t('aboutApp.securityTips.securityNeeds.description')} 
          subText={t('aboutApp.securityTips.securityNeeds.details')}
        />
        <TextBox 
          gapReduction={5}
          title={t('aboutApp.importantNote.title')} 
        />
        <TextBox 
          gapReduction={5}
          subText={t('aboutApp.importantNote.Note.details')}
        />
        <TextBox 
          gapReduction={5}
          subText={t('aboutApp.importantNote.thanks.details')}
        />
      </ScrollBar>
      <FrameFooter
        mapRenderButton={[
          { IconComponent: BackIcon, onPress: () => navigation.goBack() },
        ]}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AboutApp; 
