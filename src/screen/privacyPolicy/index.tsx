import React from 'react';
import { useTranslation } from 'react-i18next';
import { Linking, StyleSheet, View } from 'react-native';
import { RootStackParamList, ScreenEnum } from '../../navigation';
import { StackNavigationProp } from '@react-navigation/stack';
import ScrollBar from '../../component/scrollBar';
import FrameFooter from '../../component/frameFooter';
import BackIcon from '../../assets/svg/back';
import TextBox from '../../component/text';

type PrivacyPolicyScreenNavigationProp = StackNavigationProp<RootStackParamList, ScreenEnum.PrivacyPolicy>;

const PrivacyPolicy: React.FC<{ navigation: PrivacyPolicyScreenNavigationProp }> = ({ navigation }) => {
  const { t } = useTranslation();

  const openSourceDocument = () => {
    Linking.openURL(
      'https://docs.google.com/document/d/14S4NDZgweh8Iin8ILHM1xWVVNOqVZ0XlfDtiVYTinSQ/edit?usp=sharing',
    );
  };

  return (
    <View style={styles.container}>
      <ScrollBar>

      <TextBox subText={t('privacyPolicy.lastUpdate.description') + t('privacyPolicy.lastUpdate.details')}/>

      <TextBox subText={t('privacyPolicy.owner')}/>

        <TextBox 
          gapReduction={5}
          title={t('privacyPolicy.dataCollection.description')} 
          subText={t('privacyPolicy.dataCollection.details')}
        />

        <TextBox 
          gapReduction={5}
          title={t('privacyPolicy.accountCreation.description')} 
          subText={t('privacyPolicy.accountCreation.details')}
        />
        
        <TextBox 
          gapReduction={5}
          title={t('privacyPolicy.internetConnection.description')} 
          subText={t('privacyPolicy.internetConnection.details')} 
        />

         <TextBox 
          gapReduction={5}
          title={t('privacyPolicy.advertising.description')} 
          subText={t('privacyPolicy.advertising.details')}
        />

        <TextBox 
          gapReduction={5}
          title={t('privacyPolicy.security.description')} 
          subText={t('privacyPolicy.security.details')} 
        />

        <TextBox 
          gapReduction={5}
          title={t('privacyPolicy.childrenPrivacy.description')} 
          subText={t('privacyPolicy.childrenPrivacy.details')}
        />

        <TextBox 
          gapReduction={5}
          title={t('privacyPolicy.changes.description')} 
          subText={t('privacyPolicy.changes.details')}
        />

        <TextBox 
          gapReduction={5}
          title={t('privacyPolicy.contact.description')} 
          subText={t('privacyPolicy.contact.details')}
          linkText={t('privacyPolicy.contact.email')}
          onPress={() => Linking.openURL(`mailto:${t('privacyPolicy.contact.email')}`)}
        />

        <TextBox 
          gapReduction={5}
          subText={t('privacyPolicy.sourceDocument.description')}
          linkText={t('general.privacyPolicy')}
          onPress={openSourceDocument}
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

export default PrivacyPolicy; 
