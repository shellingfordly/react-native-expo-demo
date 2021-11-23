import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { routes } from "./router/routes";
import Layout from "./layouts/Layout";

export default function App() {
  const { Navigator, Screen, Group } = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Navigator>
        {routes.map((route) => (
          <Screen
            name={route.name}
            component={Layout}
            options={() => ({
              title: route.options.title,
              header: () => route.options?.header || false,
            })}
            key={route.name}
          />
        ))}
      </Navigator>
    </NavigationContainer>
  );
}
