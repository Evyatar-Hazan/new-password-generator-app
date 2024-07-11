import React from 'react';
import {GestureResponderEvent, TouchableOpacity} from 'react-native';
import {Path, Svg} from 'react-native-svg';

interface MenuIconProps {
  onPress?: (event: GestureResponderEvent) => void;
}

const MenuIcon: React.FC<MenuIconProps> = ({ onPress }) => {
  return (
    <TouchableOpacity style={{marginHorizontal: 15}} onPress={onPress}>
      <Svg width={24} height={24} viewBox="0 0 24 24">
        <Path
          fill={'black'}
          d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
        />
      </Svg>
    </TouchableOpacity>
  );
};

export default MenuIcon;
