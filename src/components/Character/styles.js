import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
  characterList: {
    marginTop: 22,
    width: Dimensions.get('window').width ,
    
  },

  character: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#FFF',
    marginBottom: 16,
    width: Dimensions.get('window').width / 2.62 ,
    justifyContent: 'center',
    alignItems: 'center',
    flex:1,
    margin: 10
  },

  characterName: {
    fontSize: 14,
    color: '#41414d',
    fontWeight: 'bold',
    textAlign: 'center'
  }
})