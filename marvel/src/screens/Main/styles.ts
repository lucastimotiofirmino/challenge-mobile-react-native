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
    height: 150,
    marginBottom: 20,
    borderRadius: 6,
    backgroundColor: '#fff',
  },
  imageContainer: {
    height: '100%',
    width: '30%',
  },
  image: {
    height: '100%',
    width: '100%',
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
  },
  descriptionContainer: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  description: {
    flex: 1,
    marginVertical: 10,
    color: '#666',
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 4,
  },
  detailsButton: {
    paddingVertical: 4,
    paddingHorizontal: 30,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#518cca',
    backgroundColor: '#518cca',
  },
  detailsText: {
    color: '#fff',
  },
});

export default styles;
