import React, { useState, useEffect } from 'react'
import { Text, StyleSheet, View, Dimensions, Image, FlatList, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import ActionButton from 'react-native-action-button';

import { connect } from "react-redux";

import Card from '../../components/cad'
import Modal from '../../components/Modal'
import api from '../../services/api';


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



const Home = ({ favorites }: { favorites: Array<Data> }) => {
    const navigation = useNavigation();
    const [modal, setModal] = useState(false)
    const [selected, setSelected] = useState<Data>()
    const [reRefresh, setreRefresh] = useState<boolean>(false);
    const [copyright, setCopyright] = useState<string>("");
    const [offset, setOffSet] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);
    const [count, setCount] = useState<number>(0);
    const [total, setTotal] = useState<number>(1);
    const [items, setItems] = useState<Data[]>([])
    const [ordemFavorito, setOrdemFavorito] = useState<Data[]>([])

    /**
     * Create view push
     * @param data 
     * @param columns 
     */
    function createRows(data: Array<any>, columns: number) {

        const rows = Math.floor(data.length / columns); // [A]
        let lastRowElements = data.length - rows * columns; // [B]
        let key = data.length
        while (lastRowElements !== columns) { // [C]
            data.push({ // [D]
                id: key,
                name: `empty-${lastRowElements}`,
                empty: true
            });
            key += 1;
            lastRowElements += 1; // [E]
        }
        return data; // [F]
    }

    useEffect(() => {
        setLoading(true)
        api.get('/characters', {
            params: {
                offset
            }
        })

            .then(response => {
                const result = response.data
                if (offset == 0) {
                    setCopyright(result.copyright)
                    setCount(result.data.count)
                    setTotal(result.data.total)
                    //setItems(createRows(result.data.results, 3))

                    setItems(result.data.results)
                    setLoading(false)
                } else {
                    setCount(result.data.count)
                    // let tam = items.length - 1
                    // let newItems = items.splice(tam,1)
                    let newItems = items.concat(result.data.results)
                    //setItems(createRows(newItems, 3))

                    setItems(newItems)
                    setLoading(false)
                }

            })
            .catch(erro => {
                setLoading(false)
                console.log('erro get', erro)
            })
    }, [offset, reRefresh])



    function newOffSet() {
        if (total > offset) {
            setOffSet(offset + count)
        } else {
            console.log('Chegou ao fim!')
        }
    }

    function orderFavorite() {
        setLoading(true)
        setItems([])

        if (ordemFavorito.length == 0) {
            var notFavorite: Array<Data>

            items.map((item, index) => {
                notFavorite = items
                favorites.map(favorite => {
                    if (favorite.id == item.id) {

                        notFavorite = items.splice(index, 1)

                    }
                })

            })

            var favoriFirst = favorites.concat(notFavorite)

            setOrdemFavorito(favoriFirst)
            setItems(favoriFirst)
            setLoading(false)
        } else {
            setItems(ordemFavorito)
            setLoading(false)
        }

    }

    function orderName() {
        setLoading(true)
        setOffSet(0)
        setItems([])
        setreRefresh(!reRefresh)
    }

    function refresh() {
        setLoading(true)
        setOffSet(0)
        setItems([])
        setreRefresh(!reRefresh)
    }

    function openModal(item: Data) {
        setModal(true)
        setSelected(item)
    }

    var p = (Dimensions.get("screen").width - (177 * 2)) / 2
    return (
        <>
            <View style={{ backgroundColor: '#020018', alignItems: 'flex-end' }}>
                <Image resizeMode="cover" style={{ width: Dimensions.get("screen").width, height: 100, alignSelf: 'center' }} source={require('../../assets/marvel_logo.png')} />
                <Text style={styles.copy}>{copyright}</Text>
            </View>
            <FlatList
                horizontal={false}
                numColumns={2}
                style={{ paddingHorizontal: p, backgroundColor: '#020018' }}
                data={items}
                refreshing={loading}
                onRefresh={() => refresh()}
                onEndReached={() => newOffSet()}
                onEndReachedThreshold={0.1}
                legacyImplementation={true}
                disableVirtualization={true}
                extraData={items}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) =>
                    <TouchableOpacity onPress={() => openModal(item)}>

                        <Card
                            id={item.id}
                            key={item.id.toString()}
                            data={item.modified}
                            name={item.name}
                            thumbnail={item.thumbnail}
                            empty={item.empty} />

                    </TouchableOpacity>

                }

            />
            {
                !modal && (
                    <ActionButton buttonText={"Ordem"} buttonTextStyle={{ fontSize: 14 }} buttonColor="rgba(231,76,60,1)">
                        <ActionButton.Item buttonColor='#9b59b6' title="Ordernar Por Nome" onPress={() => orderName()}>
                            <Text>Nome</Text>
                        </ActionButton.Item>
                        <ActionButton.Item buttonColor='#3498db' title="Ordernar Por Favoritos" onPress={() => orderFavorite()}>
                            <Text>Favorito</Text>
                        </ActionButton.Item>

                    </ActionButton>
                )
            }
            {
                modal &&
                (
                    <Modal
                        item={selected!}
                        show={modal}
                        close={() => setModal(false)}
                    />
                )
            }

        </>
    );

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
)(Home);

const styles = StyleSheet.create({
    copy: {
        marginLeft: 4,
        color: '#000',
        fontFamily: 'Roboto_400Regular',
        fontSize: 10,
    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },
});