import React from 'react';
import {GestureResponderEvent, TouchableOpacity} from 'react-native';
import {Path, Svg} from 'react-native-svg';

interface BackIconProps {
  onPress?: (event: GestureResponderEvent) => void;
}

const BackIcon: React.FC<BackIconProps> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{marginHorizontal: 15}}>
      <Svg width={24} height={24} viewBox="0 0 24 24">
        <Path fill={'black'} d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
      </Svg>
    </TouchableOpacity>
  );
};

export default BackIcon;
