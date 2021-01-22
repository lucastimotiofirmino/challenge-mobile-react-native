import React from 'react';

import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  StatusBar,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeIcon: {
    alignSelf: 'flex-end',
    marginHorizontal: 15,
    marginBottom: 10,
    color: '#fff',
    fontSize: 32,
  },
});

const BaseModal = ({ children }) => {
  const navigation = useNavigation();

  const dismissModal = () => {
    navigation.goBack();
  };

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="rgba(0,0,0,0.7)" />
      <TouchableWithoutFeedback onPress={() => dismissModal()}>
        <View style={styles.container}>
          <Icon name="close" style={styles.closeIcon} />
          <View style={styles.modal}>{children}</View>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

export default BaseModal;
