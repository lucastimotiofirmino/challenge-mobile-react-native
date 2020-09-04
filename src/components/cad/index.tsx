import React from 'react'
import { StyleSheet, View, Text, ImageBackground } from 'react-native'
import { Entypo } from '@expo/vector-icons';


import { connect } from "react-redux";

var moment = require('moment');

interface Common {
    available: number;
    collectionURI: string;
    items: any;
    returned: number;
}

interface Data {
    id: number;
    name: string;
    empty: boolean;
    description: string;
    modified: string;
    thumbnail: { path: string; extension: string };
    resourceURI: string;
    comics: Common;
    series: Common;
    stories: Common;
    events: Common;
    urls: Array<[{ type: string; url: string }]>;
}

interface Card {
    id: number;
    data: string;
    name: string;
    thumbnail: { path: string; extension: string };
    empty: boolean
}

const Card = ({ favorites, id, data, name, thumbnail, empty }:
    { favorites: Array<Data>, id: number, data: string, name: string, thumbnail: { path: string; extension: string }, empty: string }) => {

    if (empty) {
        return (
            <View style={[styles.image, styles.itemEmpty]} />
        )
    } else {
        var urlImage = thumbnail.path + "." + thumbnail.extension
        var modified = moment(data).format('DD/MM/YYYY');


        var favorite: Data = null
        if (favorites != null)
            if (favorites.length > 0) {
                favorite = favorites.find(element => element.id == id)
            }


        return (
            <View style={styles.card}>

                <ImageBackground resizeMode="stretch" source={{ uri: urlImage }} style={styles.image}>
                    <View style={styles.top}>

                        <Text style={styles.date}>{modified}</Text>
                        {favorite != null && (
                            <Entypo style={styles.icon} name="star" size={18} color='#F6CF32' />
                        )}
                    </View>

                    <View style={styles.faixa}>
                        <Text numberOfLines={3} style={styles.name}>{name}</Text>
                    </View>

                </ImageBackground>
            </View>


        );
    }


};
const mapStateToProps = (state: any) => {
    const { favorites } = state.favorite;

    return {
        favorites
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {

    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Card);




const styles = StyleSheet.create({
    itemEmpty: {
        backgroundColor: "transparent"
    },
    card: {
        marginBottom: 10,
        marginRight: 10,
        justifyContent: "center",
        borderRadius: 10,

    },
    image: {
        width: 172,
        height: 180,
    },
    top: {
        top: 0,
        position: "absolute",
        padding: 5,
        flexDirection: 'row'
    },
    date: {
        color: '#FFF',
        fontFamily: 'Ubuntu_700Bold'
    },
    icon: {
        right: -80,
        position: 'absolute',
        marginTop: 4
    },
    faixa: {
        width: '100%',
        bottom: 0,
        position: "absolute",
        backgroundColor: '#A7C6D9'
    },
    name: {
        color: '#FFF',
        fontFamily: 'Roboto_500Medium',
        fontSize: 16,
        marginLeft: 3,
    }
});