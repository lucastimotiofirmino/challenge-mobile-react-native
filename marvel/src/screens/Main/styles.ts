import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
    marginHorizontal: 20,
  },
  cardContainer: {
    flexDirection: 'row',
    padding: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 6,
  },
  imageContainer: {
    marginEnd: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 40,
  },
  title: {
    marginBottom: 20,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  description: {},
});

export default styles;
