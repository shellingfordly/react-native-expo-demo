import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import PoetryType from "../PoetryType";

export default function PoetryComp({ route, navigation }) {
  const title = route.params.title;
  const content = route.params.content;

  if (
    (content instanceof Array && typeof content[0] !== "object") ||
    typeof content === "string"
  ) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <ScrollView>
          {content instanceof Array ? (
            <View style={styles.content}>
              {content.map((value, index) => (
                <Text style={styles.text} key={index}>
                  {value}
                </Text>
              ))}
            </View>
          ) : (
            <Text style={styles.content}>{content}</Text>
          )}
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
    backgroundColor: "#efefef",
  },
  content: {
    paddingLeft: 20,
    paddingRight: 20,
    textAlign: "center",
    fontSize: 20,
    lineHeight: 40,
  },
  title: {
    textAlign: "center",
    margin: 15,
    fontSize: 30,
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    lineHeight: 40,
  },
});
