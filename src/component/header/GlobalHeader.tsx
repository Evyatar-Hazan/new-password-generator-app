import React, { useState } from 'react';
import { View, Text } from 'react-native';
import MenuIcon from '../../assets/svg/menu';
import BackIcon from '../../assets/svg/back';
import { useRTL } from '../../i18n/RTLContext';
import SidebarMenu from '../sidebarMenu';
import { useTheme } from '../../themes/ThemeContext';
import { themes } from '../../themes/themes';
import styles from './styles';

interface GlobalHeaderProps {
  title: string;
  showBackButton?: boolean;
  navigation: any;
}

const GlobalHeader: React.FC<GlobalHeaderProps> = ({
  title,
  showBackButton = false,
  navigation,
}) => {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const { theme } = useTheme();
  const colors = themes[theme];
  const { isRTL } = useRTL();

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  const handleMenuItemPress = (item: string) => {
    setMenuVisible(false);
  };

  return (
    <View style={styles(colors).headerContainer}>
      <View style={styles(colors).sideContainer}>
        {isRTL ? (
          showBackButton && <BackIcon onPress={() => navigation.goBack()} />
        ) : (
          <MenuIcon onPress={toggleMenu} />
        )}
      </View>
      <View style={styles(colors).headerTitleContainer}>
        <Text style={styles(colors).headerTitle}>{title}</Text>
      </View>
      <View style={styles(colors).sideContainer}>
        {isRTL ? (
          <MenuIcon onPress={toggleMenu} />
        ) : (
          showBackButton && <BackIcon onPress={() => navigation.goBack()} />
        )}
      </View>
      <SidebarMenu
        isVisible={isMenuVisible}
        onClose={toggleMenu}
        onMenuItemPress={handleMenuItemPress}
        navigation={navigation}
      />
    </View>
  );
};

export default GlobalHeader;
