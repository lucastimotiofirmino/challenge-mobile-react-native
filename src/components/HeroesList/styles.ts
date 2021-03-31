import styled from 'styled-components/native';
import {TouchableOpacity,FlatList} from 'react-native';

export const Container = styled(FlatList)`
    flex: 1;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
`;
export const EnterpriseCard = styled(TouchableOpacity)`
  margin-top: 10px;
  width: 50%;
  background-color: #444;
  border-radius: 12px;
  border-width: 1px;
  padding: 4px;
  flex-direction: column;
  justify-content: space-between;
`;
export const EnterpriseCardImage = styled.Image`
  height: 160px;
  border-radius: 12px;
  position: relative;
`;
export const EnterpriseCardDetails = styled.View`
  padding-top: 6px;
  padding-left: 6px;
  border-radius: 4px;
  flex-direction: row;
  justify-content: space-between;
`;
export const EnterpriseNameText = styled.Text`
  font-size: ${props => (props.size ? props.size : 14)}px;
  color: ${props => (props.color ? props.color : '#f1f2f3')};
  /* font-family: 'Lexend-Regular'; */
`;
