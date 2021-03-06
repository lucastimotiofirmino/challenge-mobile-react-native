import React, { useEffect } from 'react';
import { ActivityIndicator, View, Text, FlatList, Modal, StyleSheet, TextInput, TouchableOpacity, Button } from 'react-native' 

const List = ({ data, query, placeholder, showingPlaceholder, showingPluralPlaceholder, 
                showModal, selectHero, setQuery, showMore, loading, loadingMore, loadMoreData }: any) => {

    const renderItem = ({ item }: any) => {
        return(
            <TouchableOpacity key={item.name ? item.name : item.title} onPress={() => {
                if (!showModal)
                    return

                selectHero(item)
            }}>
                <Text style={styles.item}>{item?.name ? item.name : item.title}</Text>
            </TouchableOpacity>
        )
    };

    return (
        <View style={styles.listContainer}>
            <TextInput
                style={styles.textInput}
                onChangeText={text => setQuery(text)}
                value={query}
                placeholder={placeholder}
            />
            { loadingMore || loading ? <View style={styles.activityIndicator}><ActivityIndicator size="large" color='#246EB9' /></View> : 
                <FlatList
                    style={styles.listContainer}
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.name ? item.name : item.title}
                    ListHeaderComponent={
                        <View>
                            <Text style={styles.listTitle}>Listing {data ? data.length : 0} {data?.length === 1 ? showingPlaceholder : showingPluralPlaceholder}</Text>
                        </View>
                    }
                    ListFooterComponent={
                        <View style={styles.footer}>
                            { loadingMore &&
                                <Text style={styles.footerText}>Loading...</Text>
                            }
                        </View>
                    }
                    onEndReached={() => {
                        if (showMore) {
                            loadMoreData();
                        }
                    }}
                    onEndReachedThreshold={0.01}
                />
            }
        </View>
    )
}


export default List

const styles = StyleSheet.create({
    listContainer: {
        flex: 1
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
    activityIndicator: {
        flex: 1, 
        flexDirection: 'row', 
        paddingHorizontal: '50%'
    }
});