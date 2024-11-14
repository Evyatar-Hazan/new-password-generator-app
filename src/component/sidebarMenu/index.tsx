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

interface SidebarMenuProps {
  isVisible: boolean;
  onClose: () => void;
  onMenuItemPress: (item: string) => void;
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({
  isVisible,
  onClose,
  onMenuItemPress,
}) => {
  const {t} = useTranslation();
  const screenWidth = Dimensions.get('window').width;
  const slideAnim = useRef(new Animated.Value(-screenWidth * 0.75)).current;
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLanguageEnglish, setIsLanguageEnglish] = useState(true);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const rotation = useRef(new Animated.Value(0)).current;

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
      <TouchableOpacity style={styles.overlay} onPress={onClose} />
      <Animated.View
        style={[styles.container, {transform: [{translateX: slideAnim}]}]}>
        {/* Title and Icon */}
        <View style={styles.titleContainer}>
          <Image source={titleIcon} style={styles.titleIcon} />
          <Text style={styles.title}>{t('menu.title')}</Text>
        </View>

        {/* Menu Items */}
        <View style={styles.menuItemsContainer}>
          <TouchableOpacity onPress={() => onMenuItemPress('Privacy Policy')}>
            <View style={styles.menuItem}>
              <PrivacyPolicyIcon />
              <Text style={styles.menuText}>{t('menu.privacyPolicy')}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => onMenuItemPress('About the App')}>
            <View style={styles.menuItem}>
              <AboutTheAppIcon />
              <Text style={styles.menuText}>{t('menu.aboutApp')}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => onMenuItemPress('About Us')}>
            <View style={styles.menuItem}>
              <AboutUsIcon />
              <Text style={styles.menuText}>{t('menu.aboutUs')}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => onMenuItemPress('Share App')}>
            <View style={styles.menuItem}>
              <ShareAppIcon />
              <Text style={styles.menuText}>{t('menu.shareApp')}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => onMenuItemPress('Security Key')}>
            <View style={styles.menuItem}>
              <SecurityKeyIcon />
              <Text style={styles.menuText}>{t('menu.securityKey')}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={toggleSettings}>
            <View style={styles.menuItem}>
              <View style={styles.menuContent}>
                <SettingsIcon />
                <Text style={styles.menuText}>{t('menu.settings')}</Text>
              </View>
              <Animated.View
                style={{transform: [{rotate: rotationInterpolate}]}}>
                <DownIcon />
              </Animated.View>
            </View>
          </TouchableOpacity>

          {/* Settings Options */}
          {isSettingsOpen && (
            <View style={styles.settingsContainer}>
              {/* Dark Mode */}
              <View style={styles.settingItem}>
                <DarkModeIcon />
                <Text style={styles.settingText}>{t('menu.darkMode')}</Text>
                <Switch
                  value={isDarkMode}
                  onValueChange={value => setIsDarkMode(value)}
                />
              </View>

              {/* Language */}
              <View style={styles.settingItem}>
                <LanguageIcon />
                <Text style={styles.settingText}>{t('menu.language')}</Text>
                <Switch
                  value={isLanguageEnglish}
                  onValueChange={value => setIsLanguageEnglish(value)}
                />
              </View>
            </View>
          )}
        </View>

        {/* Privacy Policy Notice */}
        <View style={styles.privacyContainer}>
          <TouchableOpacity style={styles.iconContainer}>
            <PrivacyPolicyNoticeIcon />
          </TouchableOpacity>
          <Text style={styles.privacyText}>{t('menu.privacyNotice')}</Text>
        </View>
      </Animated.View>
    </Modal>
  );
};

const styles = StyleSheet.create({
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
    backgroundColor: '#FFF',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 0},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    borderWidth: 2,
    borderColor: '#6200EE',
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
  },
  settingsContainer: {
    paddingLeft: 10,
    borderTopWidth: 1,
    borderColor: '#E0E0E0',
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
