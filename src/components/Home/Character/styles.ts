import {StyleSheet} from 'react-native';
import {Colors} from '../../../assets/theme';

export const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  imageStyle: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
  textContainer: {
    backgroundColor: Colors.primary,
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    color: Colors.white,
  },
});
