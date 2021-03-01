import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
  containerFlatList: {
    alignContent: 'space-between'
  },
  contentContainerFlatList: {
    width: '100%',
    justifyContent: 'flex-start'
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: Dimensions.get('window').width * 0.8,
    alignSelf: 'center',
    marginVertical: 16,
    borderRadius: 8,
    paddingLeft: 16
  },
  textFavotires: {
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  containerTextFavorites: {
    marginTop: 16,
    padding: 8,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#666',
    width: Dimensions.get('window').width * 0.8,
    alignSelf: 'center'
  }
})
