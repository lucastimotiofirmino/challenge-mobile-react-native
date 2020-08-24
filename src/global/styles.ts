import styled from 'styled-components/native';

interface IGlobalProps {
  tintColor: string;
  largura: number;
  altura: number;
}

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #43a047;
`;
