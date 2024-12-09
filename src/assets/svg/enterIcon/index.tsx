import React from 'react';
import {GestureResponderEvent, TouchableOpacity} from 'react-native';
import {Path, Svg} from 'react-native-svg';
import { useTheme } from '../../../themes/ThemeContext';
import { themes } from '../../../themes/themes';

interface EnterIconProps {
  onPress?: (event: GestureResponderEvent) => void;
  isEnabled?: boolean;
}

const EnterIcon: React.FC<EnterIconProps> = ({ onPress, isEnabled = false }) => {
  const { theme } = useTheme();
  const colors = themes[theme];

  return (
    <TouchableOpacity onPress={onPress} style={{ marginHorizontal: 15 }}>
      <Svg
        width={28}
        height={28}
        viewBox="0 0 1024 1024"
        >
       <Path
  fill={colors.text}
  d="M512 960c-247.4 0-448-200.6-448-448S264.6 64 512 64s448 200.6 448 448-200.6 448-448 448zm0-64c212.08 0 384-171.92 384-384S724.08 128 512 128 128 299.92 128 512s171.92 384 384 384zm140-740c-20 0-40 10-40 30 0 10 10 20 20 20h40c10 0 20-10 20-20 0-20-20-30-40-30z"
/>
       {isEnabled ?  <Path
          fill={colors.text}
          d="M312 512l128 128 272-272c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-304 304c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0z"
        /> : <></>}
      </Svg>
    </TouchableOpacity>
  );
};
export default EnterIcon;

