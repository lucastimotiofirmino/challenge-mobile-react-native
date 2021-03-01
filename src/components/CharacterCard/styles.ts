import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    width: 102,
    flexWrap: 'wrap',
    marginHorizontal: 8,
    marginBottom: 16,
  },
  containerImage: {
    borderWidth: 1,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderColor: '#666'
  },
  containerFavorite: {
    height: 20,
    paddingVertical: 24,
    justifyContent: 'center',
    borderTopWidth: 1,
    width: '100%',
    alignItems: 'center',
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#666',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    alignSelf: 'center'
  },
  image: {
    width: 100,
    height: 100,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  name: {
    alignSelf: 'center',
    marginTop: 8,
    color: '#666'
  },
  textFavorite: {
    color: '#666'
  }
})
