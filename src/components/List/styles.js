import styled from 'styled-components';

import StyledIcon from '../styledComponents/Icon';
import StyledText from '../styledComponents/Text';

export const Container = styled.View`
  flex: 1;
`;

export const WithoutItemsContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const WithoutItemsLabel = styled(StyledText)`
  font-family: Nunito-Bold;
  font-size: 20px;
  color: #9d9ca7;
`;

export const ToTopButton = styled.TouchableOpacity`
  height: 48px;
  width: 48px;
  border-radius: 24px;
  position: absolute;
  bottom: 0;
  right: 0;
  margin-bottom: 12px;
  margin-right: 12px;
  border-width: 1px;
  background: #452ed9;
  justify-content: center;
  align-items: center;
`;

export const ToTop = styled(StyledIcon).attrs({
  name: 'arrow-upward',
  color: '#FFF',
  size: 24,
  type: 'material',
})``;
