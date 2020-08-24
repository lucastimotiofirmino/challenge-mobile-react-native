/* eslint-disable no-underscore-dangle */
import React, { useCallback } from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import iconDeadpool from '../../assets/icons/deadpool.png';

import * as Styles from './styles';

interface IOptions {
  id: number;
  title: string;
  icon: string;
  route: string;
}

const Marvel: React.FC = () => {
  const navigation = useNavigation();

  const navigateTo = useCallback(
    (page: string) => {
      navigation.navigate(page);
    },
    [navigation],
  );

  const options: IOptions[] = [
    {
      id: 1,
      title: 'Characters',
      icon: iconDeadpool,
      route: 'characters',
    },
  ];

  const _renderOptions = item => {
    return (
      <Styles.ButtonOptions onPress={() => navigateTo(item.route)}>
        <Styles.ButtonIcon source={item.icon} />
        <Styles.ButtonText>{item.title}</Styles.ButtonText>
      </Styles.ButtonOptions>
    );
  };

  return (
    <Styles.Container>
      <Styles.Content>
        <Styles.Title>MarvelApp</Styles.Title>

        <FlatList
          keyExtractor={item => String(item.id)}
          data={options}
          renderItem={({ item }) => _renderOptions(item)}
          numColumns={2}
        />
      </Styles.Content>
    </Styles.Container>
  );
};

export default Marvel;
