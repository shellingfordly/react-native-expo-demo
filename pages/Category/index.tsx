import React from "react";
import { List } from "antd-mobile";
import { StyleSheet } from "react-native";
import { PoetryList } from "../../consts/poems";

export default function Category({ navigation }) {
  const go = (item) => {
    if (item.key) {
      navigation.navigate("PoetryType", {
        ...item,
      });
    }
  };

  return (
    <List>
      {PoetryList.map((poetry) => (
        <List.Item
          key={poetry.key}
          onClick={() => {
            go(poetry);
          }}
        >
          {poetry.title}
        </List.Item>
      ))}
    </List>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    padding: 20,
    borderStyle: "solid",
    borderColor: "#999",
    borderWidth: 1,
    textAlign: "center",

    // border: solid 1px #999999;
    // background: #f5f5f5;
    // text-align: center;
    // color: #999999;
    // height: 100%;
  },
});
