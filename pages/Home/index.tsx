import React, { useEffect } from "react";
import { Text, View, StyleSheet, DeviceEventEmitter } from "react-native";
import { data } from "./const";
import IconFA from "react-native-vector-icons/FontAwesome";
import Util from "./utils";

function randomColor() {
  return `#${Math.random().toString(16).slice(2, 8)}`;
}

export default function Home({ route, navigation }) {
  const width = Util.size.width / 3;
  function onClick(item) {
    navigation.navigate("PoetryType", {
      ...item,
    });
  }

  useEffect(() => {
    DeviceEventEmitter.emit("setLayoutTitle", "首页");
  }, [route]);

  return (
    <>
      {data.map((ele, index) => {
        const top = Math.floor(index / 3) * width;
        const left = (index % 3) * width;
        return (
          <View
            key={ele.key}
            style={[styles.touchBox, { top, left }]}
            onClick={() => onClick(ele)}
          >
            <View style={styles.boxContainer}>
              <Text style={styles.boxText}>{ele.title}</Text>
              <img src={ele.url} width={50} />
            </View>
          </View>
        );
      })}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemWrapper: {
    backgroundColor: "#f3f3f3",
  },
  touchBox: {
    width: Util.size.width / 3,
    height: Util.size.width / 3,
    backgroundColor: "#fff",
    position: "absolute",
    left: 0,
    top: 0,
    borderWidth: Util.pixel,
    borderColor: "#ccc",
  },
  touchBoxContainer: {
    width: Util.size.width,
    marginTop: 30,
  },
  boxContainer: {
    alignItems: "center",
    paddingTop: 20,
    width: Util.size.width / 3,
    height: Util.size.width / 3,
  },
  boxIcon: {
    position: "relative",
    top: -10,
  },
  boxText: {
    position: "absolute",
    bottom: 15,
    width: Util.size.width / 3,
    textAlign: "center",
    left: 0,
    backgroundColor: "transparent",
  },
});
