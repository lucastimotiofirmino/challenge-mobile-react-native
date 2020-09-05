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
}


const CharacterItem: React.FC<CharacterItemProps> = ({ name }) => {
    function toUpperCase(str: string) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    return (
        <View style={styles.container} >
            <Text>{name}</Text>
        </View>

    )
}

export default CharacterItem