import styled from 'styled-components';

import StyledIcon from '../styledComponents/Icon';

export const Container = styled.View`
  flex: 1;
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
