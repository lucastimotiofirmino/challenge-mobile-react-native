import style from 'styled-components'
import { Dimensions } from 'react-native'

const { width } = Dimensions.get("window")

export const Container = style.TouchableOpacity`
  width: ${width-40}px;
  height: 70px;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  background-color: #dee2e6
`

export const Text = style.Text`
  text-align: center;
  font-size: 15px
`

export const Label = style.Text` 
  flex: 1;
  font-weight: bold;
  margin-left: 5px;
  font-size: 15px
`