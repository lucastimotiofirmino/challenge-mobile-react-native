import React from "react";
import { View, ActivityIndicator,StatusBar } from "react-native";
import Routes from "./src/routes";

import { Provider as ReduxProvider } from "react-redux";
import store from "./src/store";

import { Roboto_400Regular, Roboto_500Medium } from "@expo-google-fonts/roboto";
import { Ubuntu_700Bold,Ubuntu_400Regular_Italic, useFonts } from "@expo-google-fonts/ubuntu";
import { NavigationContainer } from "@react-navigation/native";

const App: React.FC = () => {

  const [fontsLoaded] = useFonts({
    Ubuntu_700Bold,
    Roboto_400Regular,
    Roboto_500Medium,
    Ubuntu_400Regular_Italic
  });
  
  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#666" />
      </View>
    );
  }
  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor="#222" />
        <View style={{ flex: 1 }}>
          <Routes />
        </View>
      </NavigationContainer>
    </ReduxProvider>
  );
};
export default App;
