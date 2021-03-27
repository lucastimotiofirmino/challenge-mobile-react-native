import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

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
    justifyContent: 'flex-start',
    alignItems: 'center'
  },

  title: {
    fontSize: 30,
    marginBottom: 16,
    marginTop: 16,
    color: '#FFF',
    fontWeight: 'bold',
  },

  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#c2c2c2'
  }
})