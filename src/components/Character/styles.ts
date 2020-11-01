import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  background: ${({theme}) => theme.colors.characterBackground};
  flex-grow: 1;
  flex-basis: 0;
  margin: 5px;
  padding: 5px;
  height: 150px;
`;

export const Image = styled.Image`
  flex: 1;
  width: 100%;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.primary};
  height: 40px;
  padding: 10px 5px;
  text-align: center;
`;

export const ContainerModal = styled.View`
  background: ${({theme}) => theme.colors.characterBackground};
  flex-grow: 1;
  flex-basis: 0;
`;

export const ImageModal = styled.Image`
  height: 50%;
  width: 100%;
`;

export const TitleModal = styled.Text`
  color: ${({theme}) => theme.colors.primary};
  margin-top: 10px;
  text-align: center;
  font-size: 20px;
`;

export const DescriptionModal = styled.Text`
  color: ${({theme}) => theme.colors.text};
  font-size: 12px;
  line-height: 18px;
  margin: 10px;
`;
