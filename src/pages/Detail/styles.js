import { StyleSheet, Dimensions } from 'react-native'
import Constants from 'expo-constants'

const SCREEN_WIDTH = Dimensions.get('screen').width / 1.15

export default StyleSheet.create({
  imgBackground: {
    width: '100%', 
    height: '100%',
  },
  
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 3,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  title: {
    fontSize: 30,
    marginBottom: 16,
    marginTop: 16,
    color: '#FFF',
    fontWeight: 'bold',
  },

  image: {
    marginBottom: 16,
    width: SCREEN_WIDTH, 
    height: SCREEN_WIDTH
  },

  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#c2c2c2'
  },

  containerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20
  },

  modalTitle: {
    textAlign: 'center',
    width: '100%',
    fontWeight: 'bold',
    fontSize: 22
  }
})