import React, {useState, useCallback, ReactNode, useEffect} from 'react';
import {Container, Header, Logo, Switch} from './styles';
import {useDispatch} from 'react-redux';
import {LightTheme, DarkTheme} from '../../themes';
import {changeThemeToDark, changeThemeToLight} from '../../store/theme/actions';
import {loadFavoritesFromStorage} from '../../store/favorites/actions';
import AsyncStorage from '@react-native-community/async-storage';
import logo from '../../assets/marvel.png';

interface Children {
  children: ReactNode;
}

function Screen({children}: Children) {
  const [switchValue, setSwitchValue] = useState(false);
  const dispatch = useDispatch();

  const onValueChange = useCallback(() => {
    switchValue
      ? dispatch(changeThemeToDark(DarkTheme))
      : dispatch(changeThemeToLight(LightTheme));

    setSwitchValue((state) => !state);
  }, [dispatch, switchValue]);

  useEffect(() => {
    async function getFavorites() {
      try {
        await AsyncStorage.getItem('@MarvelApp:favorites').then((data) => {
          if (data) {
            dispatch(loadFavoritesFromStorage(JSON.parse(data)));
          }
        });
      } catch (error) {
        console.log(error);
      }
    }
    getFavorites();
  }, [dispatch]);

  return (
    <Container>
      <Header>
        <Logo source={logo} />
        <Switch onValueChange={onValueChange} value={switchValue} />
      </Header>
      {children}
    </Container>
  );
}

export default Screen;
