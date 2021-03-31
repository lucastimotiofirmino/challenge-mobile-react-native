import React, { useCallback, useEffect, useState } from "react";
import { Alert, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Container } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { addFav, removeFav } from "../../store/actions/favorites";
import AsyncStorage from "@react-native-async-storage/async-storage";
interface IFavorites {
  Favorites: any;
}
interface IProps {
  heroe: IHeroe;
}
interface IHeroe {
  id: number;
  thumbnail: {
    path: string;
    extension: string;
  };
  name: string;
}

const FavButton: React.FC<IProps> = ({ heroe }) => {
  const selector = useSelector((state: IFavorites) => state.Favorites);
  const dispatch = useDispatch();

  const [isFavourite, setIsFavourite] = useState(false);

  const verifyFavourite = useCallback(() => {
    const fav = selector.find((s: any) => s.id === heroe.id);
    if (fav) {
      setIsFavourite(true);
    }
  }, [selector, heroe.id]);
  useEffect(() => {
    verifyFavourite();
  }, [verifyFavourite]);
  // 1, 2 , 3
  async function saveStore() {
    await AsyncStorage.setItem("@marvel", JSON.stringify([...selector, heroe]));
  }

  return (
    <Container>
      {isFavourite ? (
        <TouchableOpacity
          onPress={() => {
            setIsFavourite(false);
            dispatch(removeFav(heroe.id));
            saveStore();
          }}
        >
          <AntDesign name="heart" size={20} color="#E62429" />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={async () => {
            setIsFavourite(true);
            dispatch(addFav(heroe));
            saveStore();
          }}
        >
          <AntDesign name="hearto" size={20} color="#E62429" />
        </TouchableOpacity>
      )}
    </Container>
  );
};

export default FavButton;
