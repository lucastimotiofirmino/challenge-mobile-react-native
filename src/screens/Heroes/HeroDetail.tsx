import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { View, Text, Button, Modal, StyleSheet, TextInput, TouchableOpacity, Dimensions, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import SegmentedControl from '@react-native-segmented-control/segmented-control';

import Series from '../Series'
import Events from '../Events'

import { RootState } from '../../store'
import { storeFavorite, removeFromFavorite } from '../../store/favorites/actions'

const windowHeight = Dimensions.get('window').height
const deviceH = Dimensions.get('screen').height;
const bottomNavBarH = deviceH - windowHeight;

const HeroDetails = ({ hero, isFavorited, setIsFavorited, modalClose }: any) => {

    const dispatch = useDispatch()
    let favorites = useSelector((state:  RootState) => state.favorites);

    const [ selectedSegment, setSelectedSegment ] = useState(0)
    
    return (
        <Modal
            visible={!!hero?.name}
            animationType="slide"
            onRequestClose={() => modalClose(false)}
        >
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => modalClose()}>
                        <Ionicons style={styles.headerIcon} name="md-close" size={32} color="#000" />
                    </TouchableOpacity>
                    <Text style={styles.title}>{hero?.name}</Text>
                </View>

                <View style={styles.list}>
                    
                    <View style={styles.infoContainer}>
                        <Image
                            style={styles.avatar}
                            source={{uri: hero?.thumbnail?.path + '.' + hero?.thumbnail?.extension}}
                        />

                        <TouchableOpacity style={[styles.favoriteButton, isFavorited ? styles.itemSelected : styles.itemDefault]}
                            onPress={() => {
                                if (isFavorited === false) {
                                    dispatch(storeFavorite(hero))
                                } else {
                                    dispatch(removeFromFavorite(hero))
                                }

                                setIsFavorited()
                            }} 
                            activeOpacity={0.9}
                        >
                            <Text style={[styles.favoriteText, isFavorited ? styles.itemSelected : styles.itemDefault]}>
                                { isFavorited ? 'Unfavorite' : 'Favorite' }
                                { isFavorited ?
                                    <Ionicons style={{margin: 10}} name="md-close" size={20} color={isFavorited ? '#fff' : 'red'} /> :
                                    <Ionicons style={{margin: 10}} name="md-heart-outline" size={20} color={isFavorited ? '#fff' : 'red'} />
                                }
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:1}}>
                        <Text style={styles.description}>{hero?.description}</Text>
                    </View>
                </View>
                
                <View style={{paddingTop:10}}>
                    <SegmentedControl
                        values={['Series', 'Events']}
                        selectedIndex={selectedSegment}
                        activeFontStyle={styles.segmentedText}
                        onChange={(event) => {
                            setSelectedSegment(event.nativeEvent.selectedSegmentIndex)
                        }}
                    />
                </View>

                { selectedSegment === 0 && <Series data={hero?.series} /> }
                
                { selectedSegment === 1 && <Events data={hero?.events} /> }
            </View>
        </Modal>
    )
}

export default HeroDetails

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#fff",
        flex:1,
        marginTop: 0,
    },
    header: {
        flexDirection: 'row', 
        backgroundColor: '#fff'
    },
    headerIcon: {
        paddingTop: 15, 
        paddingLeft:15
    },
    infoContainer: {
        width: '30%'
    },
    avatar: {
        width: 110,
        height: 110,
        borderRadius: 100,
    },
    title:{
        fontWeight:"bold",
        fontSize:20,
        padding:20,
        color:"#000"
    },
    description: {
        paddingLeft: 15,
        color:"#000"
    },
    listContainer: {
        flex: 1,
        padding: 10
    },
    segmentedText: {
        color: '#ED1D24', 
        fontWeight: 'bold'
    },
    list: {
        flexDirection: 'row', 
        backgroundColor: '#fff', 
        borderBottomWidth: 1, 
        borderBottomColor: '#ccc', 
        paddingHorizontal: 15, 
        paddingBottom: 10
    },
    card: {
        height: windowHeight - bottomNavBarH * 2,
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 10,
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.18,
        shadowRadius: 18.95,
        elevation: 1.2,
    },
    favoriteText: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    favoriteButton: {
        padding: 7, 
        borderWidth: 1, 
        borderRadius: 100
    },
    itemSelected: {
        borderColor: 'red',
        color: 'white',
        backgroundColor: 'red'
    },
    itemDefault: {
        borderColor: 'red',
        color: 'red'
    }
});