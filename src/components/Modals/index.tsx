import React, { useState } from "react";
import { Modal, StyleSheet, View } from "react-native";

import {
  CloseButton,
  Description,
  ModalButton,
  ModalButtonsContainer,
  ModalHeader,
  CenteredView,
  ModalView,
} from "./styles";
interface IProps {
  series: any;
  events: any;
}
const Modals: React.FC<IProps> = ({ series, events }) => {
  const [modalSeries, setModalSeries] = useState(false);
  const [modalEvents, setModalEvents] = useState(false);

  return (
    <>
      {/* modal serie */}
      <Modal animationType="fade" transparent={true} visible={modalSeries}>
        <CenteredView>
          <ModalView>
            <ModalHeader>
              <Description size={20} color="#E62429">
                Séries
              </Description>

              <CloseButton
                onPress={() => {
                  setModalSeries(!modalSeries);
                }}
              >
                <Description>Fechar</Description>
              </CloseButton>
            </ModalHeader>
            {series.length > 0 ? (
              <View style={{ marginTop: 10 }}>
                {series.map((serie: any, key: number) => (
                  <Description key={key} size={14}>
                    {" "}
                    - {serie.name}{" "}
                  </Description>
                ))}
              </View>
            ) : (
              <View style={{ marginTop: 10 }}>
                <Description>Nenhuma Série encontrado</Description>
              </View>
            )}
          </ModalView>
        </CenteredView>
      </Modal>

      {/* modal eventos */}

      <Modal animationType="fade" transparent={true} visible={modalEvents}>
        <CenteredView>
          <ModalView>
            <ModalHeader>
              <Description size={20} color="#E62429">
                Eventos
              </Description>

              <CloseButton
                onPress={() => {
                  setModalEvents(!modalEvents);
                }}
              >
                <Description>Fechar</Description>
              </CloseButton>
            </ModalHeader>
            {events.length > 0 ? (
              <View style={{ marginTop: 10 }}>
                {events.map((event: any, key: number) => (
                  <Description key={key} size={14}>
                    - {event.name}
                  </Description>
                ))}
              </View>
            ) : (
              <View style={{ marginTop: 10 }}>
                <Description>Nenhum Evento encontrado</Description>
              </View>
            )}
          </ModalView>
        </CenteredView>
      </Modal>
      <ModalButtonsContainer>
        <ModalButton
          onPress={() => {
            setModalSeries(true);
          }}
        >
          <Description>Series</Description>
        </ModalButton>
        <ModalButton
          onPress={() => {
            setModalEvents(true);
          }}
        >
          <Description>Eventos</Description>
        </ModalButton>
      </ModalButtonsContainer>
    </>
  );
};

export default Modals;
