import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function About({ navigation }) {
  function go(event) {
    const url = {
      Github: "https://github.com/shellingfordly",
      Gitee: "https://gitee.com/shellingfordly",
      Blog: "https://shellingfordly.gitee.io",
    };
    window.open(url[event.target.innerText]);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.name}>shellingfordly</Text>
      <Text>一条游走在前端的咸鱼程序员</Text>
      <View style={styles.link} onClick={go}>
        <Text style={[styles.text]}>Github</Text>
        <Text style={[styles.text, { left: "33%" }]}>Gitee</Text>
        <Text style={[styles.text, { left: "60%" }]}>Blog</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: "center",
    fontSize: 20,
    lineHeight: 40,
  },
  name: {
    fontSize: 30,
    marginTop: 20,
    marginBottom: 20,
  },
  link: {
    position: "relative",
    width: "60%",
    marginTop: 20,
    textAlign: "center",
  },
  text: {
    position: "absolute",
    width: "33%",
    top: 0,
    left: 0,
    fontSize: 18,
    textDecorationLine: "underline",
    color: "#222",
  },
});
