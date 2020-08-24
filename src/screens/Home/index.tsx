/* eslint-disable no-underscore-dangle */
import React, { useCallback } from 'react';
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

  return (
    <Styles.Container>
      <Styles.Content>
        <Styles.Title>MarvelApp</Styles.Title>

        <Styles.ViewButton>
          <Styles.ButtonOptions onPress={() => navigateTo('characters')}>
            <Styles.ButtonIcon source={iconDeadpool} />
            <Styles.ButtonText>Characters</Styles.ButtonText>
          </Styles.ButtonOptions>
        </Styles.ViewButton>
      </Styles.Content>
    </Styles.Container>
  );
};

export default Marvel;
