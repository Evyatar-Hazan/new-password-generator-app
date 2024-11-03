import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Switch, StyleSheet, Modal, Animated, Dimensions, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import titleIcon from '../../assets/images/appIcon/appIcon.jpeg';

interface SidebarMenuProps {
  isVisible: boolean;
  onClose: () => void;
  onMenuItemPress: (item: string) => void;
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({ isVisible, onClose, onMenuItemPress }) => {
  const screenWidth = Dimensions.get('window').width;
  const slideAnim = React.useRef(new Animated.Value(-screenWidth * 0.75)).current;
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLanguageEnglish, setIsLanguageEnglish] = useState(true);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  React.useEffect(() => {
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
  };

  return (
    <Modal
      visible={isVisible}
      animationType="none"
      transparent={true}
      onRequestClose={onClose}
    >
      <TouchableOpacity style={styles.overlay} onPress={onClose} />
      <Animated.View style={[styles.container, { transform: [{ translateX: slideAnim }] }]}>
        
        {/* Title and Icon */}
        <View style={styles.titleContainer}>
          <Image source={titleIcon} style={styles.titleIcon} />
          <Text style={styles.title}>Password Generator</Text>
        </View>

        {/* Menu Items */}
        <TouchableOpacity onPress={() => onMenuItemPress('Privacy Policy')}>
          <View style={styles.menuItem}>
            <Icon name="privacy-tip" size={24} color="#000" />
            <Text style={styles.menuText}>Privacy Policy</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => onMenuItemPress('About the App')}>
          <View style={styles.menuItem}>
            <Icon name="info" size={24} color="#000" />
            <Text style={styles.menuText}>About the App</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => onMenuItemPress('About Us')}>
          <View style={styles.menuItem}>
            <Icon name="group" size={24} color="#000" />
            <Text style={styles.menuText}>About Us</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => onMenuItemPress('Share App')}>
          <View style={styles.menuItem}>
            <Icon name="share" size={24} color="#000" />
            <Text style={styles.menuText}>Share App</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => onMenuItemPress('Security Key')}>
          <View style={styles.menuItem}>
            <Icon name="vpn-key" size={24} color="#000" />
            <Text style={styles.menuText}>Security Key</Text>
          </View>
        </TouchableOpacity>

        {/* Settings */}
        <TouchableOpacity onPress={toggleSettings}>
          <View style={styles.menuItem}>
            <Icon name="settings" size={24} color="#000" />
            <Text style={styles.menuText}>Settings</Text>
            <Icon name={isSettingsOpen ? 'expand-less' : 'expand-more'} size={24} color="#000" />
          </View>
        </TouchableOpacity>

        {/* Settings Options */}
        {isSettingsOpen && (
          <View style={styles.settingsContainer}>
            {/* Dark Mode */}
            <View style={styles.settingItem}>
              <Text style={styles.settingText}>Dark Mode</Text>
              <Switch
                value={isDarkMode}
                onValueChange={(value) => setIsDarkMode(value)}
              />
            </View>

            {/* Language */}
            <View style={styles.settingItem}>
              <Text style={styles.settingText}>Language</Text>
              <Switch
                value={isLanguageEnglish}
                onValueChange={(value) => setIsLanguageEnglish(value)}
              />
            </View>
          </View>
        )}

        {/* Close Button */}
        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
          <Text style={styles.closeButtonText}>Close Menu</Text>
        </TouchableOpacity>
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
    shadowOffset: { width: 2, height: 0 },
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
    borderRadius: 20, // Circular icon
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  menuText: {
    fontSize: 16,
    marginLeft: 10,
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
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#000',
    alignItems: 'center',
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#FFF',
    fontSize: 16,
  },
});

export default SidebarMenu;
