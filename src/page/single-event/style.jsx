import { Dimensions } from 'react-native'
import ShimmerPlaceholder from 'react-native-shimmer-placeholder'
import style from 'styled-components'

const { width } = Dimensions.get("window")

export const Container = style.ScrollView`
  padding-horizontal: 20px;
`

export const Header = style.View`
  width: 100%;
  align-items: center;
  padding-vertical: 10px
`

export const Indicator = style.View`
  width: 25%;
  height: 2px;
  margin-bottom: -5px;
  border-radius: 4px;
  background-color: #BBBBBB
`

export const Text = style.Text`
  font-size: ${props => props.size}px;
  font-weight: ${props => props.weight || 'normal'};
  margin-left: ${props => props.marginL || 0}px;
  margin-top: ${props => props.marginT || 0}px;
  margin-bottom: ${props => props.marginB || 0}px
`

export const Img = style.Image`
  width: ${width-40}px;
  height: ${width}px;
  margin-bottom: 10px;
  resize-mode: contain
`

export const Loading = style(ShimmerPlaceholder)`
  width: ${width-40}px;
  height: ${width}px;
  margin-Bottom; 10px;
  border-radius: 10px
`