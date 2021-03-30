import React from 'react';
import { Keyboard } from 'react-native';
import { useDispatch } from 'react-redux';
import _ from 'lodash';

import { searchByName } from '~/store/ducks/app';

import { Container, Input, SearchIcon, SearchIconContainer } from './styles';

const SearchBox = () => {
  const dispatch = useDispatch();

  const changeSearchedName = _.debounce((text) => {
    const name = text;

    dispatch(searchByName(name));
    Keyboard.dismiss();
  }, 1250);

  return (
    <Container>
      <Input onChangeText={changeSearchedName} />
      <SearchIconContainer>
        <SearchIcon />
      </SearchIconContainer>
    </Container>
  );
};

export default SearchBox;
