import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../utils/colors';

export const Container = styled.SafeAreaView``;

export const Background = styled(LinearGradient).attrs({
  start: {x: 0.0, y: 0.25},
  end: {x: 0.5, y: 1.0},
  locations: [0, 0.5, 0.6],
  colors: ['#180202', '#460D0D', '#760F0F'],
})`
  flex: 1;
`;

export const LogoView = styled.View`
  padding: 40px;
`;

export const ImageLogo = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 100%;
  height: 100px;
`;

export const FilterContainer = styled.View`
  padding: 20px;
  margin-bottom: 15px;
  background-color: ${Colors.filter};
`;

export const FavoritosFilterView = styled.View`
  align-items: center;
  flex-direction: row;
  flex: 1;
`;

export const Row = styled.View`
  flex-direction: row;
`;

export const FavoritosFilterText = styled.Text`
  color: ${Colors.white};
  font-size: 14px;
  flex: 1;
  font-family: 'Marvel-Regular';
`;

export const FilterTextInput = styled.TextInput`
  background-color: ${Colors.white};
  color: ${Colors.black};
  font-size: 15px;
  font-family: 'Marvel-Regular';
  text-align: center;
  text-align-vertical: center;
  flex: 1;
  margin-bottom: 15px;
  border-radius: 30px;
`;

export const CharactersTitle = styled.Text`
  color: ${Colors.red};
  font-size: 28px;
  font-family: 'AmericanKestrelCondensed-wzwx';
  text-align: right;
  flex: 1;
  padding: 8px;
`;
