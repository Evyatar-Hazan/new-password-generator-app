// src/component/header/styles.tsx
import {StyleSheet} from 'react-native';
import {useRTL} from '../../i18n/RTLContext';

const isRTL = useRTL();

export const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: isRTL ? 'row' : 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#B88AE8',
    height: 70,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingHorizontal: 15,
  },
  headerTitleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'Righteous-Regular',
  },
  sideContainer: {
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
