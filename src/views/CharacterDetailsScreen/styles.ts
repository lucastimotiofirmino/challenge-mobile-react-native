import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
  description: {
    fontSize: 16,
    alignSelf: 'center',
    marginTop: 16,
    textAlign: 'justify',
    paddingHorizontal: 16
  },
  containerButtons: {
    marginTop: 16,
    padding: 8,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#666',
    width: Dimensions.get('window').width * 0.8,
    alignSelf: 'center'
  },
  modalTitle: {
    fontSize: 18,
    marginTop: 16,
    alignSelf: 'center'
  },
  modalDescription: {
    marginVertical: 16,
    marginLeft: 8,
  },
  modalStartDate: {
    marginLeft: 8,
  },
  modalEndDate: {
    marginLeft: 8,
  },
})
