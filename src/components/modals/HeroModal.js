import React, { useState, useEffect } from 'react'
import { StyleSheet, View, TouchableOpacity, Image, Dimensions, ScrollView, FlatList } from 'react-native'
import Modal from 'react-native-modal'
import Icon from 'react-native-vector-icons/AntDesign'
import PropTypes from 'prop-types'
import Label from '../Label'
import * as heroesActions from '../../actions/heroes'

import { getHeroSeries, getHeroEvents } from '../../services/heroesServices'
import seriesDTO from "../../dto/seriesDTO"
import eventDTO from '../../dto/eventDTO'
import { DARK_RED, LIGHT_GRAY, RED } from '../../constants/colors'
import HeroInfo from '../HeroInfo'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const { width, height } = Dimensions.get('window')

const HeroModal = props => {

    const [visible, setVisible] = useState(false)
    const [hero, setHero] = useState(null)
    const [loadingSeries, setLoadingSeries] = useState(false)
    const [series, setSeries] = useState(null)
    const [loadingEvents, setLoadingEvents] = useState(false)
    const [events, setEvents] = useState(null)

    useEffect(() => {
        if(!props.hero) {
            setSeries([])
            setHero(null)
            setVisible(false)
        } else if(!hero || props.hero.id !== hero.id) {
            setHero(props.hero)
            setVisible(true)
        }
    }, [props.hero])
    
    async function buildInfos() {
        setLoadingSeries(true)
        let resSeries = await getHeroSeries(hero.id)
        setSeries(resSeries.data.results.map(s => seriesDTO(s)))
        setLoadingSeries(false)
        setLoadingEvents(true)
        let resEvents = await getHeroEvents(hero.id)
        setEvents(resEvents.data.results.map(e => eventDTO(e)))
        setLoadingEvents(false)
    }

    useEffect(() => {
        if(hero) {
            buildInfos()
        }   
    }, [hero])

    function isFavorite() {
        return !!props.heroes.data.favorites.find(fav => fav.id === props.hero.id)
    }

    function renderHeader() {
        return (
            <View style={{ justifyContent: 'flex-end' }}>
                <Image 
                    style={{width, height: width / 1.77}}
                    source={{uri: hero.bigImageURI}}
                />
                <View style={styles.header}>
                    <Label
                        color={'white'}
                        type={'bold'}
                        size={30}
                        style={{ flex: 1 }}
                    >
                        {hero.name.toUpperCase()}
                    </Label>
                    <TouchableOpacity
                        onPress={() => isFavorite() ? props.unfavoriteHero(props.hero) : props.favoriteHero(props.hero)} 
                    >
                        <Icon name={isFavorite() ? 'heart' : 'hearto'} color={RED} size={30} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    function renderContent() {
        return (
            <>
                <HeroInfo 
                    title={'Séries'}
                    list={series}
                    emptyMessage={'sem séries'}
                    loading={!series || loadingSeries}
                />
                <HeroInfo 
                    title={'Eventos'}
                    list={events}
                    emptyMessage={'sem eventos'}
                    loading={!events || loadingEvents}
                />
            </>
        )
    }

    function renderContainer() {
        return (
            <ScrollView contentContainerStyle={styles.container}>
                {renderHeader()}
                {renderContent()}
            </ScrollView>
        )
    }

    function onClose() {
        setSeries(null)
        setEvents(null)
        setHero(null)
        props.onClose()
    }

    return (
        <View>
            <Modal
                isVisible={visible}
                onBackButtonPress={onClose}
                style={{ margin: 0 }}
            >
                {!!hero &&
                    renderContainer()
                }
                <TouchableOpacity
                    onPress={onClose}
                    hitSlop={{ left: 8, top: 8, right: 8, bottom: 8 }}
                    style={{ position: 'absolute', right: 16, top: 16, backgroundColor: 'white', borderRadius: 24, padding: 4 }}
                >
                    <Icon name="close" color={'black'} size={20} />
                </TouchableOpacity>
            </Modal>
        </View>
    )
}


const styles = StyleSheet.create({
    header: {
        width,
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,0.6)',
        paddingHorizontal: 16,
        paddingVertical: 8,
        alignItems: 'center',
        flexDirection: 'row',
    },
    container: {
        backgroundColor: LIGHT_GRAY,
        paddingBottom: 16,
        flexGrow: 1,
    },  
    background: {
        width,
        height,
    },
})

const mapStateToProps = state => ({
    heroes: state.heroes,
})

const mapDispatchToProps = dispatch => bindActionCreators(heroesActions, dispatch)

HeroModal.propTypes = {
    hero: PropTypes.object,
    onClose: PropTypes.func.isRequired,
}

HeroModal.defaultProps = {
    hero: null,
}

export default connect(mapStateToProps, mapDispatchToProps)(HeroModal)