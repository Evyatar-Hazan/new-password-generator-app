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
          d="M256,0C114.618,0,0,114.618,0,256s114.618,256,256,256s256-114.618,256-256S397.382,0,256,0z M256,469.333 
          c-117.818,0-213.333-95.515-213.333-213.333S138.182,42.667,256,42.667S469.333,138.182,469.333,256S373.818,469.333,256,469.333 z"
          fill={fillColor}
        />
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
