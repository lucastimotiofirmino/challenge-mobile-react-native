import {StyleSheet} from 'react-native';

export const styles = (color: HeroColors) =>
  StyleSheet.create({
    containerSafe: {
      flex: 0,
      backgroundColor: color.PRIMARY_1_COLOR,
    },
    container: {
      flex: 1,
      backgroundColor: color.PRIMARY_2_COLOR,
    },
  });
