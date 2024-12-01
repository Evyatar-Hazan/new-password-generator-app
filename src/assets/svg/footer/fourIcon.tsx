import React from 'react';
import { GestureResponderEvent, TouchableOpacity } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { useTheme } from '../../../themes/ThemeContext';
import { themes } from '../../../themes/themes';

interface FourIconProps {
  onPress?: (event: GestureResponderEvent) => void;
}

const FourIcon: React.FC<FourIconProps> = ({ onPress }) => {
  const { theme } = useTheme();
  const colors = themes[theme];
  return (
    <TouchableOpacity style={{ marginHorizontal: 15 }} onPress={onPress}>
      <Svg width={48} height={48} viewBox="0 0 122.88 122.88" fill="none">
        <Path
          d="M41.76,77.14V67.51L60.15,38.6h8.74V51.45h-5L54,67.16v.35H81.12v9.63ZM64,84.28V74.2l.27-4.2V38.6h11.6V84.28Z"
          fill={colors.text}
        />
      </Svg>
    </TouchableOpacity>
  );
};

export default FourIcon;