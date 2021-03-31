import React, { useEffect, useState, useCallback } from "react";
import HeroesList from "../../components/HeroesList";
import api from "../../services";
import { useNavigation } from "@react-navigation/native";

import {
  Container,
  Title,
  EnterpriseCard,
  EnterpriseCardImage,
  EnterpriseCardDetails,
  EnterpriseNameText,
} from "./styles";
import { FlatList } from "react-native";
import Skeleton from "../../components/Skeleton";
import FavButton from "../../components/FavButton";

interface IHeroe {
  id: number;
  thumbnail: {
    path: string;
    extension: string;
  };
  name: string;
}
const List: React.FC = () => {
  const { navigate } = useNavigation();
  const [heroes, setHeroes] = useState<IHeroe[]>([]);
  const [offset, setOffset] = useState(0);

  async function loadMore() {
    const response = await api.get("", {
      params: { limit: 10, offset },
    });
    setHeroes([...heroes, ...response.data.data.results]);
    setOffset(offset + 10);
  }
  useEffect(() => {
    loadMore();
  }, []);
  return (
    <Container>
      <Title>Heróis</Title>
      {heroes.length > 0 ? (
        <FlatList
          data={heroes}
          key={2}
          numColumns={2}
          onEndReached={loadMore}
          onEndReachedThreshold={0.5}
          renderItem={({ item }) => (
            <EnterpriseCard
              onPress={() => {
                navigate("Details", { item });
              }}
              activeOpacity={0.8}
              key={item.id}
            >
              <EnterpriseCardImage
                source={{
                  uri: `${item.thumbnail.path}.${item.thumbnail.extension}`,
                }}
              />
              <FavButton heroe={item} />
              <EnterpriseCardDetails>
                <EnterpriseNameText>{item.name}</EnterpriseNameText>
              </EnterpriseCardDetails>
            </EnterpriseCard>
          )}
        />
      ) : (
        <Skeleton />
      )}
    </Container>
  );
};

export default List;
