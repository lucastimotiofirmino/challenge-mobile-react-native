import styled from 'styled-components';

import StyledText from '../styledComponents/Text';
import Icon from '../styledComponents/Icon';

export const Container = styled.TouchableOpacity`
  height: 150px;
  border-radius: 10px;
  margin-top: 16px;
  background: #ffffff;
  flex-direction: row;
`;

export const CoverContainer = styled.View`
  flex: 0.3;
`;

export const DetailsContainer = styled.View`
  flex: 0.5;
  padding-left: 18px;
  padding-right: 2px;
  padding-bottom: 12px;
`;

export const RightContainer = styled.View`
  flex: 0.2;
`;

export const Cover = styled.Image`
  height: 150px;
  width: 100px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const Name = styled(StyledText)`
  color: #313131;
  font-size: 18px;
  font-family: Nunito-Bold;
`;

export const Description = styled(StyledText)`
  font-family: Nunito-Regular;
  margin-top: 8px;
  color: #313131;
  font-size: 14px;
  flex-wrap: wrap;
  flex-shrink: 1;
`;

export const LikeButton = styled.TouchableOpacity`
  padding: 4px;
  align-items: center;
`;

export const Like = styled(Icon).attrs((props) => ({
  name: props.isLiked ? 'heart' : 'heart-outline',
  color: '#452ed9',
  size: 28,
}))``;
