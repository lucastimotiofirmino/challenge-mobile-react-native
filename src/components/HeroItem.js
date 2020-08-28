import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import PropTypes from "prop-types"
import Icon from 'react-native-vector-icons/AntDesign'
import { DARK_RED, GRAY, RED } from '../constants/colors'
import Label from './Label'
import { connect } from 'react-redux'

const HeroItem = props => {

    function isFavorite() {
        return !!props.heroes.data.favorites.find(fav => fav.id === props.hero.id)
    }

    return (
        <TouchableOpacity
            style={styles.item}
            onPress={props.onPress}
        >
            <Image 
                source={{uri: props.hero.imageURI}}
                style={styles.itemImage}
            />
            <Label size={18} style={{ flex: 1 }}>{props.hero.name}</Label>
            <TouchableOpacity
                onPress={() => props.onFavorite(!isFavorite())}
                hitSlop={{ left: 8, top: 8, right: 8, bottom: 8 }}
            >
                <Icon name={isFavorite() ? 'heart' : 'hearto'} color={RED} size={24} />
            </TouchableOpacity>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    item: {
        alignItems: 'center',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: GRAY,
        flexDirection: 'row',
    },
    itemImage: {
        borderRadius: 20,
        height: 40,
        width: 40,
        marginEnd: 16,
    },
})

HeroItem.propTypes = {
    hero: PropTypes.object.isRequired,
    onPress: PropTypes.func,
    onFavorite: PropTypes.func,
}

HeroItem.defaultProps = {
    onPress: () => {},
    onFavorite: () => {}
}

const mapStateToProps = (state) => ({
    heroes: state.heroes,
})

export default connect(mapStateToProps)(React.memo(HeroItem))