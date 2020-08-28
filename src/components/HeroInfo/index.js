import React from 'react'
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native'
import PropTypes from "prop-types"
import Label from '../Label'
import Card from './Card'
import { DARK_RED } from '../../constants/colors'

const HeroInfo = props => {

    function renderEmpty(text) {
        return (
            <Label 
                color={'white'} 
                type={'bold'} 
                style={styles.empty}>{text.toUpperCase()}
            </Label>
        )
    }

    return (
        <>
            <View style={{ flexDirection: 'row' }}>
                <Label type={'bold'} size={28} style={styles.category}>{props.title}</Label>
                {props.loading  &&
                    <ActivityIndicator color={DARK_RED} />
                }
            </View>
            <FlatList 
                data={props.list}
                renderItem={({ item, index }) => <Card item={item} />  }
                keyExtractor={item => item.id.toString()}
                horizontal
                ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
                contentContainerStyle={{ paddingHorizontal: 16 }}
                ListEmptyComponent={() => props.loading ? <View/> : renderEmpty(props.emptyMessage)}
                showsHorizontalScrollIndicator={false}
            />
        </>
    )
}

const styles = StyleSheet.create({
    category: {
        marginHorizontal: 16, 
        marginTop: 12, 
        marginBottom: 8 
    },
    empty: { 
        backgroundColor: DARK_RED, 
        borderRadius: 30, 
        paddingHorizontal: 16, 
        paddingVertical: 8 
    }
})

HeroInfo.propTypes = {
    title: PropTypes.string.isRequired,
    list: PropTypes.array,
    emptyMessage: PropTypes.string.isRequired,
    loading: PropTypes.bool,
}

HeroInfo.defaultProps = {
    loading: false,
    list: []
}

export default HeroInfo

