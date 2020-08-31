import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StatusBar } from 'react-native';
import { Colors } from '../../styles';
import { addFavorite, removeFavorite } from '../../redux/actions/favorites';
import { Background, Container } from '../../components/organisms';
import { Hero } from '../../redux/actions/heroes/types';
import { HeroDetail } from '../../components/molecules';

export function detailNavigationOptions({ navigation }) {
  return {
    headerShown: false,
  };
}

const Detail: React.FC = ({ navigation }) => {
  const item = navigation.getParam('itemId');
  const dispatch = useDispatch();
  const { savedFavorites } = useSelector((state) => state.favorites);

  const handleFavorite = (item: Hero) => {
    const isFavorite = savedFavorites.findIndex((x: any) => x.id === item.id);
    console.log(savedFavorites);
    if (isFavorite >= 0) {
      dispatch(removeFavorite(item));
    } else {
      dispatch(addFavorite(item));
    }
  };

  return (
    <Background>
      <StatusBar barStyle="light-content" backgroundColor={Colors.BLACK} />
      <Container>
        <HeroDetail
          uniqueId={item.id.toString()}
          onPress={() => navigation.goBack()}
          name={item.name}
          imageSource={`${item.thumbnail.path}.${item.thumbnail.extension}`}
          favorite={
            savedFavorites.findIndex((x: any) => x.id === item.id) >= 0
              ? true
              : false
          }
          description={item.description}
          favoriteOnpress={() => handleFavorite(item)}
        />
      </Container>
    </Background>
  );
};

Detail.sharedElements = (navigation, otherNavigation, showing) => {
  const item = navigation.getParam('itemId');
  return [item.id.toString()];
};

export default Detail;
