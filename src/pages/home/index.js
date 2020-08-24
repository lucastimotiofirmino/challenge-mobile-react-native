import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {StatusBar} from 'expo-status-bar';
import {FlatList} from "react-native";
import {ApplicationProvider, Wrapper} from "./styles";
import {Loading, Comics, IconButton, NoData, EmptyData} from "../../components";
import {fetchComics} from "../../redux/actions";
import {getImage} from "../../utils/getImage";

const columns = 2;

const HomeScreen = ({navigation}) => {

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <IconButton icon="magnifier" onPress={() => navigation.navigate('Search')}/>
            ),
        });
    }, [navigation]);

    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();

    const comics = useSelector((state) => Object.values(state.comics).map(row => ({
        id: row.id,
        title: row.title,
        issueNumber: row.issueNumber,
        description: row.description && row.description.length ? row.description : 'Este comic não possui descrição',
        format: row.format && row.format.length ? row.format : '-',
        pageCount: row.pageCount,
        thumbnail: row.thumbnail,
        prices: row.prices && row.prices.length ? row.prices[0].price : '0.0',
        creators: row.creators,
    })));

    useEffect(() => {
        setLoading(true);
        dispatch(fetchComics(null, () => setLoading(false))).then(setLoading(false))
    }, []);


    function createRows(data, columns) {
        const rows = Math.floor(data.length / columns);
        let lastRowElements = data.length - rows * columns;

        while (lastRowElements !== columns) {
            data.push({
                id: `empty-${lastRowElements}`,
                name: `empty-${lastRowElements}`,
                empty: true,
            });
            lastRowElements += 1;
        }

        return data;
    }

    return (
        <ApplicationProvider>
            <StatusBar style="light"/>
            <>
                {
                    loading
                        ?
                        <Loading/>
                        :
                        <Wrapper>
                            <FlatList
                                data={createRows(comics, columns)}
                                numColumns={columns}
                                keyExtractor={item => item.id}
                                ListEmptyComponent={() => (<NoData/>)}
                                renderItem={({item}) => {
                                    if (item.empty) {
                                        return <EmptyData/>;
                                    }
                                    return (
                                        <Comics
                                            source={getImage(item)}
                                            onPress={() => navigation.navigate('Details', {comics: item})}
                                        />
                                    );
                                }}
                                contentContainerStyle={{marginTop: 20}}
                                showsVerticalScrollIndicator={false}
                            />
                        </Wrapper>
                }
            </>

        </ApplicationProvider>
    );
};
export default HomeScreen;


