import {StyleSheet} from 'react-native';

export const styles = (
  color: HeroColors,
  windowSizes: SizeTypes,
  sizes: AppSizes,
) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      width: windowSizes.width * 0.9,
      height: windowSizes.width * 0.25,
      borderBottomWidth: 1,
      borderBottomColor: color.PRIMARY_3_COLOR,
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
    },

    titleText: {
      width: '56%',
      fontSize: sizes.labelTitle,
      color: color.LABEL_1_COLOR,
      fontWeight: 'bold',
    },

    titleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 10,
    },

    iconContainer: {
      flexDirection: 'row',
    },

    iconItem: {
      marginHorizontal: 4,
    },

    thumbContainer: {
      width: windowSizes.width * 0.2,
      height: windowSizes.width * 0.2,
      backgroundColor: color.LABEL_1_COLOR,
      borderRadius: 50,
      marginHorizontal: 2,
      marginVertical: 2,
      alignItems: 'center',
      justifyContent: 'center',
    },

    thumbImage: {
      width: windowSizes.width * 0.18,
      height: windowSizes.width * 0.18,
      borderRadius: 50,
    },

    descriptionContainer: {
      height: windowSizes.width * 0.165,
      width: windowSizes.width * 0.65,
      paddingHorizontal: 3,
    },

    descriptionText: {
      fontSize: sizes.labelText,
      color: color.LABEL_2_COLOR,
      textAlign: 'justify',
    },
  });
