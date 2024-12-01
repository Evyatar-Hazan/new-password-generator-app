import {StyleSheet} from 'react-native';

const styles = (colors: any) =>
  StyleSheet.create({
  headerContainer: {
    flexDirection:  'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.mainLightPurple,
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
    color: colors.text,
  },
  sideContainer: {
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
