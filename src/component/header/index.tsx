import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {styles} from './styles';

interface CustomHeaderButtonProps {
  navigation: any;
}

const CustomHeaderButton: React.FC<CustomHeaderButtonProps> = ({
  navigation,
}) => {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  return (
    <>
      <TouchableOpacity style={{marginHorizontal: 15}} onPress={toggleMenu}>
        <Svg width={24} height={24} viewBox="0 0 24 24">
          <Path
            fill={'black'}
            d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
          />
        </Svg>
      </TouchableOpacity>
      {/* Uncomment and implement your SideMenu component */}
      {/* <SideMenu
        isVisible={isMenuVisible}
        onClose={toggleMenu}
        onMenuItemPress={toggleMenu}
        navigation={navigation}
      /> */}
    </>
  );
};

const CenteredHeaderTitle: React.FC<{title: string}> = ({title}) => {
  return (
    <View style={styles.headerTitleContainer}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

export {CustomHeaderButton, CenteredHeaderTitle};
