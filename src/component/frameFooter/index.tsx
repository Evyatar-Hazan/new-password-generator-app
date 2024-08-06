import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';

interface FrameFooterProps {
  IconComponent: React.FC;
  onPress: () => void;
}

const FrameFooter: React.FC<FrameFooterProps> = ({ IconComponent, onPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.footerBackground}>
        <View style={styles.footerOverlay} />
      </View>
      <View style={styles.ovalContainer}>
        <View style={styles.oval} />
      </View>
      <TouchableOpacity style={styles.circleButton} onPress={onPress}>
        <IconComponent />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    alignItems: 'center',
  },
  footerBackground: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 80,
    backgroundColor: '#B88AE8',
  },
  footerOverlay: {
    flex: 1,
    backgroundColor: '#B88AE8', // Half transparent
  },
  ovalContainer: {
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    width: '100%',
    height: 80, // Height of the oval
  },
  oval: {
    width: 110, // Adjust width for desired oval shape
    height: 50, // Height of the oval
    backgroundColor: 'gray', // Dark color with transparency
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80,
  },
  circleButton: {
    position: 'absolute',
    bottom: 40,
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
  },
});

export default FrameFooter;
