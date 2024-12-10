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
import {RootStackParamList, ScreenEnum} from '../../navigation';
import {StackNavigationProp} from '@react-navigation/stack';
import Card from '../card/Card';
import {useTheme} from '../../themes/ThemeContext';
import {themes} from '../../themes/themes';
import {useRTL} from '../../i18n/RTLContext';
import MenuItem from './menuItem';
import {IconsEnum} from '../../assets/svg/icon/iconsMap';
import RenderIcon from '../../assets/svg/icon';

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

  const toggleLen = () => {
    toggleRTL(!isRTL);
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

        <View style={styles(colors, isRTL).menuItemsContainer}>
          <MenuItem
            icon={
              <RenderIcon
                name={IconsEnum.PrivacyPolicy}
                onPress={() => onPressNavigation(ScreenEnum.PrivacyPolicy)}
              />
            }
            text={t('general.privacyPolicy')}
            onPress={() => onPressNavigation(ScreenEnum.PrivacyPolicy)}
            isRTL={isRTL}
            textColor={colors.text}
          />

          <MenuItem
            icon={
              <RenderIcon
                name={IconsEnum.AboutTheApp}
                onPress={() => onPressNavigation(ScreenEnum.AboutApp)}
              />
            }
            text={t('general.aboutApp')}
            onPress={() => onPressNavigation(ScreenEnum.AboutApp)}
            isRTL={isRTL}
            textColor={colors.text}
          />

          <MenuItem
            icon={
              <RenderIcon
                name={IconsEnum.AboutUs}
                onPress={() => onPressNavigation(ScreenEnum.AboutUs)}
              />
            }
            text={t('general.aboutUs')}
            onPress={() => onPressNavigation(ScreenEnum.AboutUs)}
            isRTL={isRTL}
            textColor={colors.text}
          />

          <MenuItem
            icon={
              <RenderIcon
                name={IconsEnum.ShareApp}
                onPress={() => onMenuItemPress('Share App')}
              />
            }
            text={t('menu.shareApp')}
            onPress={() => onMenuItemPress('Share App')}
            isRTL={isRTL}
            textColor={colors.text}
          />

          <MenuItem
            icon={
              <RenderIcon
                name={IconsEnum.SecurityKey}
                onPress={() => onMenuItemPress('Security Key')}
              />
            }
            text={t('menu.securityKey')}
            onPress={() => onMenuItemPress('Security Key')}
            isRTL={isRTL}
            textColor={colors.text}
          />

          <MenuItem
            icon={
              <RenderIcon name={IconsEnum.Settings} onPress={toggleSettings} />
            }
            secondaryIcon={
              <Animated.View
                style={{transform: [{rotate: rotationInterpolate}]}}>
                {<RenderIcon name={IconsEnum.Down} onPress={toggleSettings} />}
              </Animated.View>
            }
            text={t('menu.settings')}
            onPress={toggleSettings}
            isRTL={isRTL}
            textColor={colors.text}>
            {isSettingsOpen && (
              <>
                <View style={styles(colors, isRTL).settingsContainer}>
                  {/* Dark Mode */}
                  <MenuItem
                    icon={
                      <RenderIcon
                        name={IconsEnum.DarkMode}
                        onPress={toggleDarkMode}
                      />
                    }
                    text={t('menu.darkMode')}
                    isRTL={isRTL}
                    textColor={colors.text}
                    onPress={toggleDarkMode}
                    switchIcon={
                      <Switch
                        value={theme === 'light' ? false : true}
                        onValueChange={toggleDarkMode}
                        thumbColor={
                          theme === 'light'
                            ? colors.background
                            : colors.mainPurple
                        }
                        trackColor={{
                          false: colors.gray,
                          true: colors.mainLightPurple,
                        }}
                      />
                    }
                  />

                  {/* Language */}
                  <MenuItem
                    icon={
                      <RenderIcon
                        name={IconsEnum.Language}
                        onPress={toggleLen}
                      />
                    }
                    text={t('menu.language')}
                    isRTL={isRTL}
                    textColor={colors.text}
                    onPress={toggleLen}
                    switchIcon={
                      <Switch
                        value={isRTL}
                        onValueChange={toggleLen}
                        thumbColor={
                          isRTL ? colors.mainPurple : colors.background
                        }
                        trackColor={{
                          false: colors.gray,
                          true: colors.mainLightPurple,
                        }}
                      />
                    }
                  />
                </View>
              </>
            )}
          </MenuItem>
        </View>

        {/* Privacy Policy Notice */}
        <View style={styles(colors, isRTL).privacyContainer}>
          <TouchableOpacity style={styles(colors, isRTL).iconContainer}>
            {<RenderIcon name={IconsEnum.PrivacyPolicyNotice} />}
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
      borderRadius: 8,
      paddingVertical: 10,
      paddingHorizontal: 16,
      marginTop: 8,
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
