import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
interface IProps{
    size?: number;
    color?: string;
  }
export const Description = styled.Text`
  font-size: ${(props :  IProps) => (props.size ? props.size : 14)}px;
  color: ${(props :  IProps) => (props.color ? props.color : '#f1f2f3')};
  font-family: 'Roboto_500Medium';
  padding:0 15px 0;
`;
export const ModalButton = styled(RectButton)`
    background-color: #E62429;
    border-radius: 4px;
    padding: 10px;
    width:49%;
    align-items: center;
    elevation: 2;
`
export const ModalButtonsContainer = styled.View`
flex-direction: row;
margin-bottom:3px;
justify-content: space-between;
padding: 0 15px 0;

`;
export const CloseButton = styled(RectButton)`
    width:80px;
    border:1px solid #E62429;
    border-radius:4px;
    align-items: center;
    justify-content: center;
    elevation: 2;
`
export const ModalHeader = styled.View`
flex-direction: row;
justify-content: space-between;
align-items: center;
`;
export const CenteredView = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    margin-top: 0;
`;
export const ModalView = styled.View`
    margin: 20px;
    background-color: #222;
    width: 90%;
    border-radius: 20px;
    padding: 20px;
`;
