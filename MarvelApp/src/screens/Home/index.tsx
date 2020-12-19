import React, {useEffect} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {SafeAreaView, StatusBar, Text} from 'react-native';
import Header, {HeaderTypes} from '../../components/Header';
import {useColors} from '../../themes';
import {styles} from './style';
import {ROUTES} from '../../router';
import * as actions from '../../store/ducks/heroes/actions';
import {useDispatch} from 'react-redux';

interface HomeScreenProps {
  navigation: StackNavigationProp<any>;
}

const HomeScreen: React.FC<HomeScreenProps> = (Props) => {
  const {navigation} = Props;
  const style = styles(useColors());

  const dispatch = useDispatch();

  useEffect(() => {
    //dispatch(actions.loadRequest());
    console.log('CHAMOU');
  }, [dispatch]);

  return (
    <>
      <StatusBar />
      <SafeAreaView style={style.containerSafe} />
      <SafeAreaView style={style.container}>
        <Header
          type={HeaderTypes.home}
          onPressSearch={() => navigation.navigate(ROUTES.Search)}
        />
        <Text>IU</Text>
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;
