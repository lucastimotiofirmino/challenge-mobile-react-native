import React, {useState, useEffect, useRef } from 'react'
import {
    View,
    FlatList,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
} from 'react-native'
import { Searchbar} from 'react-native-paper'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { Bar } from "react-native-progress"
import Container from '../components/Container'
import Label from '../components/Label'
import {DARK_RED, GRAY, RED} from '../constants/colors'
import * as heroesActions from '../actions/heroes'
import HeroItem from '../components/HeroItem'
import HeroModal from '../components/modals/HeroModal'
import { getHeroes } from '../services/heroesServices'
import heroDTO from '../dto/heroDTO'

const { width, height} = Dimensions.get('screen')

const HeroesScreen = props => {    
    
    const [search, setSearch] = useState('')
    const [selectedHero, setSelectedHero] = useState(null)
    const [loadingHeroes, setLoadingHeroes] = useState(false)
    const [heroes, setHeroes] = useState(null)
    const [error, setError] = useState(false)

    const flatList = useRef(null)
    const maxResult = useRef(0)
    const timeout = useRef(null)


    const isFavoriteTab = props.navigation.state.key === 'Favorites'

    async function downloadHeroes(offset) {
        setLoadingHeroes(true)
        setError(false)
        getHeroes(offset, search).then(res => {
            setError(false)
            maxResult.current = res.data.total
            const cacheHeroes = res.data.results.map(h => heroDTO(h))
            if(offset && heroes) {
                setHeroes([...heroes, ...cacheHeroes])
            } else {
                setHeroes(cacheHeroes)
            }
            setLoadingHeroes(false)
        }).catch(e => {
            setError(true)
            setLoadingHeroes(false)
        })
    }

    useEffect(() => {
        if(timeout.current) {
            clearTimeout(timeout.current)
        }
        timeout.current = setTimeout(() => {
            goListTop()
            if(search) {
                if(isFavoriteTab) {
                    setHeroes(props.heroes.data.favorites.filter(hero => hero.name.startsWith(search)))
                }else {
                    downloadHeroes(0)
                } 
            } else {
                if(isFavoriteTab) {
                    setHeroes(props.heroes.data.favorites)
                }else {
                    downloadHeroes(0)
                }
            }
        }, 300)
    }, [search])

    function loadMore() {
        if(!isFavoriteTab && heroes.length < maxResult.current) {
            downloadHeroes(heroes.length)
        }
    }

    function goListTop() {
        if(flatList && flatList.current) {
            flatList.current.scrollToOffset ({ animated: true, offset: 0 })
        }
    }

    function getData() {
        if(isFavoriteTab) {
            if(search) {
                return props.heroes.data.favorites.filter(hero => hero.name.startsWith(search))
            }
            return props.heroes.data.favorites
        } else {
            return heroes
        }
    }

    function renderEmptyComponent() {
        return (
            <View style={styles.containerEmtpy}>
                <Label type={'bold'} color={DARK_RED}>
                    {isFavoriteTab ? 'NENHUM PERSONAGEM FAVORITO' : 'NENHUM PERSONAGEM ENCONTRATO'}
                </Label>
            </View>
        )
    }

    function renderModal() {
        return (
            <HeroModal 
                hero={selectedHero}
                onClose={() => setSelectedHero(null)}
            />
        )
    }

    function renderContent() {
        return (
            <FlatList
                ref={flatList}
                data={getData()}
                renderItem={({item, index}) => (
                    <HeroItem 
                        hero={item} 
                        onPress={() => setSelectedHero(item)} 
                        onFavorite={status =>  status ? props.favoriteHero(item) : props.unfavoriteHero(item)} 
                    />
                )}
                keyExtractor={item => item.id.toString()}
                ListEmptyComponent={isFavoriteTab || (!!heroes && !loadingHeroes) ? renderEmptyComponent() : <View/> }
                onEndReached={({ distanceFromEnd }) => loadMore()}
                initialNumToRender={20}
            />
        )
    }
    
    function renderTryAgain() {
        return (
            <View style={styles.containerTryAgain}>
                <Label color={RED} type={'bold'}>FALHA AO BAIXAR INFORMAÇÕES</Label>
                <Label color={'black'} style={{ marginVertical: 8 }}>Verifique sua conexão e tente novamente</Label>
                <TouchableOpacity onPress={() => downloadHeroes(0)} style={styles.btnTryAgain}>
                    <Label color={'white'} size={14}>TENTAR NOVAMENTE</Label>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <Container>
            <View style={styles.containerSearch}>
                <Searchbar 
                    placeholder={'Nome do personagem'} 
                    value={search}
                    onChangeText={text => setSearch(text)}
                    style={styles.search}
                    iconColor={DARK_RED}
                />
            </View>
            <View style={{ flex: 1 }}>
                {error ?
                    renderTryAgain()
                    :
                    renderContent()
                }
                {!isFavoriteTab && (!heroes || loadingHeroes) && !error &&
                    <Bar indeterminate width={width} style={{ position: 'absolute' }} borderRadius={0} borderWidth={0} unfilledColor={'DARK_RED'} color={'red'}/>
                }
            </View>
            {renderModal()}
        </Container>
    )
}

const styles = StyleSheet.create({
    containerHeader: {
        backgroundColor: DARK_RED,
        paddingStart: 96,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    containerEmtpy: {
        flex: 1,
        alignItems: 'center',
        marginTop: 16,
    },
    containerPagination: {
        justifyContent: 'center',
        paddingHorizontal: 24,
        paddingVertical: 18,
        flexDirection: 'row',
    },
    pagination: {
        borderWidth: 1,
        borderColor: DARK_RED,
        width: 30,
        height: 30,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    currentPagination: {
        backgroundColor: DARK_RED,
        width: 30,
        height: 30,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerSearch: {
        backgroundColor: 'white',
        paddingHorizontal: 18,
        paddingBottom: 18,
        paddingTop: 4,
        elevation: 5
    },
    search: {
        elevation: 0,
        borderColor: GRAY,
        borderWidth: 1
    },
    containerTryAgain: { 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center' 
    },
    btnTryAgain: { 
        elevation: 5, 
        backgroundColor: RED, 
        borderRadius: 6, 
        paddingVertical: 8, 
        paddingHorizontal: 12 
    },
})

const mapStateToProps = state => ({
    heroes: state.heroes,
})

const mapDispatchToProps = dispatch => bindActionCreators(heroesActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(HeroesScreen)
