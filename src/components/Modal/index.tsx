import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Animated,
    Dimensions,
    Image
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';

import { connect } from "react-redux";

var moment = require('moment');

//Actions
import { postFavorites, deleteFavorites } from '../../store/actions/favorite';

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


const { height } = Dimensions.get('window')

const Modal = ({ item, show, close, favorites, postFavorites, deleteFavorites }:
    { item: Data, show: boolean, close: any, favorites: Array<Data>, postFavorites: any, deleteFavorites: any }) => {

    const [onfavorite, setOnFavorite] = useState<boolean>(false);

    const [state, setState] = useState({
        opacity: new Animated.Value(0),
        container: new Animated.Value(height),
        modal: new Animated.Value(height)
    })

    const openModal = () => {
        Animated.sequence([
            Animated.timing(state.container, { toValue: 0, duration: 100, useNativeDriver: true }),
            Animated.timing(state.opacity, { toValue: 1, duration: 300, useNativeDriver: true }),
            Animated.spring(state.modal, { toValue: 0, bounciness: 5, useNativeDriver: true })
        ]).start()
    }

    const closeModal = () => {
        Animated.sequence([
            Animated.timing(state.modal, { toValue: height, duration: 250, useNativeDriver: true }),
            Animated.timing(state.opacity, { toValue: 0, duration: 300, useNativeDriver: true }),
            Animated.timing(state.container, { toValue: height, duration: 100, useNativeDriver: true })
        ]).start()
    }

    const add = () => {
        setOnFavorite(true)
        postFavorites(item)
    }

    const remove = () => {
        setOnFavorite(false)
        deleteFavorites(item)
    }

    useEffect(() => {
        if (show) {
            openModal()
        } else {
            closeModal()
        }
    }, [show])



    var favorite: Data = null
    if (favorites != null)
        if (favorites.length > 0) {
            favorite = favorites.find(element => element.id == item.id)
        }



    var urlImage = item.thumbnail.path + "." + item.thumbnail.extension
    var modified = moment(item.modified).format('DD/MM/YYYY');

    return (
        <Animated.View
            style={[styles.container, {
                opacity: state.opacity,
                transform: [
                    { translateY: state.container }
                ]
            }]}
        >
            <Animated.View
                style={[styles.modal, {
                    transform: [
                        { translateY: state.modal }
                    ]
                }]}
            >
                <ScrollView style={{ paddingBottom: 10 }}>
                    <View style={{ marginTop: 20, }}>
                        <View style={{ paddingHorizontal: 20, }}>

                            <Image resizeMode="stretch" style={styles.image} source={{ uri: urlImage }} />

                            <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                <Text style={styles.titleDate}>Última modificação:</Text>
                                <Text style={styles.text}>{" "}{modified}</Text>
                            </View>

                            <View style={{ marginTop: 20, }}>
                                <Text style={styles.title}>Descrição</Text>

                                {
                                    item.description == "" ?
                                        <Text style={styles.text}>Ainda nao possuiu uma descrição</Text>
                                        :
                                        <Text style={styles.text}>{item.description}</Text>
                                }
                                <Text style={styles.text}>{item.description}</Text>
                            </View>


                        </View>

                    </View>
                    {
                        favorite != null || onfavorite ?
                            <TouchableOpacity style={styles.btn} onPress={() => remove()}>
                                <Text style={{ color: 'red', fontSize: 18, }}>Remover dos favoritos</Text>
                            </TouchableOpacity>
                            :
                            <TouchableOpacity style={styles.btn} onPress={() => add()}>
                                <Text style={{ color: '#F6CF32', fontSize: 18, }}>Adicionar aos favoritos</Text>
                            </TouchableOpacity>
                    }


                    <TouchableOpacity style={styles.btn} onPress={close}>
                        <Text style={{ color: 'red', fontSize: 16, }}>Fechar</Text>
                    </TouchableOpacity>
                </ScrollView>
            </Animated.View>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        position: 'absolute',
        alignItems: 'center'
    },
    modal: {
        bottom: 0,
        position: 'absolute',
        height: '80%',
        backgroundColor: '#fff',
        width: '80%',
    },
    image: {
        borderWidth: 1,
        borderColor: '#000',
        width: '100%',
        height: 180,
    },
    title: {
        fontSize: 16,
        fontFamily: 'Ubuntu_700Bold'
    },
    titleDate: {
        fontSize: 14,
        fontFamily: 'Ubuntu_700Bold'
    },
    text: {
        fontSize: 14,
        fontFamily: 'Roboto_500Medium',
    },
    btn: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
    }
})

const mapStateToProps = (state: any) => {
    const { favorites } = state.favorite;

    return {
        favorites
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        postFavorites: (favorite: Data) => dispatch(postFavorites(favorite)),
        deleteFavorites: (favorite: Data) => dispatch(deleteFavorites(favorite))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Modal);
