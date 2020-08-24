import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {StatusBar} from 'expo-status-bar';
import {ApplicationProvider, Wrapper,} from "./styles";
import {SearchBar, Comics, Loading, NoData, EmptyData} from "../../components";
import {getImage} from "../../utils/getImage";
import {FlatList} from "react-native";
import {fetchComics} from "../../redux/actions";

const columns = 2;

const SearchScreen = ({route, navigation}) => {

    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

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

    const [comicsData, setComicsData] = useState(comics);

    const searchResults = Object.values(comics).map((comic) => ({
        ...comic,
        lowerCaseName: comic.title.toLowerCase(),
    })).sort((a, b) => a.title > b.title);

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

    useEffect(() => {
        setLoading(true);
        dispatch(fetchComics((response) => setComicsData(response), () => setLoading(false))).then(setLoading(false))

        const lowerCaseQuery = searchTerm.toLowerCase();
        const newComics = searchResults.filter((comics) => comics.lowerCaseName.includes(lowerCaseQuery));

         setComicsData(newComics);

    }, [searchTerm]);

    return (
        <ApplicationProvider>
            <StatusBar style="light"/>
            <SearchBar value={searchTerm} onChangeText={(value) => setSearchTerm(value)}/>
            {
                loading
                    ?
                    <Loading/>
                    :
                    <Wrapper>
                        <FlatList
                            data={createRows(comicsData, columns)}
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
        </ApplicationProvider>
    );
};
export default SearchScreen;
