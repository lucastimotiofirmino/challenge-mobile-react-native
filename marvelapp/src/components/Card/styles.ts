import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border: 2px solid #ccc;
`;

export const Content = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 200px;
  margin-bottom: 20px;
  margin-bottom: 20px;
`;

export const ImageAvatar = styled.Image`
  width: 100%;
  height: 90%;
`;

export const ContentText = styled.View`
  padding-left: 10px;
  /* background: red; */
  width: 100%;
  /* flex: 1; */
  /* height: 15%; */
`;

export const TextNamePerson = styled.Text`
  text-align: left;
  margin-top: 10px;
  font-size: 18px;
  font-weight: bold;
`;
