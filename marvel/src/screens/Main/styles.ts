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
  title: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  mv10: {
    marginVertical: 10,
  },
  modal: {
    height: 500,
    borderRadius: 6,
    padding: 20,
    backgroundColor: '#fff',
  },
  imageModal: {
    height: 160,
    width: 160,
    borderRadius: 80,
    alignSelf: 'center',
  },
  justifiedText: {
    textAlign: 'justify',
  },
});

export default styles;
