import React from 'react'
import { View, Linking, StyleSheet } from 'react-native'

import Label from './Label'
import { DARK_RED } from '../constants/colors'

const Header = () => {
    return (
        <View style={styles.container}>
            <View style={styles.containerTitle}>
                <Label color={DARK_RED} type={'bold'}>PERSONAGENS</Label>
            </View>
            <Label color={DARK_RED} type={'bold'}> MARVEL </Label>
            <Label 
                color={DARK_RED} 
                onPress={() => Linking.openURL('https://github.com/luccastanan')}
            > 
                by Luccas
            </Label>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%', 
        flexDirection: 'row' 
    },
    containerTitle: {
        borderBottomColor: DARK_RED, 
        borderBottomWidth: 3,
    }
})


export default Header
