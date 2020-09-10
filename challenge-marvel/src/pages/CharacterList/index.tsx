import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, FlatList, ActivityIndicator } from 'react-native';
import { BorderlessButton, RectButton, TouchableOpacity } from 'react-native-gesture-handler'
import axios from 'axios'
import { Feather } from '@expo/vector-icons'

import api from '../../services/api';
import CharacterItem, { CharacterItemProps } from '../../components/CharacterItem';
import Header from '../../components/PageHeader'
import styles from './styles';


import md5 from 'md5'
import AsyncStorage from '@react-native-community/async-storage';

let isFavoritesScreenVisible = false
function CharacterList() {
    const [isFiltersVisible, setIsFiltersVisible] = useState(false)
    const [characters, setCharacters] = useState([])
    const [allCharacters, setAllCharacters] = useState([])
    const [favoritesHook, setFavoritesHook] = useState([])
    const [name, setName] = useState('')
    const [statusFavorite, setStatusFavorite] = useState(false)
    const [page, setPage] = useState(0)
    const [loading, setLoading] = useState(false)
    const [favorites, setFavorites] = useState<string[]>([])

    function handleToggleFiltersVisible() {
        setIsFiltersVisible(!isFiltersVisible)
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
    function teste() {
        isFavoritesScreenVisible = false
        getGods()

    }
    async function getGods() {
        loadFavorites()
        // console.log(characters.length)
        if (loading) return
        setIsFiltersVisible(false)
        const privateKey = 'feacf45ea447818e79d141cae254a1f90f171379'
        const ts = 'excelsior'
        const publicKey = '5ab05b654d94daca0bd571f1543fdd56'
        const hash = md5(ts + privateKey + publicKey)
        //https://gateway.marvel.com/v1/public/characters?ts=excelsior&apikey=5ab05b654d94daca0bd571f1543fdd56&hash=0c5b5331f36d2ca8f0c8ea8bc51e7ae1
        setLoading(true)
        const response = await api(`/characters?&ts=${ts}&apikey=${publicKey}&hash=${hash}&${name ? `name=${name}` : `offset=${page}&limit=100`}`)
        const resultado = response.data.data.results
        setLoading(false)
        if (name) {
            setPage(0)
            if (resultado.length == 1) {
                let charactersClone = [...characters]
                if (charactersClone.length > 20) {
                    charactersClone = []
                    setCharacters(charactersClone)
                }
                const nameResultado = resultado[0].name
                if (!charactersClone.filter(character => character.name === nameResultado).length == true) {
                    if (isFavoritesScreenVisible == false) {
                     
                        setCharacters(previousState => ([...previousState.concat(resultado)]))
                    }
                    console.log(characters.length)
                }
            }
            // console.log(resultado)
            // console.log('oi')
            return
        }
        else {
            if (characters.length <= 15 && isFavoritesScreenVisible == false) {
                setCharacters([])
                setPage(previousState => (previousState + 100))
                setCharacters(previousState => ([...previousState.concat(resultado)]))
                console.log('a')
            } else if (isFavoritesScreenVisible == false) {
                setPage(previousState => (previousState + 100))
                setCharacters(previousState => ([...previousState.concat(resultado)]))
                console.log('b')
            }
        }
        setIsFiltersVisible(false)
    }
    async function getGods2() {
        loadFavorites()
        setPage(0)
        setIsFiltersVisible(false)
        const privateKey = 'feacf45ea447818e79d141cae254a1f90f171379'
        const ts = 'excelsior'
        const publicKey = '5ab05b654d94daca0bd571f1543fdd56'
        const hash = md5(ts + privateKey + publicKey)

        setCharacters([])
        favorites.map(async (name2) => {
            const response = await api(`/characters?&ts=${ts}&apikey=${publicKey}&hash=${hash}&${name2 ? `name=${name2}` : `offset=${page}&limit=100`}`)
            setCharacters(previousState => ([...previousState.concat(response.data.data.results)]))
        })

        isFavoritesScreenVisible = true

    }
    useEffect(() => {
        getGods()
        loadFavorites()

    }, [])
    return (
        <View style={styles.container}>
            <Header
            />
            {isFiltersVisible && (
                <View style={styles.searchForm}>
                    <Text style={styles.label}>Nome</Text>
                    <TextInput style={styles.input} value={name} onChangeText={text => setName(text)} placeholder="Qual o nome ?" placeholderTextColor="#c1bccc" />
                    <View style={styles.teste}>
                        <RectButton onPress={() => {
                            teste()
                        }} style={styles.submitButton}>
                            <Text style={styles.submitButtonText}>Filtrar</Text>
                        </RectButton>
                        <RectButton onPress={getGods2} style={styles.submitButton}>
                            <Text style={styles.submitButtonText}>Favoritos</Text>
                        </RectButton>
                    </View>
                </View>
            )}
            <FlatList data={characters}
                keyExtractor={(characters: CharacterItemProps, i) => `${i}`}
                numColumns={2}
                onEndReached={getGods}
                onEndReachedThreshold={0.1}
                renderItem={({ item }) => <CharacterItem favorited={favorites.includes(item.name)} name={item.name} path={item.thumbnail.path} series={item.series} description={item.description} events={item.events} extension={item.thumbnail.extension}
                ></CharacterItem>}>
            </FlatList>

            <View style={styles.addButton}>
                <TouchableOpacity onPress={handleToggleFiltersVisible}
                    activeOpacity={0.7}>
                    <Feather name="filter" size={35} color="white" />
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default CharacterList