import React from 'react';
import {useTranslation} from 'react-i18next';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import BackIcon from '../../assets/svg/back';

const FrameFooter: React.FC = () => {
  const {t} = useTranslation();

  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.roundButton}>
        <BackIcon />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    justifyContent: 'center',
    backgroundColor: '#B88AE8',
    height: 80,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingHorizontal: 15,
    position: 'relative',
  },
  roundButton: {
    position: 'absolute',
    bottom: 40, // Half of the button's height (80 / 2)
    alignSelf: 'center', // Centers the button horizontally
    width: 80, // Increased size for a bigger button
    height: 80, // Increased size for a bigger button
    borderRadius: 40, // Half of the width/height for a perfect circle
    backgroundColor: '#6200EE', // Button background color
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5, // Android shadow effect
  },
});

export default FrameFooter;
