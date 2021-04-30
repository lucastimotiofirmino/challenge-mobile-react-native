import AsyncStorage from '@react-native-community/async-storage';
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Dimensions,
  ScrollView,
} from 'react-native';
import { Image } from 'react-native-animatable';
import { useDispatch } from 'react-redux';
import { ICharactersType } from 'src/store/modules/characters/types';
import KeyStorage from '../../utils/enums';
import styles from './styles';

const { height } = Dimensions.get('window');

interface IModalProps {
  show: boolean;
  close: () => void;
  data: ICharactersType;
}

const Modal = ({ show, close, data }: IModalProps): JSX.Element => {
  const dispatch = useDispatch();

  const [state] = useState({
    opacity: new Animated.Value(0),
    container: new Animated.Value(height),
    modal: new Animated.Value(height),
  });

  const openModal = (): void => {
    Animated.sequence([
      Animated.timing(state.container, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(state.opacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.spring(state.modal, {
        toValue: 0,
        bounciness: 5,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const closeModal = (): void => {
    Animated.sequence([
      Animated.timing(state.modal, {
        toValue: height,
        duration: 250,
        useNativeDriver: true,
      }),
      Animated.timing(state.opacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(state.container, {
        toValue: height,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  useEffect(() => {
    if (show) {
      openModal();
    } else {
      closeModal();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show]);

  return (
    <Animated.View
      style={[
        styles.container,
        {
          opacity: state.opacity,
          transform: [{ translateY: state.container }],
        },
      ]}
    >
      <Animated.View
        style={[
          styles.modal,
          {
            transform: [{ translateY: state.modal }],
          },
        ]}
      >
        <View style={styles.indicator} />
        <View style={styles.contentFilter}>
          <TouchableOpacity style={styles.btn} onPress={close}>
            <Text style={{ color: '#fff' }}>Fechar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={async () => {
              let savedItems = [];
              const response = await AsyncStorage.getItem(
                KeyStorage.charactersLocal,
              );

              if (response) {
                savedItems = JSON.parse(response);
              }
              const findSavedItem = savedItems.find(
                (item: ICharactersType) => item.id === data.id,
              );
              if (!findSavedItem) {
                savedItems.push(data);
                await AsyncStorage.setItem(
                  KeyStorage.charactersLocal,
                  JSON.stringify(savedItems),
                );
                close();
              }
            }}
          >
            <Text>Favoritar</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          style={{ height: '100%' }}
          showsVerticalScrollIndicator={false}
        >
          <View
            style={{
              width: '100%',
              height: '100%',
              marginTop: 40,
            }}
          >
            <Image
              source={{
                uri: `${data?.thumbnail?.path.replace('http', 'https')}.${
                  data?.thumbnail?.extension
                }`,
              }}
              style={{
                width: '100%',
                height: '30%',
              }}
            />
            <Text style={styles.text}>{data?.name}</Text>
            <Text style={styles.text}>{data?.description}</Text>

            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
              }}
            >
              Quadrinhos
            </Text>
            {data?.comics?.items.map(comics => (
              <Text
                key={comics.name}
                style={{
                  fontSize: 16,
                  fontWeight: '600',
                }}
              >
                {comics.name}
              </Text>
            ))}
            <View style={{ height: 20 }} />
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
              }}
            >
              Series
            </Text>
            {data?.series?.items.map(series => (
              <Text
                key={series.name}
                style={{
                  fontSize: 16,
                  fontWeight: '600',
                }}
              >
                {series.name}
              </Text>
            ))}

            <View style={{ height: 500 }} />
          </View>
        </ScrollView>
      </Animated.View>
    </Animated.View>
  );
};

export default Modal;
