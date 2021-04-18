import style from 'styled-components'
import { Dimensions } from 'react-native'
import ShimmerPlaceholder from 'react-native-shimmer-placeholder'

const { width } = Dimensions.get("window")

export const Container = style.TouchableOpacity`
  width: ${width-40}px;
  height: ${width}px;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  background-color: #dee2e6
`

export const Load = style(ShimmerPlaceholder)`
  width: ${width-40}px;
  height: ${width}px;
  border-radius: 10px;
  margin-bottom: 10px
`

export const Img = style.Image`
  width: ${width-80}px;
  height: ${width-80}px;
  border-radius: 5px;
  resize-mode: contain
`

export const Text = style.Text`
  font-weight: bold;
  text-align: center;
  font-size: 17px
`