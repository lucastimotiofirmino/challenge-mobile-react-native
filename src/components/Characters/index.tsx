import React, {useEffect, useState} from 'react';
import {Container, Title} from './styles';
import api from '../../services/api';

type CharactersState = Marvel.Character[] | undefined;

const Characters = () => {
  const [characters, setCharacters] = useState<CharactersState>([]);

  useEffect(() => {
    async function getCharacters(): Promise<CharactersState> {
      const {
        data: {data},
      } = await api.get('/characters');
      return data.results;
    }

    getCharacters()
      .then((results) => {
        setCharacters(results);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Container>
      <Title>MARVEL APP: {characters?.length}</Title>
    </Container>
  );
};

export default Characters;
