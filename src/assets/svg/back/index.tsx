import React from 'react';
import {GestureResponderEvent, TouchableOpacity} from 'react-native';
import {Path, Svg} from 'react-native-svg';
import { useTheme } from '../../../themes/ThemeContext';
import { themes } from '../../../themes/themes';
import { useRTL } from '../../../i18n/RTLContext';

interface BackIconProps {
  onPress?: (event: GestureResponderEvent) => void;
}

const BackIcon: React.FC<BackIconProps> = ({ onPress }) => {
  const { theme } = useTheme();
  const colors = themes[theme];
  const {isRTL} = useRTL();
  return (
    <TouchableOpacity onPress={onPress} style={{marginHorizontal: 15}}>
      <Svg  width={24} height={24} viewBox="0 0 1024 1024"
      style={{
        transform: [{ scaleX: isRTL ? 1 : -1 }],
      }}>
        <Path fill={colors.text} 
        d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"/>
        <Path fill={colors.text} 
        d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"/>
      </Svg>
    </TouchableOpacity>
  );
};
export default BackIcon;
