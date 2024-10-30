import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Animated } from 'react-native';

interface FrameFooterProps {
  defaultRoundButtonIndex?: number;
  mapRenderButton: Array<{ IconComponent: React.FC; onPress: () => void }>;
}

const FrameFooter: React.FC<FrameFooterProps> = ({
  mapRenderButton,
  defaultRoundButtonIndex = 0,
}) => {
  const [roundButtonIndex, setRoundButtonIndex] = useState<number>(defaultRoundButtonIndex);
  const scaleAnimation = new Animated.Value(1);
  const opacityAnimation = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(opacityAnimation, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, []);

  const handlePress = (onPress: () => void, index: number) => {
    setRoundButtonIndex(index);
    Animated.sequence([
      Animated.timing(scaleAnimation, {
        toValue: 1.1,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnimation, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
    onPress();
  };

  const renderButton = (
    { IconComponent, onPress }: { IconComponent: React.FC; onPress: () => void },
    index: number
  ) => {
    const isRoundButton = index === roundButtonIndex;
    return (
      <TouchableOpacity
        key={index}
        style={isRoundButton ? styles.circleButtonContainer : styles.button}
        onPress={() => handlePress(onPress, index)}
      >
        {isRoundButton && <View style={styles.oval} />}
        <Animated.View
          style={[
            isRoundButton ? styles.circleButton : styles.button,
            isRoundButton && { transform: [{ scale: scaleAnimation }] },
          ]}
        >
          <IconComponent />
        </Animated.View>
      </TouchableOpacity>
    );
  };

  return (
      <Animated.View style={[styles.container, { opacity: opacityAnimation }]}>
      <View style={styles.footerBackground}>
        <View style={styles.buttonsContainer}>
          {mapRenderButton.map((button, index) => renderButton(button, index))}
        </View>
      </View>
    </Animated.View>
  );
};


const styles = StyleSheet.create({
  container: {
    position: 'relative',
    alignItems: 'center',
  },
  footerBackground: {
    width: '100%',
    height: 80,
    backgroundColor: '#B88AE8',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '100%',
    paddingHorizontal: 20,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleButtonContainer: {
    alignItems: 'center',
  },
  circleButton: {
    top: -75,
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#6200EE',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 8, // הגברת הצל לאפקט עגול
    elevation: 8,
    position: 'absolute',
  },
  oval: {
    width: 110,
    height: 50,
    backgroundColor: 'gray',
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80,
    position: 'absolute',
    top: -40,
    opacity: 0.7, // הגברת השקיפות לאפקט עדין יותר
  },
});


export default FrameFooter;
