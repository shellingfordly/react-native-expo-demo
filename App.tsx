import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./pages/Home";
import About from "./pages/About";
import Poetry from "./pages/Poetry";

export default function App() {
  const { Navigator, Screen } = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Home" component={Home} />
        <Screen name="About" component={About} />
        <Screen name="Poetry" component={Poetry} />
      </Navigator>
    </NavigationContainer>
  );
}