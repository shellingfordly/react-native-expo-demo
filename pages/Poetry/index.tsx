import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function PoetryComp({ route }) {
  const title = route.params.title || "";
  const paragraphs = route.params.paragraphs || route.params.content;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <ScrollView>
        {paragraphs.map((value, index) => (
          <Text style={styles.text} key={index}>
            {value}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 25,
    height: "100%",
    backgroundColor: "#eaeaea",
  },
  title: {
    textAlign: "center",
    margin: 15,
  },
  text: {
    textAlign: "center",
  },
});
