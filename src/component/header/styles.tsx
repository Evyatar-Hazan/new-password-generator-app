import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
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
  headerButtonContainer: {
    paddingHorizontal: 15,
  },
  sideContainer: {
    width: 50, // Adjust this value to ensure proper spacing
    alignItems: 'center',
    justifyContent: 'center',
  },
});
