import styled from 'styled-components/native';

interface IHeaderStyle {
  marignRight?: boolean | undefined;
}

export const Container = styled.View`
  padding: 15px;
  background-color: #3b0c07;
  justify-content: center;
`;

export const Content = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 5px;
`;

export const HeaderActionButton = styled.TouchableOpacity<IHeaderStyle>`
  width: 30px;
  height: 30px;
  margin-top: 5px;
  margin-right: ${({ marignRight }) =>
    marignRight === undefined ? '0px' : '30px'};
`;

export const ViewTitle = styled.View`
  flex: 1;
  align-items: flex-start;
  justify-content: flex-end;
  margin-left: 40px;
  margin-bottom: 5px;
`;

export const Title = styled.Text`
  margin-top: 5px;
  margin-right: 50px;
  color: #fff;
  font-family: 'Girassol-Regular';
  text-align: center;
  font-size: 20px;
`;

export const HeaderActionButtonIcon = styled.Image`
  width: 30px;
  height: 30px;
`;
