import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';
import { RootStackParamList, ScreenEnum } from '../../navigation';
import { StackNavigationProp } from '@react-navigation/stack';
import ScrollBar from '../../component/scrollBar';
import FrameFooter from '../../component/frameFooter';
import BackIcon from '../../assets/svg/back';
import TextBox from '../../component/text';

type AboutUsScreenNavigationProp = StackNavigationProp<RootStackParamList, ScreenEnum.AboutUs>;

const AboutUs: React.FC<{ navigation: AboutUsScreenNavigationProp }> = ({ navigation }) => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <ScrollBar>
        <TextBox 
          gapReduction={5}
          title={t('aboutUs.welcome.description')} 
          subText={t('aboutUs.welcome.details')}
        />
        <TextBox 
          gapReduction={5}
          title={t('aboutUs.inspiration.description')} 
          subText={t('aboutUs.inspiration.details')}
        />
        <TextBox 
          gapReduction={5}
          title={t('aboutUs.developmentJourney.description')} 
          subText={t('aboutUs.developmentJourney.details')}
        />
        <TextBox 
          gapReduction={5}
          title={t('aboutUs.featuresAndBenefits.description')} 
          subText={t('aboutUs.featuresAndBenefits.details')}
        />
        <TextBox 
          gapReduction={5}
          title={t('aboutUs.futurePlans.description')} 
          subText={t('aboutUs.futurePlans.details')}
        />
        <TextBox 
          gapReduction={5}
          title={t('aboutUs.thankYou.description')} 
          subText={t('aboutUs.thankYou.details')}
        />
        <TextBox 
          gapReduction={5}
          title={t('aboutUs.getInTouch.description')} 
          subText={t('aboutUs.getInTouch.details')}
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

export default AboutUs; 
