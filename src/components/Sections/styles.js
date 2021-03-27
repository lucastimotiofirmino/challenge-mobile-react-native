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
  /* background: ${(props) => (props.selected ? '#d82f49' : '#1c1c20')}; */
`;

export const SectionLabel = styled(StyledText)`
  font-family: Nunito-Bold;
  font-size: ${(props) => (props.selected ? 24 : 18)}px;
  color: ${(props) => (props.selected ? 'white' : '#BBB')};
`;
