import {StyleSheet} from 'react-native';

export const styles = (
  color: HeroColors,
  windowSizes: SizeTypes,
  sizes: AppSizes,
) =>
  StyleSheet.create({
    titleContainer: {
      marginTop: 10,
      alignSelf: 'center',
      width: windowSizes.width * 0.85,
      height: windowSizes.width * 0.15,
      borderBottomWidth: 1,
      borderBottomColor: color.PRIMARY_3_COLOR,
      alignItems: 'center',
      justifyContent: 'center',
    },
    modalContainer: {
      borderRadius: 20,
      alignSelf: 'center',
      width: windowSizes.width * 0.9,
      backgroundColor: color.PRIMARY_1_COLOR,
    },

    closeButtonContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      height: windowSizes.width * 0.14,
      width: windowSizes.width * 0.14,
      position: 'absolute',
      right: 0,
      top: 0,
    },

    labelTitle: {
      fontSize: sizes.labelTitle,
      color: color.LABEL_1_COLOR,
    },

    thumbContainer: {
      marginTop: 10,
      alignSelf: 'center',
      height: windowSizes.width * 0.65,
      width: windowSizes.width * 0.85,
      borderRadius: 10,
    },

    labelDescription: {
      marginTop: 10,
      alignSelf: 'center',
      width: windowSizes.width * 0.85,
      fontSize: sizes.labelText,
      color: color.LABEL_2_COLOR,
      textAlign: 'justify',
      marginBottom: 30,
    },
  });
