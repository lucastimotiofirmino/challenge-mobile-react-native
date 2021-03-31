import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

import {
  Container,
  Image,
  ImageGradient,
  Title,
  Description,
  ScrollContainer,
} from "./styles";
import {
  StyleSheet,
} from "react-native";

import Modals from "../../components/Modals";

const Details: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const { item } = route.params as any;
  const series = item.series.items;
  const events = item.events.items;
  function navigateBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <Image
        source={{ uri: `${item.thumbnail.path}.${item.thumbnail.extension}` }}
      >
        <ImageGradient />
        <Title size={24} color="#E62429">
          {item.name}
        </Title>
      </Image>
      <ScrollContainer>
        <Description> {item.description} </Description>
      </ScrollContainer>
      <Modals series={series} events={events} />
    </Container>
  );
};
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 0,
  },
  modalView: {
    margin: 20,
    backgroundColor: "#222",
    width: "90%",
    borderRadius: 20,
    padding: 20,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
export default Details;
