import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
  characterList: {
    marginTop: 16,
    width: Dimensions.get('window').width ,
  },

  character: {
    borderRadius: 8,
    backgroundColor: '#FFF',
    width: Dimensions.get('window').width / 2.62 ,
    flex:1,
    margin: 10,
    minHeight: 200,
    overflow: 'hidden',
  },

  characterImage: {
    width: '100%',
    height: '85%',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },

  containerName: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
  },

  characterName: {
    fontSize: 14,
    color: '#41414d',
    fontWeight: 'bold',
    width: '80%',
  }
})