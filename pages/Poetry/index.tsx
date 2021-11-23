import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import PoetryType from "../PoetryType";

export default function PoetryComp({ route, navigation }) {
  const title = route.params.title;
  const content = route.params.content;

  if (content instanceof Array && typeof content[0] === "string") {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <ScrollView>
          <View style={styles.content}>
            {content.map((value, index) => (
              <Text style={styles.text} key={index}>
                {value}
              </Text>
            ))}
          </View>
        </ScrollView>
      </View>
    );
  } else {
    return <PoetryType route={route} navigation={navigation} />;
  }
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
    height: "100%",
    backgroundColor: "#eaeaea",
  },
  content: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  title: {
    textAlign: "center",
    margin: 15,
  },
  text: {
    textAlign: "center",
  },
});
