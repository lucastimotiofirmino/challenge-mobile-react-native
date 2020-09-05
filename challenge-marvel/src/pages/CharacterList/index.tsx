import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, FlatList } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler'
import axios from 'axios'
import { Feather } from '@expo/vector-icons'

import api from '../../services/api';
import CharacterItem, {CharacterItemProps} from '../../components/CharacterItem';
import Header from '../../components/PageHeader'
import styles from './styles';

import md5 from 'md5'


function CharacterList() {
    const [isFiltersVisible, setIsFiltersVisible] = useState(false)
    const [characters, setCharacters] = useState([])
    const [name, setName] = useState('')





    function handleToggleFiltersVisible() {
        setIsFiltersVisible(!isFiltersVisible)
    }


    async function getGods() {
        const privateKey = 'feacf45ea447818e79d141cae254a1f90f171379'
        const ts = 'excelsior'
        const publicKey = '5ab05b654d94daca0bd571f1543fdd56'
        const hash = md5(ts + privateKey + publicKey)
        //https://gateway.marvel.com/v1/public/characters?ts=excelsior&apikey=5ab05b654d94daca0bd571f1543fdd56&hash=0c5b5331f36d2ca8f0c8ea8bc51e7ae1
        const response = await api(`/characters?limit=100&ts=${ts}&apikey=${publicKey}&hash=${hash}&${name ? `name=${name}` : ''}`)
        const resultado = response.data.data.results
        setCharacters(resultado)
    }
   

   useEffect(() => {
        getGods()
    }, [])


    return (

        <View style={styles.container}>
            <Header
                title="MARVEL"
                headerRight={
                    <BorderlessButton onPress={handleToggleFiltersVisible}>
                        <Feather style={styles.filter} name="filter" size={20} color="#fff" />
                    </BorderlessButton>
                } />
            {isFiltersVisible && (
                <View style={styles.searchForm}>
                    <Text style={styles.label}>Nome</Text>
                    <TextInput style={styles.input} value={name} onChangeText={text => setName(text)} placeholder="Qual o nome ?" placeholderTextColor="#c1bccc" />

                    <RectButton  onPress={getGods} style={styles.submitButton}>
                        <Text style={styles.submitButtonText}>Filtrar</Text>
                    </RectButton>

                </View>
            )}

             {<FlatList data={(characters)}
                keyExtractor={(characters:CharacterItemProps, i) => `${i}`}
                numColumns={2}
                renderItem={({ item }) => <CharacterItem name={item.name} path={item.thumbnail.path} extension={item.thumbnail.extension}
                ></CharacterItem>}>
            </FlatList>  }

            
        </View>
    )



}

export default CharacterList