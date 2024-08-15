import React, {useEffect, useRef} from 'react';
import {useTranslation} from 'react-i18next';
import {View, Animated} from 'react-native';
import {styles} from './styles';

const SplashScreen: React.FC = () => {
  const {t} = useTranslation();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.5)).current;
  const textAnim = useRef(new Animated.Value(0)).current;

  const APP_ICON_PASH = '../../assets/images/appIcon/appIcon.jpeg';

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 3,
        tension: 100,
        useNativeDriver: true,
      }),
      Animated.timing(textAnim, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
        delay: 500,
      }),
    ]).start();
  }, [fadeAnim, scaleAnim, textAnim]);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require(APP_ICON_PASH)}
        style={[
          styles.image,
          {opacity: fadeAnim, transform: [{scale: scaleAnim}]},
        ]}
      />
      <Animated.Text style={[styles.text, {opacity: textAnim}]}>
        {t('SplashScreen.title')}
      </Animated.Text>
    </View>
  );
};

export default SplashScreen;
