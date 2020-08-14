import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  logoContainer: {
    height: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  logo: {
    height: '100%',
    width: '100%',
  },
  cardContainer: {
    flexDirection: 'row',
    padding: 20,
    marginBottom: 20,
    borderRadius: 6,
    backgroundColor: '#fff',
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
  description: {
    color: '#666'
  },
});

export default styles;
