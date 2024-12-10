import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {useRTL} from '../../i18n/RTLContext';
import SidebarMenu from '../sidebarMenu';
import {useTheme} from '../../themes/ThemeContext';
import {themes} from '../../themes/themes';
import styles from './styles';
import RenderIcon from '../../assets/svg/icon';
import {IconsEnum} from '../../assets/svg/icon/iconsMap';

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
  const {theme} = useTheme();
  const colors = themes[theme];
  const {isRTL} = useRTL();

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  const handleMenuItemPress = (item: string) => {
    setMenuVisible(false);
  };

  return (
    <View style={styles(colors, isRTL).headerContainer}>
      <View style={styles(colors, isRTL).sideContainer}>
        <RenderIcon name={IconsEnum.Menu} onPress={toggleMenu} />
      </View>
      <View style={styles(colors, isRTL).headerTitleContainer}>
        <Text style={styles(colors, isRTL).headerTitle}>{title}</Text>
      </View>
      <View style={styles(colors, isRTL).sideContainer}>
        {showBackButton && (
          <RenderIcon
            name={IconsEnum.Back}
            onPress={() => navigation.goBack()}
            rtl
          />
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
