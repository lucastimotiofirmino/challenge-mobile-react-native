import style from 'styled-components'
import { Dimensions } from 'react-native'
import ShimmerPlaceholder from 'react-native-shimmer-placeholder'

const { width } = Dimensions.get("window")

export const Container = style(ShimmerPlaceholder)`
  width: ${width-40}px;
  height: 70px;
  margin-Bottom: 10px;
  border-radius: 10px
`