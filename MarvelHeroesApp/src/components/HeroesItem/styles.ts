import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  margin: 20px auto 30px auto;
  position: relative;
`;
export const Image = styled.Image`
  width: 121px;
  height: 121px;
  border-radius: 10px;
`;

export const Text = styled.Text`
  font-size: 12px;
  color: #000;
  text-align: center;
  width: 121px;
  font-weight: bold;
`;

export const HeartButton = styled.TouchableOpacity `
  position: absolute;
  right: 5px;
  top: 5px;
`


export const Heart = styled.Image `
  width: 20px; 
  height: 20px;
`
