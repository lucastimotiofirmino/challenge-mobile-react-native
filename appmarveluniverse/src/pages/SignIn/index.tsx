import React from 'react';
import {} from 'react-native';

import {
  Container,
  LogoContainer,
  LogoImg,
  SubTitle,
  ItemRow,
  InputLabel,
} from './styles';

import marvelLogo from '../../assets/marvelLogo.png';

const SignIn: React.FC = () => {
  return (
    <Container>
      <LogoContainer>
        <LogoImg source={marvelLogo} />
        <SubTitle>Character&#39;s Info Resources</SubTitle>
      </LogoContainer>
      <ItemRow>
        <InputLabel>Login:</InputLabel>
        <InputLabel>02</InputLabel>
      </ItemRow>
      <ItemRow>
        <InputLabel>Password:</InputLabel>
        <InputLabel>02</InputLabel>
      </ItemRow>
    </Container>
  );
};

export default SignIn;
