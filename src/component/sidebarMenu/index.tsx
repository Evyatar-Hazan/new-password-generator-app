import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Switch,
  StyleSheet,
  Modal,
  Animated,
  Dimensions,
  Image,
} from 'react-native';
import {useTranslation} from 'react-i18next';
import titleIcon from '../../assets/images/appIcon/appIcon.jpeg';
import {
  AboutTheAppIcon,
  AboutUsIcon,
  DarkModeIcon,
  DownIcon,
  LanguageIcon,
  PrivacyPolicyIcon,
  PrivacyPolicyNoticeIcon,
  SecurityKeyIcon,
  SettingsIcon,
  ShareAppIcon,
} from '../../assets/svg/menuButton';
import {RootStackParamList, ScreenEnum} from '../../navigation';
import {StackNavigationProp} from '@react-navigation/stack';
import Card from '../card/Card';
import {useTheme} from '../../themes/ThemeContext';
import {themes} from '../../themes/themes';
import {useRTL} from '../../i18n/RTLContext';

type SidebarMenuNavigationProp = StackNavigationProp<
  RootStackParamList,
  'PrivacyPolicy'
>;

interface SidebarMenuProps {
  isVisible: boolean;
  onClose: () => void;
  onMenuItemPress: (item: string) => void;
  navigation: SidebarMenuNavigationProp;
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({
  isVisible,
  onClose,
  onMenuItemPress,
  navigation,
}) => {
  const {t} = useTranslation();
  const {theme, setTheme} = useTheme();
  const colors = themes[theme];
  const {isRTL, toggleRTL} = useRTL();
  const screenWidth = Dimensions.get('window').width;
  const slideAnim = useRef(new Animated.Value(-screenWidth * 0.75)).current;
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const rotation = useRef(new Animated.Value(0)).current;

  const onPressNavigation = (screenName: any) => {
    navigation.navigate(screenName);
    onMenuItemPress('');
  };

  useEffect(() => {
    if (isVisible) {
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: isRTL ? screenWidth : -screenWidth * 0.75,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [isVisible, slideAnim, screenWidth, isRTL]);

  const toggleSettings = () => {
    setIsSettingsOpen(!isSettingsOpen);

    Animated.timing(rotation, {
      toValue: isSettingsOpen ? 0 : 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    setTheme(!isDarkMode ? 'dark' : 'light');
  };

  const rotationInterpolate = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  return (
    <Modal
      visible={isVisible}
      animationType="none"
      transparent={true}
      onRequestClose={onClose}>
      <TouchableOpacity
        style={styles(colors, isRTL).overlay}
        onPress={onClose}
      />
      <Animated.View
        style={[
          styles(colors, isRTL).container,
          {transform: [{translateX: slideAnim}]},
        ]}>
        {/* Title and Icon */}
        <View style={styles(colors, isRTL).titleContainer}>
          <Image source={titleIcon} style={styles(colors, isRTL).titleIcon} />
          <Text style={styles(colors, isRTL).title}>
            {t('general.appName')}
          </Text>
        </View>

        {/* Menu Items */}
        <View style={styles(colors, isRTL).menuItemsContainer}>
          <TouchableOpacity
            onPress={() => onPressNavigation(ScreenEnum.PrivacyPolicy)}>
            <View style={styles(colors, isRTL).menuItem}>
              <PrivacyPolicyIcon />
              <Text style={styles(colors, isRTL).menuText}>
                {t('general.privacyPolicy')}
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => onPressNavigation(ScreenEnum.AboutApp)}>
            <View style={styles(colors, isRTL).menuItem}>
              <AboutTheAppIcon />
              <Text style={styles(colors, isRTL).menuText}>
                {t('general.aboutApp')}
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => onPressNavigation(ScreenEnum.AboutUs)}>
            <View style={styles(colors, isRTL).menuItem}>
              <AboutUsIcon />
              <Text style={styles(colors, isRTL).menuText}>
                {t('general.aboutUs')}
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => onMenuItemPress('Share App')}>
            <View style={styles(colors, isRTL).menuItem}>
              <ShareAppIcon />
              <Text style={styles(colors, isRTL).menuText}>
                {t('menu.shareApp')}
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => onMenuItemPress('Security Key')}>
            <View style={styles(colors, isRTL).menuItem}>
              <SecurityKeyIcon />
              <Text style={styles(colors, isRTL).menuText}>
                {t('menu.securityKey')}
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={toggleSettings}>
            <View style={styles(colors, isRTL).menuItem}>
              <View style={styles(colors, isRTL).menuContent}>
                <SettingsIcon />
                <Text style={styles(colors, isRTL).menuText}>
                  {t('menu.settings')}
                </Text>
              </View>
              <Animated.View
                style={{transform: [{rotate: rotationInterpolate}]}}>
                <DownIcon />
              </Animated.View>
            </View>
          </TouchableOpacity>

          {/* Settings Options */}
          {isSettingsOpen && (
            <View style={styles(colors, isRTL).settingsContainer}>
              {/* Dark Mode */}
              <View style={styles(colors, isRTL).settingItem}>
                <DarkModeIcon />
                <Text style={styles(colors, isRTL).settingText}>
                  {t('menu.darkMode')}
                </Text>
                <Switch
                  value={theme === 'light' ? false : true}
                  onValueChange={toggleDarkMode}
                  thumbColor={
                    theme === 'light' ? colors.background : colors.mainPurple
                  }
                  trackColor={{
                    false: colors.gray,
                    true: colors.mainLightPurple,
                  }}
                />
              </View>

              {/* Language */}
              <View style={styles(colors, isRTL).settingItem}>
                <LanguageIcon />
                <Text style={styles(colors, isRTL).settingText}>
                  {t('menu.language')}
                </Text>
                <Switch
                  value={isRTL}
                  onValueChange={() => toggleRTL(isRTL ? false : true)}
                  thumbColor={isRTL ? colors.mainPurple : colors.background}
                  trackColor={{
                    false: colors.gray,
                    true: colors.mainLightPurple,
                  }}
                />
              </View>
            </View>
          )}
        </View>

        {/* Privacy Policy Notice */}
        <View style={styles(colors, isRTL).privacyContainer}>
          <TouchableOpacity style={styles(colors, isRTL).iconContainer}>
            <PrivacyPolicyNoticeIcon />
          </TouchableOpacity>
          <Card
            content={t('menu.privacyNotice')}
            links={[
              {
                text: t('general.privacyPolicy'),
                url: t('privacyPolicy.sourceDocument.link'),
              },
            ]}
          />
        </View>
      </Animated.View>
    </Modal>
  );
};

const styles = (colors: any, isRTL: boolean) =>
  StyleSheet.create({
    overlay: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      justifyContent: 'flex-start',
    },
    container: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      [isRTL ? 'right' : 'left']: 0,
      width: '75%',
      backgroundColor: colors.background,
      padding: 20,
      shadowColor: '#000',
      shadowOffset: {width: 2, height: 0},
      shadowOpacity: 0.5,
      shadowRadius: 10,
      elevation: 5,
      borderTopLeftRadius: !isRTL ? 0 : 20,
      borderTopRightRadius: !isRTL ? 20 : 0,
      borderBottomLeftRadius: !isRTL ? 0 : 20,
      borderBottomRightRadius: !isRTL ? 20 : 0,
      borderWidth: 2,
      borderColor: colors.mainPurple,
    },
    titleContainer: {
      flexDirection: isRTL ? 'row-reverse' : 'row',
      alignItems: 'center',
      marginBottom: 20,
    },
    titleIcon: {
      width: 40,
      height: 40,
      borderRadius: 20,
      marginRight: isRTL ? 0 : 10,
      marginLeft: isRTL ? 10 : 0,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      color: colors.text,
      textAlign: isRTL ? 'right' : 'left',
    },
    menuItemsContainer: {
      flexGrow: 1,
    },
    menuContent: {
      flexDirection: isRTL ? 'row-reverse' : 'row',
      alignItems: 'center',
      flex: 1,
    },
    menuItem: {
      flexDirection: isRTL ? 'row-reverse' : 'row',
      alignItems: 'center',
      paddingVertical: 10,
    },
    menuText: {
      fontSize: 16,
      marginLeft: isRTL ? 0 : 5,
      marginRight: isRTL ? 5 : 0,
      color: colors.text,
      textAlign: isRTL ? 'right' : 'left',
    },
    settingsContainer: {
      paddingLeft: isRTL ? 0 : 10,
      paddingRight: isRTL ? 10 : 0,
      borderTopWidth: 1,
      borderColor: colors.mainLightPurple,
    },
    settingItem: {
      flexDirection: isRTL ? 'row-reverse' : 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 10,
      paddingHorizontal: 5,
    },
    settingText: {
      fontSize: 16,
      flex: 1,
      marginLeft: isRTL ? 0 : 10,
      marginRight: isRTL ? 10 : 0,
      color: colors.text,
      textAlign: isRTL ? 'right' : 'left',
    },
    privacyContainer: {
      padding: 10,
      flexDirection: isRTL ? 'row-reverse' : 'row',
      alignItems: 'center',
      marginTop: 20,
    },
    iconContainer: {
      marginRight: isRTL ? 0 : 8,
      marginLeft: isRTL ? 8 : 0,
    },
  });

export default SidebarMenu;
