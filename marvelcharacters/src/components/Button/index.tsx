import React from 'react';
import {TouchableOpacityProperties} from 'react-native';

import {Container, ButtonText, Indicator} from './styles';

interface ButtonProps extends TouchableOpacityProperties {
  children: string;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({children, loading, ...rest}) => {
  const inLoading = loading === undefined ? false : loading;
  return (
    <Container {...rest}>
      {inLoading ? <Indicator /> : <ButtonText>{children}</ButtonText>}
    </Container>
  );
};

export default Button;
