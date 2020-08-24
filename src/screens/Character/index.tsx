import React, { useEffect } from 'react';
import { Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import * as Styles from './styles';

import * as CharActions from '../../store/modules/Characters/actions';
import { RootState } from '../../store/modules/rootReducer';

const Characters: React.FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const characters = useSelector((state: RootState) => state.characters.data);

  useEffect(() => {
    dispatch(CharActions.getCharacterRequest());
  }, []);

  return (
    <Styles.Container>
      <Text>Tela de personagens</Text>
    </Styles.Container>
  );
};

export default Characters;
