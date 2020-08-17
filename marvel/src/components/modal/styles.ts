import { StyleSheet, Dimensions, PixelRatio } from 'react-native';

const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  closeIcon: {
    position: 'absolute',
    right: 20,
    top: -50,
  },
  imageModal: {
    height: 200,
    width: 200,
    borderRadius: 10,
    alignSelf: 'center',
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff',
  },
  main: {
    height: PixelRatio.roundToNearestPixel(
      (screenHeight * parseFloat('55')) / 100,
    ),
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    backgroundColor: '#fff',
  },
  description: {
    textAlign: 'justify',
    marginBottom: 10,
  },
  flexGrow: {
    flexGrow: 1,
  },
  sectionTitle: {
    marginVertical: 10,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  detailsSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  thumbnail: {
    height: 150,
    width: 100,
    marginEnd: 20,
  },
  comicTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  noComics: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  noComicsText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default styles;
