import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';
import { RootStackParamList, ScreenEnum } from '../../navigation';
import { StackNavigationProp } from '@react-navigation/stack';
import ScrollBar from '../../component/scrollBar';
import BackIcon from '../../assets/svg/back';
import Card from '../../component/card/Card';
import Footer from '../../component/footerButton';
import { useTheme } from '../../themes/ThemeContext';
import { themes } from '../../themes/themes';

type AboutUsScreenNavigationProp = StackNavigationProp<RootStackParamList, ScreenEnum.AboutUs>;

const AboutUs: React.FC<{ navigation: AboutUsScreenNavigationProp }> = ({ navigation }) => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const colors = themes[theme];

  return (
    <View style={styles(colors).container}>
      <ScrollBar>
        <Card 
          dominantTitle={t('aboutUs.welcome.description')} 
          content={t('aboutUs.welcome.details')}
        />
        <Card 
          title={t('aboutUs.inspiration.description')} 
          content={t('aboutUs.inspiration.details')}
        />
        <Card 
          title={t('aboutUs.developmentJourney.description')} 
          content={t('aboutUs.developmentJourney.details')}
        />
        <Card
          title={t('aboutUs.featuresAndBenefits.description')} 
          content={t('aboutUs.featuresAndBenefits.details')}
        />
        <Card
          title={t('aboutUs.futurePlans.description')} 
          content={t('aboutUs.futurePlans.details')}
        />
        <Card
          title={t('aboutUs.thankYou.description')} 
          content={t('aboutUs.thankYou.details')}
        />
        <Card
          title={t('aboutUs.getInTouch.description')} 
          content={t('aboutUs.getInTouch.details')}
          links={[
            {text: t('privacyPolicy.contact.emailName'), url: t('privacyPolicy.contact.email')}, 
            {text: t('aboutUs.getInTouch.owner'), url: t('aboutUs.getInTouch.linkOwner')},
            {text: t('aboutUs.getInTouch.here'), url: t('aboutUs.getInTouch.link')}
          ]}
        />
      </ScrollBar>
        <Footer
        buttons={[
          {
            icon: BackIcon,
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

export default AboutUs; 
