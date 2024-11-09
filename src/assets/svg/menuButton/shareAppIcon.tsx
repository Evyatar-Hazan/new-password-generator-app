import React from 'react';
import { GestureResponderEvent, TouchableOpacity } from 'react-native';
import { Path, Svg } from 'react-native-svg';

interface ShareAppIconProps {
  onPress?: (event: GestureResponderEvent) => void;
}

const ShareAppIcon: React.FC<ShareAppIconProps> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Svg width={24} height={24} viewBox="0 0 24 24">
        <Path
          d="M18 3A2 2 0 1 0 18 7 2 2 0 1 0 18 3zM18 17A2 2 0 1 0 18 21 2 2 0 1 0 18 17zM6 10A2 2 0 1 0 6 14 2 2 0 1 0 6 10z"
          opacity="0.3"
          fill="black"
        />
        <Path
          d="M18 8c-1.7 0-3-1.3-3-3 0-1.7 1.3-3 3-3 1.7 0 3 1.3 3 3C21 6.7 19.7 8 18 8zM18 4c-.6 0-1 .4-1 1 0 .6.4 1 1 1 .6 0 1-.4 1-1C19 4.4 18.6 4 18 4zM18 22c-1.7 0-3-1.3-3-3 0-1.7 1.3-3 3-3 1.7 0 3 1.3 3 3C21 20.7 19.7 22 18 22zM18 18c-.6 0-1 .4-1 1 0 .6.4 1 1 1 .6 0 1-.4 1-1C19 18.4 18.6 18 18 18zM6 15c-1.7 0-3-1.3-3-3 0-1.7 1.3-3 3-3 1.7 0 3 1.3 3 3C9 13.7 7.7 15 6 15zM6 11c-.6 0-1 .4-1 1 0 .6.4 1 1 1 .6 0 1-.4 1-1C7 11.4 6.6 11 6 11z"
          fill="black"
        />
        <Path
          d="M7.1 7.5H17V9.5H7.1z"
          transform="rotate(-30.243 11.997 8.501)"
          fill="black"
        />
        <Path
          d="M11 10.6H13V20.5H11z"
          transform="rotate(-59.748 11.992 15.496)"
          fill="black"
        />
      </Svg>
    </TouchableOpacity>
  );
};

export default ShareAppIcon;
