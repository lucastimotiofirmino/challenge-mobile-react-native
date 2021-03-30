import styled from 'styled-components';

import StyledText from '../styledComponents/Text';

export const Container = styled.TouchableOpacity`
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 6px;
  padding-bottom: 6px;
  margin-right: 6px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;

export const SectionLabel = styled(StyledText)`
  font-family: Nunito-Bold;
  font-size: ${(props) => (props.selected ? 24 : 18)}px;
  color: ${(props) => (props.selected ? '#452ed9' : '#9d9ca7')};
`;

export const FlatListContainer = styled.View`
  padding-bottom: 8px;
  margin-bottom: 6px;
`;

export const BottomLine = styled.View`
  margin-left: 4px;
  margin-right: 4px;
  margin-top: 2px;
  background: #452ed9;
  height: ${(props) => (props.selected ? 4 : 0)}px;
  width: 80%;
  border-radius: 4px;
`;
