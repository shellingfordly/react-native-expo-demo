import React from "react";
import { View, StyleSheet } from "react-native";
import LayoutNavBar from "./LayoutNavBar";
import { NavBar } from "antd-mobile";
import { routes } from "../router/routes";

export default function Layout(props) {
  const isHome = props.route.name !== "Home";

  const onBack = () => {
    if (isHome) props.navigation.goBack();
  };

  const item = routes.find((item) => item.name === props.route.name);

  return (
    <View style={styles.app}>
      <View>
        <NavBar back={isHome ? "" : null} onBack={onBack}>
          {item.options.title || ""}
        </NavBar>
      </View>
      <View style={styles.body}>
        <item.component {...props} />
      </View>
      <LayoutNavBar {...props} />
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    height: "100%",
    flexDirection: "column",
    backgroundColor: "#fff",
  },
  body: {
    flex: 1,
  },
});
