import styled from 'styled-components';

import StyledText from '../styledComponents/Text';
import StyledIcon from '../styledComponents/Icon';

export const Container = styled.View`
  height: 100%;
  width: 100%;
  border-radius: 10px;
  background: white;
`;

export const Cover = styled.Image.attrs({})`
  width: 100%;
  height: 40%;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;

export const DetailsContainer = styled.View`
  width: 100%;
  padding: 16px;
`;

export const NameLikeContainer = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const NameContainer = styled.View`
  flex: 0.8;
`;
export const LikeContainer = styled.View`
  flex: 0.2;
`;

export const Name = styled(StyledText)`
  color: #313131;
  font-size: 26px;
  font-family: Nunito-Bold;
`;

export const Description = styled(StyledText)`
  font-family: Nunito-Regular;
  margin-top: 16px;
  color: #313131;
  font-size: 18px;
  flex-wrap: wrap;
  flex-shrink: 1;
`;

export const LikeButton = styled.TouchableOpacity`
  padding: 4px;
  align-items: center;
`;

export const Like = styled(StyledIcon).attrs((props) => ({
  name: props.isLiked ? 'heart' : 'heart-outline',
  color: '#452ed9',
  size: 28,
}))``;

export const Line = styled.View`
  background: #000;
  height: 6px;
  width: 40px;
  border-radius: 4px;
  position: absolute;
  align-self: center;
  margin-top: 8px;
`;
