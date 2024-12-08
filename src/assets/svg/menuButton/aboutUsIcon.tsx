import React from 'react';
import {GestureResponderEvent, TouchableOpacity} from 'react-native';
import {Path, Svg} from 'react-native-svg';
import { useTheme } from '../../../themes/ThemeContext';
import { themes } from '../../../themes/themes';

interface AboutUsIconProps {
  onPress?: (event: GestureResponderEvent) => void;
}

const AboutUsIcon: React.FC<AboutUsIconProps> = ({ onPress }) => {
  const { theme } = useTheme();
  const colors = themes[theme];
  return (
    <TouchableOpacity onPress={onPress}>
      <Svg width={20} height={20} viewBox="0 0 24 24">
        <Path
          fill={colors.text}
          d="M 4.0097656 3 C 2.9179106 3 2.0097656 3.9049841 2.0097656 4.9980469 L 2 23 L 6 19 L 20 19 C 21.093063 19 22 18.093063 22 17 L 22 5 C 22 3.9069372 21.093063 3 20 3 L 4.0097656 3 z M 4.0097656 5 L 20 5 L 20 17 L 5.171875 17 L 4.0039062 18.167969 L 4.0097656 5 z M 11 7 L 11 9 L 13 9 L 13 7 L 11 7 z M 11 11 L 11 15 L 13 15 L 13 11 L 11 11 z"
        />
      </Svg>
    </TouchableOpacity>
  );
};

export default AboutUsIcon;
