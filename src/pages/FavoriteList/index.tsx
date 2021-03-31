import { useNavigation } from "@react-navigation/core";
import React from "react";
import { FlatList, Image, View } from "react-native";
import { useSelector } from "react-redux";
import FavButton from "../../components/FavButton";
import imgEmpty from "../../assets/groot.png";

import {
  Container,
  EnterpriseCard,
  EnterpriseCardDetails,
  EnterpriseCardImage,
  EnterpriseNameText,
  Title,
} from "./styles";

const FavoriteList: React.FC = () => {
  const { navigate } = useNavigation();

  const selector = useSelector((state: any) => state.Favorites);
  return (
    <>
      {selector.length > 0 ? (
        <Container>
          <Title>Favoritos</Title>
          <FlatList
            data={selector}
            keyExtractor={(item) => item.id}
            key={1}
            numColumns={2}
            renderItem={({ item }: any) => (
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
                <EnterpriseCardDetails>
                  <EnterpriseNameText>{item.name}</EnterpriseNameText>
                </EnterpriseCardDetails>
              </EnterpriseCard>
            )}
          />
        </Container>
      ) : (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor:'#000'
          }}
        >
          <Image style={{width: 220, height: 240}} source={imgEmpty} />
          <Title size={20} color="#aaa">"I am Groot!"</Title>
          <Title size={18} family="Ubuntu_400Regular_Italic">"Nenhum favorito adicionado!"</Title>

        </View>
      )}
    </>
  );
};

export default FavoriteList;
