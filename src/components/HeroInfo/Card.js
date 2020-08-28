import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import Label from '../Label'

const Card = props => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: props.item.imageURI }}/>
            <View style={{ paddingVertical: 4, paddingHorizontal: 8 }}>
                <Label type={'bold'} numberOfLines={2}>{props.item.title}</Label>
            </View>
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    container: {
        width: 150,
        borderRadius: 8,
        backgroundColor: 'white',
        elevation: 3,
        overflow: 'hidden',
        marginBottom: 4,
    },
    image: { 
        width: 150, 
        height: 225 
    },
})
