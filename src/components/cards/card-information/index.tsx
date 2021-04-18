import React from 'react'
import { Container, Text, Label } from './style'

interface Props {
  readonly id: Number | string
  readonly label: string
  readonly onPress: Function
}

const CardInformation: React.FC<Props> = (props) => {
  return (
    <Container onPress={props.onPress}>
      <Text>
        #{props.id} |
      </Text>
      <Label numberOfLines={2}>
        {props.label}
      </Label>
    </Container>
  )
}

export default CardInformation