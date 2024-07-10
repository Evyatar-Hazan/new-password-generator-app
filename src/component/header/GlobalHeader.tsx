import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {styles} from './styles';

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
        <TouchableOpacity style={{marginHorizontal: 15}} onPress={toggleMenu}>
          <Svg width={24} height={24} viewBox="0 0 24 24">
            <Path fill={'black'} d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
          </Svg>
        </TouchableOpacity>
      </View>
      <View style={styles.headerTitleContainer}>
        <Text style={styles.headerTitle}>{title}</Text>
      </View>
      <View style={styles.sideContainer}>
        {showBackButton && (
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerButtonContainer}>
            <Svg width={24} height={24} viewBox="0 0 24 24">
              <Path fill={'black'} d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </Svg>
          </TouchableOpacity>
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
