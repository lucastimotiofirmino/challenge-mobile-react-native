import React, { useState } from 'react';

import {Container, IconContainer, Image, SearchInput} from './styles';
import SearchIcon from '../../assets/search.png'

interface SearchProps {
    onEndSearch(textToFind:string): void;
}

const Search: React.FC <SearchProps>  = ({onEndSearch}) => {
  const [textToFind, setTextToFind] = useState('')
  return (
    <Container>
        <IconContainer>
            <Image source={SearchIcon} />
        </IconContainer>
        <SearchInput placeholder="Search your Hero" onChangeText = { (value:string) => setTextToFind(value)} value={textToFind} onBlur={() => onEndSearch(textToFind) } ></SearchInput>
    </Container>
  );
};

export default Search;
