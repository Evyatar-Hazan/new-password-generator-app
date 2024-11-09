import React from 'react';
import {GestureResponderEvent, TouchableOpacity} from 'react-native';
import {Path, Svg} from 'react-native-svg';

interface AboutTheAppIconProps {
  onPress?: (event: GestureResponderEvent) => void;
}

const AboutTheAppIcon: React.FC<AboutTheAppIconProps> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Svg width={20} height={20} viewBox="0 0 24 24">
        <Path
          fill={'black'}
          d="M 12 2 C 10.343 2 9 3.343 9 5 C 9 6.657 10.343 8 12 8 C 13.657 8 15 6.657 15 5 C 15 3.343 13.657 2 12 2 z M 9 10 A 1.0001 1.0001 0 1 0 9 12 L 10 12 L 10 20 L 9 20 A 1.0001 1.0001 0 1 0 9 22 L 15 22 A 1.0001 1.0001 0 1 0 15 20 L 14 20 L 14 11 C 14 10.448 13.552 10 13 10 L 11 10 L 9 10 z"
        />
      </Svg>
    </TouchableOpacity>
  );
};



export default AboutTheAppIcon;