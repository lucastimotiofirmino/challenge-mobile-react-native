import styled from 'styled-components';

import Icon from '../styledComponents/Icon';

export const Container = styled.View`
  height: 42px;
  flex-direction: row;
  align-items: center;
  margin-top: 16px;
  margin-bottom: 16px;
`;

export const SearchIconContainer = styled.View`
  flex: 0.1;
  border-top-right-radius: 6px;
`;

export const Input = styled.TextInput.attrs({
  placeholder: 'Personagem, evento ou série...',
  placeholderTextColor: '#9d9ca7',
  autoCorrect: false,
})`
  flex: 0.9;
  font-family: Nunito-Regular;
  font-size: 18px;
  background: #f3f3f3;
  border-radius: 6px;
  padding-left: 10px;
`;

export const SearchIcon = styled(Icon).attrs({
  name: 'search',
  color: '#9d9ca7',
  size: 28,
  type: 'material',
})``;
