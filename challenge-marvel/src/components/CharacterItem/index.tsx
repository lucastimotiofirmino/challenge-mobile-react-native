import React, { useState, ReactNode } from 'react'
import { View, Image, Text, Linking, TouchableHighlight, Modal, Alert, ImageBackground, Dimensions } from 'react-native'
import styles from './styles'
import { RectButton, TouchableOpacity, TextInput, TouchableWithoutFeedback, FlatList, ScrollView } from 'react-native-gesture-handler'
import heartOutLineIcon from '../../assets/images/icons/heart-outline.png'
import unFavoriteIcon from '../../assets/images/icons/unfavorite.png'

import teste3 from '../../assets/images/teste2.png'

import AsyncStorage from '@react-native-community/async-storage'
import api from '../../services/api'

export interface CharacterItemProps {
    name: string
    extension: string
    path: string
    thumbnail: obj
    series: serie
    eventos: serie
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



const CharacterItem: React.FC<CharacterItemProps> = ({ name, path, extension, series, eventos, description, favorited }) => {
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
            return { height: 60 }
        }
        else if (total <= 6) {
            return { height: 125 }
        }
        else {
            return { height: 150 }
        }

    }
    return (

        <View style={[styles.container]} >
            <ImageBackground style={{ height: 197, width: (Dimensions.get('window').width)/2 }} source={teste3}>


                <TouchableWithoutFeedback onPress={() => {
                    setShowModal(true);
                }}>
                    <View style={styles.teste1}>


                        <Image style={styles.avatar} source={{ uri: `${path}.${extension}` }} />



                        <Text style={styles.name} >{toUpperCase(name)} </Text>

                        {showModal && <View style={{ backgroundColor: '#ccc' }}>
                            <Modal transparent={true}
                                visible={showModal}
                                animationType="slide"


                            >

                                <View style={styles.container2}>
                                    <View style={styles.profile}>
                                        <Text style={styles.header}>{toUpperCase(name)}</Text>
                                    </View>

                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={{ textAlign: 'left', flex: 2, marginLeft: 11 }}> {description ? description : 'No description'}</Text>
                                        <Image style={[styles.avatar2, { flex: 1 }]} source={{ uri: `${path}.${extension}` }} />
                                    </View>


                                    <View style={{ margin: 7.5 }}>
                                        <View style={styles.profile}>
                                            <Text style={styles.header}>Series</Text>
                                        </View>
                                        <View style={[getSize(series)]}>
                                            <ScrollView>
                                                {series.items.map((item, i) => <Text key={i}> {item.name}</Text>)}
                                            </ScrollView>
                                        </View>

                                    </View>

                                    {/* <FlatList style={styles.flex} data={(series.items)}
                                    keyExtractor={(item, i) => `${i}`}
                                    numColumns={1}
                                    renderItem={({ item }) => <Text > {item.name}</Text>}

                                >

                                </FlatList> */}


                                    <View style={{ margin: 7.5 }}>
                                        <View style={styles.profile}>
                                            <Text style={styles.header}>Events</Text>
                                        </View>
                                        <View style={[getSize(series)]}>
                                            <ScrollView>
                                                {eventos.items.map((item, i) => <Text key={i}> {item.name}</Text>)}
                                            </ScrollView>
                                        </View>

                                    </View>


                                    {/* <FlatList data={(eventos.items)}
                                    keyExtractor={(item, i) => `${i}`}
                                    numColumns={1}
                                    renderItem={({ item }) => <Text> {item.name}</Text>}>
                                </FlatList> */}





                                    <View style={styles.buttons}>
                                        <TouchableHighlight onPress={() => { setShowModal(!showModal); }}>
                                            <Text style={styles.button}>Voltar</Text>
                                        </TouchableHighlight>


                                    </View>
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