import React from "react";
import { Button, View, Text, StyleSheet } from "react-native";

export default function Home({ route, navigation }) {
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text>from</Text>
      <Button title="update params" />
      <Button onPress={goBack} title="back home" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#eaeaea",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    paddingBottom: 50,
  },
  btn: {
    width: 200,
  },
});
