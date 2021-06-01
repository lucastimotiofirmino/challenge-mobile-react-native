import {StyleSheet} from 'react-native';
import {colors} from '../colors';

export const style = StyleSheet.create({
  button: {
    paddingVertical: 20,
    borderRadius: 6,
    borderWidth: 0.2,
    borderColor: colors.primary,
    marginBottom: 4,
    marginHorizontal: 4,
  },
  text: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 18,
  },
});
