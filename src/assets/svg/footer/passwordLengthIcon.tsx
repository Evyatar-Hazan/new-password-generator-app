import React from 'react';
import { GestureResponderEvent, TouchableOpacity } from 'react-native';
import { Svg, Line, Circle, Text, Path } from 'react-native-svg';

interface PasswordLengthIconProps {
  onPress?: (event: GestureResponderEvent) => void;
}

const PasswordLengthIcon: React.FC<PasswordLengthIconProps> = ({ onPress }) => {
  return (
    <TouchableOpacity style={{ marginHorizontal: 15 }} onPress={onPress}>
      <Svg width={48} height={48} viewBox="0 0 122.88 122.88" fill="none">
        {/* Shorter horizontal line representing the password length slider */}
        <Line x1="25" y1="60" x2="90" y2="60" stroke="#000" strokeWidth="4" />

        {/* Slider handle representing the adjustable length */}
        <Circle cx="60" cy="60" r="6" fill="#000" />

        {/* Small ticks representing different length options (1 to 20) */}
        <Circle cx="25" cy="60" r="2" fill="#000" />
        <Circle cx="35" cy="60" r="2" fill="#000" />
        <Circle cx="45" cy="60" r="2" fill="#000" />
        <Circle cx="55" cy="60" r="2" fill="#000" />
        <Circle cx="65" cy="60" r="2" fill="#000" />
        <Circle cx="75" cy="60" r="2" fill="#000" />
        <Circle cx="85" cy="60" r="2" fill="#000" />
        <Circle cx="95" cy="60" r="2" fill="#000" />
        <Circle cx="105" cy="60" r="2" fill="#000" />

        {/* Range text below the slider */}
        <Text x="60" y="80" textAnchor="middle" fontSize="10" fill="#000">1-20</Text>

        {/* Pencil icon to indicate editing */}
        <Path
          d="M88.4,12.32l-8.28-8.32c-1.14-1.14-2.99-1.14-4.14,0l-41.16,41.16c-0.65,0.65-1.08,1.46-1.23,2.36l-3.96,22.4c-0.23,1.34,0.3,2.67,1.15,3.59c0.92,0.99,2.33,1.38,3.56,0.96l22.4-3.96c0.91-0.15,1.72-0.58,2.36-1.23l41.16-41.16C89.54,15.31,89.54,13.46,88.4,12.32z M83.78,17.38l2.87,2.87l-4.34,4.34l-2.87-2.87L83.78,17.38z"
          fill="#000"
          transform="translate(10, 10) scale(0.7)"
        />
      </Svg>
    </TouchableOpacity>
  );
};

export default PasswordLengthIcon;
