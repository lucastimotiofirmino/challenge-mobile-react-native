import React, { useState, ReactNode } from 'react'
import { View, Image, Text, Linking, TouchableHighlight, Modal, Alert } from 'react-native'
import styles from './styles'
import { RectButton, TouchableOpacity, TextInput, TouchableWithoutFeedback, FlatList } from 'react-native-gesture-handler'
import heartOutLineIcon from '../../assets/images/icons/heart-outline.png'
import unFavoriteIcon from '../../assets/images/icons/unfavorite.png'


import AsyncStorage from '@react-native-community/async-storage'
import api from '../../services/api'

export interface CharacterItemProps {
    name: string
    extension: string
    path: string
    thumbnail: obj
    series: serie
    eventos: serie


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



const CharacterItem: React.FC<CharacterItemProps> = ({ name, path, extension, series, eventos }) => {
    const [showModal, setShowModal] = useState(false)
    function toUpperCase(str: string) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    return (

        <View style={[styles.container]} >
            <TouchableWithoutFeedback onPress={() => {
                setShowModal(true);
            }}>
                <View style={styles.teste1}>


                    <Image style={styles.avatar} source={{ uri: `${path}.${extension}` }} />



                    <Text style={styles.name} >{name}</Text>

                    {showModal && <View >
                        <Modal transparent={true}
                            visible={showModal}
                            animationType="slide"


                        >
                            <TouchableHighlight onPress={() => setShowModal(!showModal)}>
                                <View style={styles.background}>

                                </View>



                            </TouchableHighlight>
                            <View style={styles.container2}>
                                <Text style={styles.header}>Personagem</Text>


                                <Text style={styles.header}>Séries</Text>
                                <FlatList data={(series.items)}
                                    keyExtractor={(item, i) => `${i}`}
                                    numColumns={1}
                                    renderItem={({ item }) => <Text> {item.name}</Text>}>
                                </FlatList>
                                {/* {series.items.map((item, i) => <Text key={i}> {item.name}</Text>)} */}

                                <Text style={styles.header}>Eventos</Text>
                                <FlatList data={(eventos.items)}
                                    keyExtractor={(item, i) => `${i}`}
                                    numColumns={1}
                                    renderItem={({ item }) => <Text> {item.name}</Text>}>
                                </FlatList>
                                {/* {eventos.items.map((item, i) => <Text key={i}> {item.name}</Text>)} */}



                                <View style={styles.buttons}>
                                    <TouchableHighlight onPress={() => { setShowModal(!showModal); }}>
                                        <Text style={styles.button}>Voltar</Text>
                                    </TouchableHighlight>


                                </View>
                            </View>
                            <RectButton onPress={() => setShowModal(!showModal)}>
                                <View style={styles.background} />


                            </RectButton>
                        </Modal>


                    </View>}
                </View>
            </TouchableWithoutFeedback>

            <RectButton style={[styles.favoriteButton]}>
                <Image source={unFavoriteIcon} />

            </RectButton>
        </View >






    )
}

export default CharacterItem