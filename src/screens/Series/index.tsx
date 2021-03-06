import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View, Text, FlatList, Modal, StyleSheet, TextInput, TouchableOpacity } from 'react-native' 

import { getHeroSeries } from '../../services/heroes'
import List from '../../components/List'
import styles from '../../styles'

const limit = 30

const Series = ({ data }: any) => {

    const [ series, setSeries ] = useState<any[]>([])
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
        const response = await getHeroSeries({ collectionURI: data.collectionURI, query: query, offset: 0 })

        if (response?.data?.data?.results) {
            setOffset(response?.data?.data?.results.length)
            setSeries(response?.data?.data?.results)
            setLoading(false)

            if (response?.data?.data?.results.length < limit) {
                setAllLoaded(true)
            }
        } else {
            setSeries([])
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

        const response = await getHeroSeries({ collectionURI: data.collectionURI, query: query, offset: offset })

        if (response?.data?.data?.results) {
            setOffset(offset + 30)
            getHeroSeries([...series, ...response?.data?.data?.results])
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
                data={series}
                query={query}
                placeholder={'Search series'}
                showingPlaceholder={'serie'}
                showingPluralPlaceholder={'series'}
                showModal={true}
                setQuery={(text:any) => setQuery(text)}
                loadingMore={loadingMore}
                showMore={false}
                loadMoreData={() => loadMoreData()}
            />
        </View>
    )
}

export default Series