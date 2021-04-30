import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute',
    bottom: 0,
    marginBottom: 30,
  },
  modal: {
    bottom: 0,
    position: 'absolute',
    height: '100%',
    backgroundColor: '#fff',
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingLeft: 25,
    paddingRight: 25,
  },
  indicator: {
    width: 50,
    height: 5,
    backgroundColor: '#ccc',
    borderRadius: 50,
    alignSelf: 'center',
    marginTop: 5,
  },
  contentFilter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    marginTop: 30,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  btn: {
    width: '20%',
    height: 50,
    borderRadius: 10,
    backgroundColor: '#c72828',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
});

export default styles;
