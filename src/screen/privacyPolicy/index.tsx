import React from 'react';
import {useTranslation} from 'react-i18next';
import {Linking, StyleSheet, View} from 'react-native';
import {RootStackParamList, ScreenEnum} from '../../navigation';
import {StackNavigationProp} from '@react-navigation/stack';
import ScrollBar from '../../component/scrollBar';
import FrameFooter from '../../component/frameFooter';
import BackIcon from '../../assets/svg/back';
import TextBox from '../../component/text';
import Card from '../../component/card/Card';

type PrivacyPolicyScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  ScreenEnum.PrivacyPolicy
>;

const PrivacyPolicy: React.FC<{
  navigation: PrivacyPolicyScreenNavigationProp;
}> = ({navigation}) => {
  const {t} = useTranslation();

  const openSourceDocument = () => {
    Linking.openURL(
      'https://docs.google.com/document/d/14S4NDZgweh8Iin8ILHM1xWVVNOqVZ0XlfDtiVYTinSQ/edit?usp=sharing',
    );
  };

  return (
    <View style={styles.container}>
      <ScrollBar>
        <Card
          content={
            t('privacyPolicy.lastUpdate.description') +
            t('privacyPolicy.lastUpdate.details')
          }
        />

        <Card content={t('privacyPolicy.owner')} />

        <Card
          title={t('privacyPolicy.dataCollection.description')}
          content={t('privacyPolicy.dataCollection.details')}
        />

        <Card
          title={t('privacyPolicy.accountCreation.description')}
          content={t('privacyPolicy.accountCreation.details')}
        />

        <Card
          title={t('privacyPolicy.internetConnection.description')}
          content={t('privacyPolicy.internetConnection.details')}
        />

        <Card
          title={t('privacyPolicy.advertising.description')}
          content={t('privacyPolicy.advertising.details')}
        />

        <Card
          title={t('privacyPolicy.security.description')}
          content={t('privacyPolicy.security.details')}
        />

        <Card
          title={t('privacyPolicy.childrenPrivacy.description')}
          content={t('privacyPolicy.childrenPrivacy.details')}
        />

        <Card
          title={t('privacyPolicy.changes.description')}
          content={t('privacyPolicy.changes.details')}
        />

        <Card
          title={t('privacyPolicy.contact.description')}
          content={t('privacyPolicy.contact.details')}
          links={[{text: t('privacyPolicy.contact.emailName'), url: t('privacyPolicy.contact.email')}]}
        />

        <Card
          content={t('privacyPolicy.sourceDocument.description')}
          links={[{text: t('general.privacyPolicy'), url: t('privacyPolicy.sourceDocument.link')}]}
        />

      </ScrollBar>
      <FrameFooter
        mapRenderButton={[
          {IconComponent: BackIcon, onPress: () => navigation.goBack()},
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
