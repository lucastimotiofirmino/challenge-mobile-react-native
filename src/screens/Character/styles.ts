import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.View`
  flex: 1;
  background: #f5f5f5;
`;

export const Content = styled.View`
  padding: 20px;
  margin-bottom: 40px;
`;

// CARD
export const CardContainer = styled.View`
  background: #52110a;
  border-radius: 20px;
  margin: 10px;
  flex-direction: row;
  elevation: 10;
`;

export const CardContent = styled.View`
  flex-direction: row;
`;

export const CardMedia = styled.Image`
  width: 130px;
  height: 200px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
`;

export const IconFavorite = styled.Image`
  width: 20px;
  height: 20px;
  align-items: flex-end;
`;

export const ViewInfo = styled.View`
  padding: 15px;
  margin-left: 10px;
`;

export const Row = styled.View`
  flex-direction: row;
`;

export const Title = styled.Text`
  flex: 1;
  font-family: 'Girassol-Regular';
  font-size: 20px;
  color: #f5f5f5;
  text-transform: uppercase;
`;

export const Paragraph = styled.Text`
  flex: 1;
  color: #f5f5f5;
  font-family: 'Girassol-Regular';
  font-size: 10px;
`;

export const CardFooter = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

export const ActionButton = styled.TouchableOpacity``;

export const ButtonTitle = styled.Text`
  font-family: 'Girassol-Regular';
  font-size: 15px;
  text-transform: uppercase;
  color: #ffffff;
`;

export const ButtonIcon = styled.Image`
  width: 10px;
  height: 10px;
  margin-top: 5px;
  margin-left: 20px;
`;

// MODAL
export const ModalContainer = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.ScrollView`
  background-color: #ffffff;
  height: 100px;
  margin-top: 60px;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
`;

export const ModalActionButton = styled.TouchableOpacity`
  align-items: flex-end;
  position: relative;
`;

export const ActionButtonIcon = styled.Image`
  width: 20px;
  height: 20px;
`;

export const Gradient = styled(LinearGradient).attrs({
  colors: ['rgba(0, 0, 0, 0.3)', 'rgba(0, 0, 0, 0.2)', 'trasparent'],
  start: { x: 0, y: 0 },
  end: { x: 0, y: 1 },
})`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 300px;
`;

export const ImageCover = styled.ImageBackground.attrs({
  borderTopLeftRadius: 50,
  borderTopRightRadius: 50,
})`
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 300px;
`;

export const ViewInfoModal = styled.View`
  flex: 1;
  padding: 20px;
`;

export const RowModal = styled.View`
  flex-direction: row;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const H1 = styled.Text`
  font-size: 20px;
  font-family: 'Montserrat-ExtraBold';
`;

export const H2 = styled.Text`
  font-size: 16px;
  font-family: 'Montserrat-SemiBold';
`;

export const ParagraphModal = styled.Text`
  font-size: 14px;
  font-family: 'Montserrat-Medium';
`;

export const ViewSearch = styled.View``;

export const InputNameHero = styled.TextInput`
  height: 50px;
  border-color: #52110a;
  border-width: 2px;
  padding: 10px;
  color: #52110a;
  font-family: 'Roboto-Medium';
  font-size: 16px;
`;
