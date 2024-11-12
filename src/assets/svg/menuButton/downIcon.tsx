import React from 'react';
import { GestureResponderEvent, TouchableOpacity } from 'react-native';
import { Path, Svg } from 'react-native-svg';

interface DownIconProps {
  onPress?: (event: GestureResponderEvent) => void;
  fillColor?: string;
}

const DownIcon: React.FC<DownIconProps> = ({ onPress, fillColor = 'black' }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Svg width={24} height={24} viewBox="0 0 512 512">
        <Path
          d="M347.582,198.248L256,289.83l-91.582-91.582c-8.331-8.331-21.839-8.331-30.17,0c-8.331,8.331-8.331,21.839,0,30.17 
          l106.667,106.667c8.331,8.331,21.839,8.331,30.17,0l106.667-106.667c8.331-8.331,8.331-21.839,0-30.17 
          C369.42,189.917,355.913,189.917,347.582,198.248z"
          fill={fillColor}
        />
      </Svg>
    </TouchableOpacity>
  );
};

export default DownIcon;
