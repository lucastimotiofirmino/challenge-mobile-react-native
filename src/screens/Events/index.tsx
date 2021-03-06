import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View, Text, FlatList, Modal, StyleSheet, TextInput, TouchableOpacity, Dimensions } from 'react-native' 

import { getHeroEvents } from '../../services/heroes'
import List from '../../components/List'

import styles from '../../styles'

const limit = 30

const Events = ({ data }: any) => {

    const [ events, setEvents ] = useState<any[]>([])
    const [ query, setQuery ] = useState('')
    const [ offset, setOffset ] = useState(0)
    const [ loading, setLoading ] = useState(true)
    const [ allLoaded, setAllLoaded ] = useState(false)
    const [ loadingMore, setLoadingMore ] = useState(false)
    
    useEffect(() => {
        initializeData()
    }, [])

    useEffect(() => {
        initializeData()
    }, [query])

    const initializeData = async () => {
        const response = await getHeroEvents({ collectionURI: data.collectionURI, query: query, offset: 0 })

        if (response?.data?.data?.results) {
            setOffset(response?.data?.data?.results.length)
            setEvents(response?.data?.data?.results)
            setLoading(false)

            if (response?.data?.data?.results.length < limit) {
                setAllLoaded(true)
            }
        } else {
            setEvents([])
            setLoading(false)
            setAllLoaded(false)
        }
    }

    const loadMoreData = async () => {
        if (loadingMore || allLoaded) {
            setLoadingMore(false)
            return
        }

        setLoadingMore(true)

        const response = await getHeroEvents({ collectionURI: data.collectionURI, query: query, offset: offset })

        if (response?.data?.data?.results) {
            setOffset(offset + 30)
            getHeroEvents([...events, ...response?.data?.data?.results])
            setLoadingMore(false)

            setAllLoaded(response?.data?.data?.results.length < limit ? true : false)
        }
    }
    
    const renderItem = ({ item }: any) => {
        return(
            <Text key={item.title} style={styles.item}>{item.title}</Text>
        )
    };

    return (
        <View style={styles.container}>
            <List
                data={events}
                query={query}
                placeholder={'Search events'}
                showingPlaceholder={'event'}
                showingPluralPlaceholder={'events'}
                showModal={true}
                setQuery={(text:any) => setQuery(text)}
                loading={loading}
                loadingMore={loadingMore}
                showMore={false}
                loadMoreData={() => loadMoreData()}
            />
        </View>
    )
}

export default Events