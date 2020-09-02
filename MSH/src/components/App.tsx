import React, { Component } from 'react'
import {
  View,
  StyleSheet, TextInput, Text
} from 'react-native'
import { connect } from 'react-redux'
import DealList from './deal/DealList'
import SearchBar from './deal/SearchBar'
import AppAction from '../redux/action/AppAction'
import AppState from '../redux/state/AppState'
import { UDeal } from '../model/deal/Deal'
import { Provider as StoreProvider } from 'react-redux'
import configureStore from '../components/store'
import { PersistGate } from 'redux-persist/integration/react'

const { store, persistor } = configureStore()

interface AppProps {
  appData: AppState
  searchDeals: (searchStr?: string) => any,
  unsetCurrentDeal: () => any
  setCurrentDeal: (key: string) => any
}
interface XState {
  playOrPause: any
}

class App extends Component<AppProps, XState> {

  constructor(props: AppProps) {
    super(props);

    this.state = {
      playOrPause: null
    };
  }

  componentDidMount() {
    this.props.searchDeals()
  }

  currentDeal = (): UDeal => {
    return this.props.appData.deals.find(x => x.key === this.props.appData.currentDealId)
  }

  handleChange: any = (texto: string) => {
    const rawData = this.props.appData.deals
    const filtrado = this.props.appData.deals.filter(conta => {
      return conta.name.includes(texto)
    })

    if (texto !== null) {
      this.setState({ playOrPause: filtrado })
    } else if (this.state.playOrPause !== rawData) {
      this.setState({ playOrPause: rawData })
    }
  }

  render() {
    return (
      <StoreProvider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <View style={styles.main}>
            <SearchBar searchDeals={this.props.searchDeals} searchTerm={this.props.appData.searchTerm} />
            <TextInput style={styles.fieldBusca}
              placeholder="Filtro por partes do nome (método via State)"
              onChangeText={this.handleChange}
            />
            <DealList deals={this.state.playOrPause?this.state.playOrPause:this.props.appData.deals} />
          </View>
        </PersistGate>
      </StoreProvider>
    )
  }
}

function mapStateToProps(state: any) {
  return {
    appData: state.appData
  }
}

function mapDispatchToProps(dispatch: any) {
  return {
    searchDeals: (searchStr: string = "") => dispatch(AppAction.getDeals(searchStr)),
    setCurrentDeal: (key: string) => dispatch(AppAction.setCurrentDeal(key)),
    unsetCurrentDeal: () => dispatch(AppAction.unsetCurrentDeal())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  main: {
    marginTop: 5,
  },
  fieldBusca: {
    borderWidth:1,
    borderColor:'#c0c0c0',
    paddingLeft:20

  },
  header: {
    fontSize: 40
  },
})

