import React from 'react';
import {Modal, ModalProps, SafeAreaView} from 'react-native';
import {styles} from './styles';

export interface Props extends ModalProps {
  onClose: Function;
}

const AppModal: React.FC<Props> = props => {
  const {onClose} = props;
  return (
    <Modal
      {...props}
      transparent
      animationType="slide"
      onRequestClose={() => {
        onClose();
      }}>
      <SafeAreaView style={styles.modal}>{props.children}</SafeAreaView>
    </Modal>
  );
};

export default AppModal;
