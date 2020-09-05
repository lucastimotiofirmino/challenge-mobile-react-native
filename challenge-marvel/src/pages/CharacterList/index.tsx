import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, FlatList } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler'

import { Feather } from '@expo/vector-icons'

import api from '../../services/api';
import CharacterItem, {CharacterItemProps} from '../../components/CharacterItem';
import Header from '../../components/PageHeader'
import styles from './styles';

import md5 from 'md5'


function CharacterList() {
    const [isFiltersVisible, setIsFiltersVisible] = useState(false)
    const [characters, setCharacters] = useState([])




    function handleToggleFiltersVisible() {
        setIsFiltersVisible(!isFiltersVisible)
    }

    async function getGods() {
        const privateKey = 'feacf45ea447818e79d141cae254a1f90f171379'
        const ts = 'excelsior'
        const publicKey = '5ab05b654d94daca0bd571f1543fdd56'
        const hash = md5(ts + privateKey + publicKey)
        console.log(hash)
        //https://gateway.marvel.com/v1/public/characters?ts=excelsior&apikey=5ab05b654d94daca0bd571f1543fdd56&hash=0c5b5331f36d2ca8f0c8ea8bc51e7ae1
        const response = await api(`/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`)
        const results = response.data.count
        console.log(results)
        // results.map((characters:CharacterItemProps)=>characters.name)
        setCharacters(results)
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
                    <TextInput style={styles.input} placeholder="Qual o nome ?" placeholderTextColor="#c1bccc" />

                    <RectButton style={styles.submitButton}>
                        <Text style={styles.submitButtonText}>Filtrar</Text>
                    </RectButton>

                </View>
            )}

             {/* <FlatList data={(characters)}
                keyExtractor={(characters:CharacterItemProps, i) => `${i}`}
                numColumns={2}
                renderItem={({ item }) => <CharacterItem name={item.name}
                ></CharacterItem>}>
            </FlatList>  */}

            
        </View>
    )



}

export default CharacterList