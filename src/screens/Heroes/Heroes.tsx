import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { ActivityIndicator, View, Text, FlatList, Modal, StyleSheet, TextInput, TouchableOpacity, Button } from 'react-native' 
import SegmentedControl from '@react-native-segmented-control/segmented-control';

import { getHeroes } from '../../services/heroes'
import HeroDetails from './HeroDetail'
import List from '../../components/List'

import { RootState } from '../../store'

const limit = 30

const Heroes = () => {

    let favorites = useSelector((state:  RootState) => state.favorites);

    const [ selectedSegment, setSelectedSegment ] = useState(0)
    const [ hero, setHero ] = useState<any>({})
    const [ heroes, setHeroes ] = useState<any[]>([])
    const [ query, setQuery ] = useState('')
    const [ offset, setOffset ] = useState(0)
    const [ allLoaded, setAllLoaded ] = useState(false)
    const [ loading, setLoading ] = useState(true)
    const [ loadingMore, setLoadingMore ] = useState(false)
    const [ isFavorited, setIsFavorited ] = useState(false)
    
    useEffect(() => {
        initializeData()
    }, [])

    useEffect(() => {
        initializeData()
    }, [query])

    const initializeData = async () => {
        const response = await getHeroes({ query: query, offset: 0 })

        if (response?.data?.data?.results) {
            setOffset(response?.data?.data?.results.length)
            setHeroes(response?.data?.data?.results)
            setLoading(false)

            if (response?.data?.data?.results.length < limit) {
                setAllLoaded(true)
            }
        } else {
            setHeroes([])
            setAllLoaded(false)
            setLoading(false)
        }
    }

    const loadMoreData = async () => {
        if (loadingMore || allLoaded) {
            setLoadingMore(false)
            return
        }

        setLoadingMore(true)

        const response = await getHeroes({ query: query, offset: offset })

        if (response?.data?.data?.results) {
            setOffset(offset + 30)
            setHeroes([...heroes, ...response?.data?.data?.results])
            setLoadingMore(false)

            setAllLoaded(response?.data?.data?.results.length < limit ? true : false)
        }
    }
    
    const selectHero = (item:any) => {
        let checkFavorite = favorites.data.find((favorite: any) => {
            return favorite.name === item.name
        })

        if (checkFavorite) {
            setIsFavorited(true)
        } else {
            setIsFavorited(false)
        }

        setHero(item)
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}><Text style={styles.headerText}>Marvel</Text> Heroes</Text>
            </View>
            <View style={{paddingTop:10}}>
                <SegmentedControl
                    values={['All heroes', 'Favorites']}
                    selectedIndex={selectedSegment}
                    activeFontStyle={styles.segmentedText}
                    onChange={(event) => {
                        setSelectedSegment(event.nativeEvent.selectedSegmentIndex)
                    }}
                />
            </View>

            { selectedSegment === 0 ?
                <List
                    data={heroes}
                    query={query}
                    placeholder={'Search hero'}
                    showingPlaceholder={'hero'}
                    showingPluralPlaceholder={'heroes'}
                    showModal={true}
                    selectHero={(hero:any) => selectHero(hero)}
                    setQuery={(text:any) => setQuery(text)}
                    loading={loading}
                    loadingMore={loadingMore}
                    showMore={true}
                    loadMoreData={() => loadMoreData()}
                />
            :
                <List
                    data={favorites.data}
                    query={query}
                    placeholder={'Search favorite'}
                    showingPlaceholder={'favorite'}
                    showingPluralPlaceholder={'favorites'}
                    showModal={true}
                    selectHero={(hero:any) => selectHero(hero)}
                    setQuery={(text:any) => setQuery(text)}
                    loading={false}
                    loadingMore={loadingMore}
                    showMore={false}
                    loadMoreData={() => loadMoreData()}
                />
            }

            <HeroDetails
                hero={hero}
                isFavorited={isFavorited}
                setIsFavorited={() => setIsFavorited(!isFavorited)}
                modalClose={() => setHero({})}
            /> 
        </View>
    )
}


export default Heroes

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50
    },
    listContainer: {
        flex: 1
    },
    header: {
        flexDirection: 'row', 
        backgroundColor: '#fff', 
        alignSelf: 'center'
    },
    headerText: {
        color: '#ED1D24',
        fontWeight: 'bold'
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    },
    title: {
      fontSize: 22,
      textAlign: 'center'
    },
    listTitle: {
        color: '#518CCA',
        margin: 5, 
        padding: 5
    },
    segmentedText: {
        color: '#ED1D24', 
        fontWeight: 'bold'
    },
    textInput: {
        height: 40, 
        borderColor: '#ccc', 
        borderWidth: 1, 
        paddingHorizontal: 20, 
        borderRadius: 20
    },
    footer: {
        textAlign: 'center',
        padding: 5,
    },
    footerText: {
        textAlign: 'center',
        fontWeight: '600',
    },
});