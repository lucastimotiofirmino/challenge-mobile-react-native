import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, FlatList, ActivityIndicator } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler'
import axios from 'axios'
import { Feather } from '@expo/vector-icons'

import api from '../../services/api';
import CharacterItem, { CharacterItemProps } from '../../components/CharacterItem';
import Header from '../../components/PageHeader'
import styles from './styles';


import md5 from 'md5'
import AsyncStorage from '@react-native-community/async-storage';


function CharacterList() {
    const [isFiltersVisible, setIsFiltersVisible] = useState(false)
    const [characters, setCharacters] = useState([])
    const [favoritesHook, setFavoritesHook] = useState([])
    const [name, setName] = useState('')
    const [showModal, setShowModal] = useState(false)
    const [page, setPage] = useState(0)
    const [loading, setLoading] = useState(false)
    const [favorites, setFavorites] = useState<string[]>([])






    function handleToggleFiltersVisible() {
        setIsFiltersVisible(!isFiltersVisible)
        setPage(0)
    }

    function loadFavorites() {
        AsyncStorage.getItem('favorites').then(response => {
            if (response) {
                const favoritedCharacters = JSON.parse(response)
                const favoritedCharactersName = favoritedCharacters.map((item: CharacterItemProps) => {
                    return item
                })
                setFavorites(favoritedCharactersName)
            }
        })
    }
    async function getGods() {
        
        
        if (loading) return
        setIsFiltersVisible(false)
        const privateKey = 'feacf45ea447818e79d141cae254a1f90f171379'
        const ts = 'excelsior'
        const publicKey = '5ab05b654d94daca0bd571f1543fdd56'
        const hash = md5(ts + privateKey + publicKey)
        //https://gateway.marvel.com/v1/public/characters?ts=excelsior&apikey=5ab05b654d94daca0bd571f1543fdd56&hash=0c5b5331f36d2ca8f0c8ea8bc51e7ae1
        setLoading(true)
        const response = await api(`/characters?&ts=${ts}&apikey=${publicKey}&hash=${hash}&${name ? `name=${name}` : `offset=${page}`}`)
        const resultado = response.data.data.results
        setPage(previousState => (previousState + 100))
        setLoading(false)
        if(name){
            console.log(name)
            setCharacters(resultado)
        }
        else{
            // console.log(name)
            setCharacters(previousState=>([...previousState.concat(resultado)]))
        }
        // console.log(name)
        setFavoritesHook([])
    }
    function getGods2() {

        setIsFiltersVisible(false)
        const privateKey = 'feacf45ea447818e79d141cae254a1f90f171379'
        const ts = 'excelsior'
        const publicKey = '5ab05b654d94daca0bd571f1543fdd56'
        const hash = md5(ts + privateKey + publicKey)
        let array: CharacterItemProps[] = []
        

        // const a = characters.filter(character => {

        //     return favorites.includes(character.name)
        // })
        // a.map((item) => {
        //     console.log(item.name)
        // })
        let a = []
        characters.forEach(item => {
            
            favorites.map((name) => {
                if (name == item.name) {
                   a.push(item)
                }

                console.log(name)

            })
        })
        console.log(a)
        setFavoritesHook(a)
       





        // setCharacters(previousState=>([...previousState, response2[0]]))


    }


    useEffect(() => {
        getGods()
        loadFavorites()

    }, [])


    return (

        <View style={styles.container}>
            <Header

                headerRight={
                    <BorderlessButton onPress={handleToggleFiltersVisible}>
                        <Feather style={styles.filter} name="filter" size={20} color="#fff" />
                    </BorderlessButton>
                } />
            {isFiltersVisible && (
                <View style={styles.searchForm}>
                    <Text style={styles.label}>Nome</Text>
                    <TextInput style={styles.input} value={name} onChangeText={text => setName(text)} placeholder="Qual o nome ?" placeholderTextColor="#c1bccc" />
                    <View style={styles.teste}>
                        <RectButton onPress={getGods} style={styles.submitButton}>
                            <Text style={styles.submitButtonText}>Filtrar</Text>
                        </RectButton>
                        <RectButton onPress={getGods2} style={styles.submitButton}>
                            <Text style={styles.submitButtonText}>Favoritos</Text>
                        </RectButton>
                    </View>

                </View>
            )}



            <FlatList data={ characters || favoritesHook}
                keyExtractor={(characters: CharacterItemProps, i) => `${i}`}
                numColumns={2}
                onEndReached={getGods}
                onEndReachedThreshold={0.1}
                renderItem={({ item }) => <CharacterItem favorited={favorites.includes(item.name)} name={item.name} path={item.thumbnail.path} series={item.series} description={item.description} events={item.events} extension={item.thumbnail.extension}
                ></CharacterItem>}>
            </FlatList>
            


        </View>
    )



}

export default CharacterList