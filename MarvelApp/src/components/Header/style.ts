import {StyleSheet} from 'react-native';

export const styles = (color: HeroColors, sizes: SizeTypes) =>
  StyleSheet.create({
    container: {
      height: sizes.width * 0.15,
      backgroundColor: color.PRIMARY_1_COLOR,

      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 20,
      },
      shadowOpacity: 0.02,
      shadowRadius: 5.84,
      width: sizes.width,
      elevation: 5,
      alignItems: 'center',
    },

    headerSearchContainer: {
      width: sizes.width,
      height: sizes.width * 0.15,
      alignItems: 'center',
      flexDirection: 'row',
    },

    headerHomeContainer: {
      width: sizes.width,
      height: sizes.width * 0.15,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    },

    searchIconContainer: {
      width: sizes.width * 0.15,
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      right: 0,
      height: sizes.width * 0.14,
    },

    backIconContainer: {
      width: sizes.width * 0.15,
      alignItems: 'center',
      justifyContent: 'center',
      height: sizes.width * 0.15,
    },

    searchBarContainer: {
      width: sizes.width * 0.8,
      backgroundColor: color.PRIMARY_3_COLOR,
      height: sizes.width * 0.1,
      borderRadius: 30,
      justifyContent: 'center',
    },

    textInputContainer: {
      alignSelf: 'center',
      width: '90%',
      height: '80%',
      color: color.LABEL_2_COLOR,
    },
  });
