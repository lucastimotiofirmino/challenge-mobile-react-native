import {StyleSheet} from 'react-native';

export const styles = (
  color: HeroColors,
  windowSizes: SizeTypes,
  sizes: AppSizes,
) =>
  StyleSheet.create({
    containerSafe: {
      flex: 0,
      backgroundColor: color.PRIMARY_1_COLOR,
    },
    container: {
      flex: 1,
      backgroundColor: color.PRIMARY_2_COLOR,
    },

    listContainer: {
      width: windowSizes.width,
    },

    animationContainer: {
      alignSelf: 'center',
      width: windowSizes.width * 0.8,
      height: windowSizes.width * 0.8,
    },

    letteringContainer: {
      marginTop: windowSizes.width * 0.3,
      paddingHorizontal: 30,
    },

    labelTitle: {
      color: color.LABEL_1_COLOR,
      fontSize: sizes.labelTitle,
      alignSelf: 'center',
      textAlign: 'justify',
    },
  });
