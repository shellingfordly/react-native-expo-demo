import React, { useState } from "react";
import { List } from "antd-mobile";
import { PoetryType, Poetry } from "../../consts/poems";

export default ({ navigation }) => {
  const [listData, setListData] = useState(PoetryType);

  const go = (item) => {
    if (item.key) {
      setListData(Poetry[item.key]);
    } else {
      navigation.navigate("Poetry", { ...item });
    }
  };

  return (
    <List>
      {listData.map((item, index) => (
        <List.Item
          key={index}
          onClick={() => {
            go(item);
          }}
        >
          {item.title || item.chapter}
        </List.Item>
      ))}
    </List>
  );
};
