import React from 'react';
import {Wrapper, SearchBar, Icon, Input} from './styles'
import {colors} from "../../theme";

const SearchBarDefault = ({value, onChangeText}) => {

    return (
            <Wrapper>
                <SearchBar>
                    <Input
                        placeholder="Search comic for name"
                        underlineColorAndroid="transparent"
                        autoCapitalize="none"
                        autoCompleteType="off"
                        autoCorrect={false}
                        placeholderTextColor={colors.shadow}
                        value={value}
                        onChangeText={onChangeText}
                        keyboardType="default"
                        returnKeyType="search"
                    />
                    <Icon name="magnifier" size={24}/>
                </SearchBar>
            </Wrapper>
        )
};

export default SearchBarDefault;
