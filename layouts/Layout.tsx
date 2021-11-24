import React, { useState, useEffect } from "react";
import { View, StyleSheet, DeviceEventEmitter } from "react-native";
import LayoutNavBar from "./LayoutNavBar";
import { NavBar } from "antd-mobile";
import { routes } from "../router/routes";

export default function Layout(props) {
  const isHome = props.route.name !== "Home";
  const item = routes.find((item) => item.name === props.route.name);
  const getTitle = () => {
    const params = props.route.params;
    return params?.title ? params.title : item.options.title;
  };
  const [title, setTitle] = useState(getTitle());
  const onBack = () => {
    if (isHome) props.navigation.goBack({ params: { title } });
  };

  useEffect(() => {
    const listener = DeviceEventEmitter.addListener("setLayoutTitle", setTitle);
    return () => {
      listener.remove();
    };
  }, []);

  return (
    <View style={styles.app}>
      <View>
        <NavBar back={isHome ? "" : null} onBack={onBack}>
          {title}
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
