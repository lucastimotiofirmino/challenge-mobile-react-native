import React from "react";
import { View, Text, StatusBar } from "react-native";

import * as Styles from "./styles";

const Marvel: React.FC = () => {
  return (
    <Styles.Container>
      <StatusBar barStyle="light-content" backgroundColor="#312e38" />
      <View style={{ flex: 1, backgroundColor: "#312e38" }}>
        <Text>Desafio Superlogica</Text>
      </View>
    </Styles.Container>
  );
};

export default Marvel;
