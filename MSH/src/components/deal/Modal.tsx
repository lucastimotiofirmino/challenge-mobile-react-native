import React, { Component } from 'react'
import { Modal, StatusBar,View, Text } from 'react-native'

interface ModalProps {
  visivel?: boolean
}

export default class SearchBar extends Component<ModalProps> {
    
  constructor(props: ModalProps) {
    super(props)
  }

  render() {
    return (
        <Modal
        transparent
        animationType={'fade'}
        visible={typeof this.props.visivel === 'boolean' ? this.props.visivel : visivel}
      >
        <StatusBar backgroundColor={'rgba(0,0,0,0.7)'} barStyle={'dark-content'} />
        <View>
          <Text>teste</Text>
        </View>
      </Modal>
    )
  }
}