import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Animated, StyleSheet} from 'react-native';
import {useTheme} from '../../themes/ThemeContext';
import {themes} from '../../themes/themes';
import {useRTL} from '../../i18n/RTLContext';

type FooterButton = {
  icon: React.FC<{onPress: () => void}>;
  onPress: () => void;
};

type FooterProps = {
  buttons: FooterButton[];
  defaultFocusedIndex?: number;
};

const Footer: React.FC<FooterProps> = ({buttons, defaultFocusedIndex = 0}) => {
  const {theme} = useTheme();
  const colors = themes[theme];
  const {isRTL} = useRTL();
  const [focusedIndex, setFocusedIndex] = useState<number>(defaultFocusedIndex);
  const [animations] = useState<Animated.Value[]>(
    (isRTL ? [...buttons].reverse() : buttons).map(() => new Animated.Value(0)),
  );

  useEffect(() => {
    if (focusedIndex !== null) {
      animations.forEach((animation, i) => {
        Animated.timing(animation, {
          toValue: i === focusedIndex ? 1 : 0,
          duration: 300,
          useNativeDriver: true,
        }).start();
      });
    }
  }, [focusedIndex]);

  const handlePress = (index: number, onPress: () => void) => {
    setFocusedIndex(index);
    onPress();
  };

  return (
    <View style={styles(colors).footer}>
      {(isRTL ? [...buttons].reverse() : buttons).map((button, index) => {
        const actualIndex = isRTL ? buttons.length - 1 - index : index;

        const translateY = animations[actualIndex].interpolate({
          inputRange: [0, 1],
          outputRange: [0, -30],
        });

        const backgroundColor = animations[actualIndex].interpolate({
          inputRange: [0, 1],
          outputRange: ['transparent', colors.mainPurple],
        });

        return (
          <Animated.View
            key={index}
            style={[
              styles(colors).buttonContainer,
              {transform: [{translateY}]},
            ]}>
            {focusedIndex === actualIndex && (
              <View style={styles(colors).oval} />
            )}
            <Animated.View
              style={[
                styles(colors).button,
                {backgroundColor: backgroundColor as any},
              ]}>
              <TouchableOpacity
                onPress={() => handlePress(actualIndex, button.onPress)}>
                <button.icon
                  onPress={() => handlePress(actualIndex, button.onPress)}
                />
              </TouchableOpacity>
            </Animated.View>
          </Animated.View>
        );
      })}
    </View>
  );
};

const styles = (colors: any) =>
  StyleSheet.create({
    footer: {
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      paddingHorizontal: 15,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      backgroundColor: colors.mainLightPurple,
      paddingVertical: 10,
      height: 70,
    },
    buttonContainer: {
      marginHorizontal: 5,
      position: 'relative',
    },
    button: {
      borderRadius: 50,
      width: 70,
      height: 70,
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 2,
    },
    oval: {
      width: 100,
      height: 50,
      backgroundColor: 'gray',
      borderBottomLeftRadius: 50,
      borderBottomRightRadius: 50,
      position: 'absolute',
      bottom: -10,
      left: -15,
      zIndex: 1,
      opacity: 0.4,
    },
  });

export default Footer;
