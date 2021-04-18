import React, { Fragment } from 'react'
import {
  Text,
  Contain
} from '../style'

interface InterfaceGeneric {
	readonly name: string
}

interface Props {
  readonly comics?: InterfaceGeneric[]
	readonly series?: InterfaceGeneric[]
	readonly events?: InterfaceGeneric[]
}

const ListText: React.FC<Props> = (props) => {
  return (
    <Fragment>
      <Text size={17} marginB={10} marginT={30} weight={'bold'}>
        Séries
      </Text>
      {props.series.map((item, index) => (
        <Contain key={index}>
          <Text size={17} marginB={10}>
            - {item.name}
          </Text>
        </Contain>
      ))}
      {props.series.length == 0 && (
        <Contain>
          <Text size={17} marginB={10}>
            Sem informação
          </Text>
        </Contain>
      )}

      <Text size={17}  marginB={10} marginT={30} weight={'bold'}>
        Eventos
      </Text>
      {props.events.map((item, index) => (
        <Contain key={index}>
          <Text size={17} marginB={10}>
            - {item.name}
          </Text>
        </Contain>
      ))}
      {props.events.length == 0 && (
        <Contain>
          <Text size={17} marginB={10}>
            Sem informação
          </Text>
        </Contain>
      )}

      <Text size={17}  marginB={10} marginT={30} weight={'bold'}>
        Quadrinhos
      </Text>
      {props.comics.map((item, index) => (
        <Contain key={index}>
          <Text size={17} marginB={10}>
            - {item.name}
          </Text>
        </Contain>
      ))}
      {props.comics.length == 0 && (
        <Contain>
          <Text size={17} marginB={10}>
            Sem informação
          </Text>
        </Contain>
      )}
    </Fragment>
  )
}
export default ListText