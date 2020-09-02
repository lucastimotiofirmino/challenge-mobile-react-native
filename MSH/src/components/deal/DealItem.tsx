import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet, Modal, StatusBar, Dimensions } from 'react-native'
import Deal from '../../model/deal/Deal'
import { connect } from 'react-redux'
import AppAction from '../../redux/action/AppAction'
import Images from '../../themes/images'
import AppState from '../redux/state/AppState'

interface DealItemProps {
  estado: AppState,
  deal: Deal,
  onPress: any,
  favorito: boolean,
  setFavorito: (id: number) => string,
  unsetFavorito: (id: number) => string,
}
interface YState {
  modalVisivel: boolean
}

class DealItem extends Component<DealItemProps, YState> {

  constructor(props: DealItemProps) {
    super(props)
    this.state = {
      modalVisivel: false
    }
  }

  ehFavorito(id: number) {
    return this.props.estado.favorito.includes(id) ? true : false
  }

  render() {
    const { deal } = this.props

    return (
      <View>
        <TouchableOpacity style={styles.deal} onPress={() => { this.setState({ modalVisivel: true }) }}>
          <View style={styles.info}>
            <Image style={styles.img} source={{ uri: `${deal.thumbnail.path}.${deal.thumbnail.extension}` }} />
            <Text style={styles.title}>{deal.name}</Text>
            {!this.ehFavorito(deal.id) &&
              <TouchableOpacity onPress={() => this.props.setFavorito(deal.id)}>
                <Image source={Images.favGrey} />
              </TouchableOpacity>
            }
            {this.ehFavorito(deal.id) &&
              < TouchableOpacity onPress={() => this.props.unsetFavorito(deal.id)}>
                <Image source={Images.favColor} />
              </TouchableOpacity>
            }
          </View>
        </TouchableOpacity>

        <Modal
          transparent
          animationType={'fade'}
          visible={this.state.modalVisivel}
        >
          <StatusBar backgroundColor={'rgba(0,0,0,0.7)'} barStyle={'dark-content'} />
          <View style={styles.overlay}>
            <View style={styles.contentContainer}>
              <Image style={styles.imgG} source={{ uri: `${deal.thumbnail.path}.${deal.thumbnail.extension}` }} />
              <Text style={styles.titulo}>
                {deal.name}
              </Text>
              <Text style={styles.description}>
                {deal.description ? deal.description : 'Sem descrição.'}
              </Text>
              <TouchableOpacity style={styles.modalBtnFechar} onPress={() => { this.setState({ modalVisivel: false }) }}>
                <Text style={styles.modalTxtFechar}>FECHAR</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    )
  }
}
function mapStateToProps(state: any) {
  return {
    estado: state.appData
  }
}
function mapDispatchToProps(dispatch: any) {
  return {
    setFavorito: (id: number) => dispatch(AppAction.setFavorito(id)),
    unsetFavorito: (id: number) => dispatch(AppAction.unsetFavorito(id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DealItem)

const modalWidth = Dimensions.get('window').width * 0.87

const styles = StyleSheet.create({
  deal: {
    marginHorizontal: 16,
    marginTop: 16
  },
  modalBtnFechar: {
    padding: 10,
    backgroundColor: "#e1e1e1",
    flexDirection: 'row',
    borderRadius: 7
  },
  modalTxtFechar: {
    textAlign: 'center',
    flex: 1
  },
  description: {
    fontSize: 12,
    margin: 20,
    flexDirection: 'row',
    textAlign: 'center'
  },
  contentContainer: {
    width: modalWidth,
    padding: 20,
    borderRadius: 7,
    backgroundColor: '#fff',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(91, 102, 104, 0.4)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  info: {
    padding: 10,
    backgroundColor: '#fff',
    borderColor: '#bbb',
    borderWidth: 1,
    borderTopWidth: 0,
    flexDirection: 'row'
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 20,
    flex: 1
  },
  titulo: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
    flexDirection: 'row',
    textAlign: 'center'
  },
  img: {
    width: 70,
    height: 70,
    flex: 1
  },
  imgG: {
    width: 200,
    height: 200,
    alignSelf: 'center'
  },
  footer: {
    alignSelf: 'flex-end'
  }
})
