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
  const {isRTL} = useRTL();
  const screenWidth = Dimensions.get('window').width;
  const slideAnim = useRef(new Animated.Value(-screenWidth * 0.75)).current;
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLanguageEnglish, setIsLanguageEnglish] = useState(true);
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
        toValue: -screenWidth * 0.75,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [isVisible, slideAnim, screenWidth]);

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
      <TouchableOpacity style={styles(colors).overlay} onPress={onClose} />
      <Animated.View
        style={[
          styles(colors).container,
          {transform: [{translateX: slideAnim}]},
        ]}>
        {/* Title and Icon */}
        <View style={styles(colors).titleContainer}>
          <Image source={titleIcon} style={styles(colors).titleIcon} />
          <Text style={styles(colors).title}>{t('general.appName')}</Text>
        </View>

        {/* Menu Items */}
        <View style={styles(colors).menuItemsContainer}>
          <TouchableOpacity
            onPress={() => onPressNavigation(ScreenEnum.PrivacyPolicy)}>
            <View style={styles(colors).menuItem}>
              <PrivacyPolicyIcon />
              <Text style={styles(colors).menuText}>
                {t('general.privacyPolicy')}
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => onPressNavigation(ScreenEnum.AboutApp)}>
            <View style={styles(colors).menuItem}>
              <AboutTheAppIcon />
              <Text style={styles(colors).menuText}>
                {t('general.aboutApp')}
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => onPressNavigation(ScreenEnum.AboutUs)}>
            <View style={styles(colors).menuItem}>
              <AboutUsIcon />
              <Text style={styles(colors).menuText}>
                {t('general.aboutUs')}
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => onMenuItemPress('Share App')}>
            <View style={styles(colors).menuItem}>
              <ShareAppIcon />
              <Text style={styles(colors).menuText}>{t('menu.shareApp')}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => onMenuItemPress('Security Key')}>
            <View style={styles(colors).menuItem}>
              <SecurityKeyIcon />
              <Text style={styles(colors).menuText}>
                {t('menu.securityKey')}
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={toggleSettings}>
            <View style={styles(colors).menuItem}>
              <View style={styles(colors).menuContent}>
                <SettingsIcon />
                <Text style={styles(colors).menuText}>
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
            <View style={styles(colors).settingsContainer}>
              {/* Dark Mode */}
              <View style={styles(colors).settingItem}>
                <DarkModeIcon />
                <Text style={styles(colors).settingText}>
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
              <View style={styles(colors).settingItem}>
                <LanguageIcon />
                <Text style={styles(colors).settingText}>
                  {t('menu.language')}
                </Text>
                <Switch
                  value={isLanguageEnglish}
                  onValueChange={value => setIsLanguageEnglish(value)}
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
        <View style={styles(colors).privacyContainer}>
          <TouchableOpacity style={styles(colors).iconContainer}>
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

const styles = (colors: any) =>
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
      left: 0,
      width: '75%',
      backgroundColor: colors.background,
      padding: 20,
      shadowColor: '#000',
      shadowOffset: {width: 2, height: 0},
      shadowOpacity: 0.5,
      shadowRadius: 10,
      elevation: 5,
      borderTopRightRadius: 20,
      borderBottomRightRadius: 20,
      borderWidth: 2,
      borderColor: colors.mainPurple,
    },
    titleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
    },
    titleIcon: {
      width: 40,
      height: 40,
      borderRadius: 20,
      marginRight: 10,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      color: colors.text,
    },
    menuItemsContainer: {
      flexGrow: 1,
    },
    menuContent: {
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1,
    },
    menuItem: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 10,
    },
    menuText: {
      fontSize: 16,
      marginLeft: 5,
      color: colors.text,
    },
    settingsContainer: {
      paddingLeft: 10,
      borderTopWidth: 1,
      borderColor: colors.mainLightPurple,
    },
    settingItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 10,
      paddingHorizontal: 5,
    },
    settingText: {
      fontSize: 16,
      flex: 1,
      marginLeft: 10,
      color: colors.text,
    },
    privacyContainer: {
      padding: 10,
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 20,
    },
    iconContainer: {
      marginRight: 8,
    },
    privacyText: {
      color: '#7D8792',
      fontSize: 14,
    },
  });

export default SidebarMenu;
