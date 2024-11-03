import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import MenuIcon from '../../assets/svg/menu';
import BackIcon from '../../assets/svg/back';
import { useRTL } from '../../i18n/RTLContext';
import SidebarMenu from '../sidebarMenu';

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
  const { isRTL } = useRTL();

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  const handleMenuItemPress = (item: string) => {
    setMenuVisible(false);
  };

  return (
    <View style={styles.headerContainer}>
      <View style={styles.sideContainer}>
        {isRTL ? (
          showBackButton && <BackIcon onPress={() => navigation.goBack()} />
        ) : (
          <MenuIcon onPress={toggleMenu} />
        )}
      </View>
      <View style={styles.headerTitleContainer}>
        <Text style={styles.headerTitle}>{title}</Text>
      </View>
      <View style={styles.sideContainer}>
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
      />
    </View>
  );
};

export default GlobalHeader;
