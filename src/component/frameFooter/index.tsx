import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

interface FrameFooterProps {
  defaultRoundButtonIndex?: number;
  mapRenderButton: Array<{ IconComponent: React.FC; onPress: () => void }>;
}

const FrameFooter: React.FC<FrameFooterProps> = ({
  mapRenderButton,
  defaultRoundButtonIndex = 0,
}) => {
  const [roundButtonIndex, setRoundButtonIndex] = useState<number>(
    defaultRoundButtonIndex
  );

  const handlePress = (onPress: () => void, index: number) => {
    setRoundButtonIndex(index);
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
        <View style={isRoundButton ? styles.circleButton : styles.button}>
          <IconComponent />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.footerBackground}>
        <View style={styles.buttonsContainer}>
          {mapRenderButton.map((button, index) => renderButton(button, index))}
        </View>
      </View>
    </View>
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
    shadowRadius: 3,
    elevation: 5,
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
  },
});

export default FrameFooter;
