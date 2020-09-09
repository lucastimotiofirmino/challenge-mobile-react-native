import React, { useState, ReactNode } from 'react'
import { View, Image, Text, Linking, TouchableHighlight, Modal, Alert, ImageBackground, Dimensions } from 'react-native'
import styles from './styles'
import { RectButton, TouchableOpacity, TextInput, TouchableWithoutFeedback, FlatList, ScrollView } from 'react-native-gesture-handler'
import heartOutLineIcon from '../../assets/images/icons/heart-outline.png'
import unFavoriteIcon from '../../assets/images/icons/unfavorite.png'
import stan from '../../assets/images/stanlee.png'

import teste3 from '../../assets/images/teste2.png'

import AsyncStorage from '@react-native-community/async-storage'
import api from '../../services/api'
import drstrang from '../../assets/images/download.png'
export interface CharacterItemProps {
    name: string
    extension: string
    path: string
    thumbnail: obj
    series: serie
    events: serie
    description: string
    favorited: boolean


}
interface serie {
    available: string
    collectionURI: string
    items: item[]
}
interface item {
    name: string
    resourceURI: string
}
interface obj {
    path: string
    extension: string
}



const CharacterItem: React.FC<CharacterItemProps> = ({ name, path, extension, series, events, description, favorited }) => {
    const [showModal, setShowModal] = useState(false)
    const [isFavorited, setIsFavorited] = useState(favorited)
    function toUpperCase(str: string) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    async function handleToggleFavorite() {
        const favorites = await AsyncStorage.getItem('favorites')

        let favoritesArray = []
        if (favorites) {
            favoritesArray = JSON.parse(favorites)
            setIsFavorited(false)
        }
        if (isFavorited) {
            const favoriteIndex = favoritesArray.findIndex((item: CharacterItemProps) => {
                return item.name === name
            })
            favoritesArray.splice(favoriteIndex, 1)
        } else {
            favoritesArray.push(name)
            setIsFavorited(true)
        }
        await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray))
    }
    function getSize(series: serie) {
        let total = 0
        series.items.map(item => {
            total++
        })
        console.log(total)

        // if (total >= 5) {
        //     return { height: 200 }
        // }
        if (total <= 3) {
            return { height: 70 }
        }
        else if (total <= 6) {
            return { height: 132 }
        }
        else {
            return { height: 150 }
        }

    }
    return (

        <View style={[styles.container]} >
            <ImageBackground style={styles.backgroundImage} source={teste3}>


                <TouchableWithoutFeedback onPress={() => {
                    setShowModal(true);
                }}>
                    <View style={styles.teste1}>


                        {path === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
                            ? <Image style={styles.avatar}
                                source={stan} /> : <Image style={styles.avatar} source={{ uri: `${path}.${extension}` }} />}



                        <Text style={styles.name} >{toUpperCase(name)} </Text>

                        {showModal && <View style={{}}>


                            <Modal transparent={false}
                                visible={showModal}
                                animationType="slide"


                            >


                                <View style={styles.container2}>
                                    <ImageBackground style={styles.imageBackgroundModal} source={teste3}>
                                        <View style={styles.profile}>
                                            <Text style={styles.header}>{toUpperCase(name)}</Text>
                                        </View>

                                        <View style={styles.flexRow}>
                                            <Text style={styles.description}> {description ? description : 'No description'}</Text>
                                            {path === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
                                                ? <Image style={styles.avatar}
                                                    source={stan} /> : <Image style={styles.avatar} source={{ uri: `${path}.${extension}` }} />}

                                        </View>


                                        <View style={styles.listView}>
                                            <View style={styles.profile}>
                                                <Text style={styles.header}>Series</Text>
                                            </View>
                                            <View style={[getSize(series)]}>
                                                <ScrollView>
                                                    {series.items.length > 0 ? series.items.map((item, i) => <Text key={i} style={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}> {item.name} </Text>) : <Text style={{ textAlign: 'left', marginLeft: 11, fontWeight: 'bold', fontSize: 16 }}>No series</Text>}

                                                </ScrollView>
                                            </View>

                                        </View>
                                        <View style={styles.listView}>
                                            <View style={styles.profile}>
                                                <Text style={styles.header}>Events</Text>
                                            </View>
                                            <View style={[getSize(series)]}>
                                                <ScrollView>
                                                    {events.items.length > 0 ? events.items.map((item, i) => <Text key={i} style={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}> {item.name}</Text>) : <Text style={{ textAlign: 'left', marginLeft: 11, fontWeight: 'bold', fontSize: 16 }}> No events</Text>}

                                                </ScrollView>
                                            </View>

                                        </View><View style={styles.buttons}>
                                            <TouchableHighlight underlayColor='none' onPress={() => { setShowModal(!showModal) }}>
                                                <Text style={[styles.name, {fontSize:16}]}>Voltar</Text>
                                            </TouchableHighlight>
                                        </View>
                                    </ImageBackground>
                                </View>
                            </Modal>

                        </View>}
                    </View>
                </TouchableWithoutFeedback>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <RectButton onPress={handleToggleFavorite} style={[styles.favoriteButton, isFavorited ? styles.favorited : {}]}>
                        {isFavorited ? <Image source={unFavoriteIcon} /> : <Image source={heartOutLineIcon} />}
                    </RectButton>
                </View>
            </ImageBackground>
        </View >






    )
}

export default CharacterItem