import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {styles} from './styles';
import MenuIcon from '../../assets/svg/menu';
import BackIcon from '../../assets/svg/back';

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

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  return (
    <View style={styles.headerContainer}>
      <View style={styles.sideContainer}>
        <MenuIcon onPress={toggleMenu} />
      </View>
      <View style={styles.headerTitleContainer}>
        <Text style={styles.headerTitle}>{title}</Text>
      </View>
      <View style={styles.sideContainer}>
        {showBackButton && (
          <BackIcon onPress={() => navigation.goBack()} />
        )}
      </View>
      {/* Uncomment and implement your SideMenu component */}
      {/* <SideMenu
        isVisible={isMenuVisible}
        onClose={toggleMenu}
        onMenuItemPress={toggleMenu}
        navigation={navigation}
      /> */}
    </View>
  );
};

export default GlobalHeader;
