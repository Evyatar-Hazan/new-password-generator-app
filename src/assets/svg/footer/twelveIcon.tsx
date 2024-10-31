import React from 'react';
import { GestureResponderEvent, TouchableOpacity } from 'react-native';
import { Svg, Path } from 'react-native-svg';

interface TwelveIconProps {
  onPress?: (event: GestureResponderEvent) => void;
}

const TwelveIcon: React.FC<TwelveIconProps> = ({ onPress }) => {
  return (
    <TouchableOpacity style={{ marginHorizontal: 15 }} onPress={onPress}>
      <Svg width={48} height={48} viewBox="0 0 122.88 122.88" fill="none">
        <Path
          d="M51.49,38.9V84.59H39.09V50.33h-.26l-10,6V45.78L40.07,38.9ZM59,84.59V75.67L76,61.57A38.24,38.24,0,0,0,79,58.93a10.46,10.46,0,0,0,1.87-2.55,6.46,6.46,0,0,0,.66-2.92,5.73,5.73,0,0,0-.75-3,5,5,0,0,0-2.07-1.92,6.3,6.3,0,0,0-3-.68,6.38,6.38,0,0,0-3,.69,4.66,4.66,0,0,0-2,2,6.76,6.76,0,0,0-.71,3.25H58.1a15.37,15.37,0,0,1,2.16-8.3,14.13,14.13,0,0,1,6.11-5.35,21.23,21.23,0,0,1,9.26-1.87A23.47,23.47,0,0,1,85.14,40,14.1,14.1,0,0,1,91.36,45a12.62,12.62,0,0,1,2.2,7.42,13.16,13.16,0,0,1-1.09,5.23,21.67,21.67,0,0,1-3.92,5.75,81.14,81.14,0,0,1-8,7.49l-4.29,3.57v.27H94.05v9.9Z"
          fill="#000000"
        />
      </Svg>
    </TouchableOpacity>
  );
};

export default TwelveIcon;