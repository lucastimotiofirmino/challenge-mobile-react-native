import React from 'react'
import { Container, Text } from './style'

interface Props {
  label: string
}

const CardHeader: React.FC<Props> = (props) => {
  return (
    <Container>
      <Text>
        {props.label}
      </Text>
    </Container>
  )
}

export default CardHeader