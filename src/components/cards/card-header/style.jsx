import style from 'styled-components'
import { Dimensions } from 'react-native'

const { width } = Dimensions.get("window")

export const Container = style.View`
  width: ${width}px;
  height: 50px;
  justify-content: center;
  padding-left: 20px;
  margin-bottom: 10px;
  border-radius: 10px
`

export const Text = style.Text`
  font-weight: bold;
  font-size: 17px
`