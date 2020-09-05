import React, { useState } from 'react'
import { View, Image, Text, Linking } from 'react-native'
import styles from './styles'
import { RectButton, TouchableOpacity } from 'react-native-gesture-handler'
import heartOutLineIcon from '../../assets/images/icons/heart-outline.png'
import unFavoriteIcon from '../../assets/images/icons/unfavorite.png'


import AsyncStorage from '@react-native-community/async-storage'
import api from '../../services/api'

export interface CharacterItemProps {
    name: string
    extension:string
    path:string
}



const CharacterItem: React.FC<CharacterItemProps> = ({ name, path, extension }) => {
    function toUpperCase(str: string) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    return (
        <View style={styles.container} >
            <Image  style={styles.avatar} source={{uri:`${path}.${extension}`}} />
            
            <Text>{name}</Text>
        </View>

    )
}

export default CharacterItem