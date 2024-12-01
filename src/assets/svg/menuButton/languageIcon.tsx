import React from 'react';
import { GestureResponderEvent, TouchableOpacity } from 'react-native';
import { Path, Svg, Circle } from 'react-native-svg';
import { useTheme } from '../../../themes/ThemeContext';
import { themes } from '../../../themes/themes';

interface LanguageIconProps {
  onPress?: (event: GestureResponderEvent) => void;
}

const LanguageIcon: React.FC<LanguageIconProps> = ({ onPress }) => {
  const { theme } = useTheme();
  const colors = themes[theme];
  return (
    <TouchableOpacity onPress={onPress}>
      <Svg width={24} height={24} viewBox="-2.4 -2.4 28.8 28.8">
        <Circle cx="12" cy="12" r="10" stroke={colors.text}  strokeWidth="1" fill="none" />
        <Path
          d="M12,22 C14.6666667,19.5757576 16,16.2424242 16,12 C16,7.75757576 14.6666667,4.42424242 12,2 C9.33333333,4.42424242 8,7.75757576 8,12 C8,16.2424242 9.33333333,19.5757576 12,22 Z"
          stroke={colors.text} 
          strokeWidth="1"
          strokeLinecap="round"
          fill="none"
        />
        <Path
          d="M2.5 9L21.5 9M2.5 15L21.5 15"
          stroke={colors.text} 
          strokeWidth="1"
          strokeLinecap="round"
        />
      </Svg>
    </TouchableOpacity>
  );
};

export default LanguageIcon;
