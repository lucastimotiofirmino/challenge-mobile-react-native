import React, {useState, useCallback, ReactNode} from 'react';
import {Container, Header, Logo, Switch} from './styles';
import {useDispatch} from 'react-redux';
import {LightTheme, DarkTheme} from '../../themes';
import {changeThemeToDark, changeThemeToLight} from '../../store/theme/actions';
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
