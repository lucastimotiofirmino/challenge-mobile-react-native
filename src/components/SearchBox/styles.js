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
`;

export const Input = styled.TextInput.attrs({
  placeholder: 'Pesquise um personagem...',
  placeholderTextColor: '#FFF',
  autoCorrect: false,
})`
  flex: 0.9;
  font-family: Nunito-Bold;
  font-size: 20px;
  padding-left: 0px;
`;

export const SearchIcon = styled(Icon).attrs((props) => ({
  name: 'search',
  color: '#FFF',
  size: 28,
  type: 'material',
}))``;
