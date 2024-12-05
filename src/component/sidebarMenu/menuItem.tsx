import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';

interface MenuItemProps {
  icon: React.ReactNode;
  secondaryIcon?: React.ReactNode;
  switchIcon?: React.ReactNode;
  text: string;
  onPress?: () => void;
  isRTL: boolean;
  textColor: string;
  textStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
}

const MenuItem: React.FC<MenuItemProps> = ({
  icon,
  secondaryIcon,
  switchIcon,
  text,
  onPress,
  isRTL,
  textColor,
  textStyle,
  containerStyle,
  children,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles(isRTL).container, containerStyle]}
      activeOpacity={0.7}
      accessibilityRole="button"
      accessibilityLabel={text}
    >
      <View style={styles(isRTL).content}>
        <View style={styles(isRTL).icon}>{icon}</View>
        <Text
          style={[styles(isRTL).text, { color: textColor }, textStyle]}
        >
          {text}
        </Text>
        {secondaryIcon && (
          <View style={styles(isRTL).secondaryIcon}>{secondaryIcon}</View>
        )}
        {switchIcon && <View>{switchIcon}</View>}
      </View>
      {children && <View style={styles(isRTL).children}>{children}</View>}
    </TouchableOpacity>
  );
};

const styles = (isRTL: boolean, children?: React.ReactNode) =>
  StyleSheet.create({
    container: {
      paddingVertical: 10,
      paddingHorizontal: 5,
    },
    content: {
      flexDirection: isRTL ? 'row-reverse' : 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    icon: {
      marginRight: isRTL ? 0 : 10,
      marginLeft: isRTL ? 10 : 0,
    },
    secondaryIcon: {
      marginLeft: isRTL ? 0 : 10,
      marginRight: isRTL ? 10 : 0,
    },
    text: {
      fontSize: 16,
      flex: 1,
      textAlign: isRTL ? 'right' : 'left',
    },
    children: {
      marginTop: children ? 10 : 0,
      paddingLeft: isRTL ? 0 : 20,
      paddingRight: isRTL ? 20 : 0,
    },
  });

export default MenuItem;
