import React, { useState } from "react";

import { List, InfiniteScroll } from "antd-mobile";
import { ContentType } from "../../consts/poems";
import { ScrollView } from "react-native";
import { sleep } from "antd-mobile/es/utils/sleep";

let count = 0;

export default function PoetryType({ route, navigation }) {
  const [allContent] = useState(route.params.content || route.params.children);
  const [data, setData] = useState<ContentType>(allContent.slice(0, 20));
  const [hasMore, setHasMore] = useState(true);

  async function mockRequest() {
    await sleep(500);
    count++;
    return allContent.slice(20 * count, 20 * (count + 1));
  }

  async function loadMore() {
    const append = await mockRequest();
    setData((data) => [...data, ...append]);
    setHasMore(append.length > 0);
  }

  function go(item) {
    let title = item.title || item.chapter;
    let content = item.content || item.paragraphs || [];
    if (!route.params.content) {
      if (Array.isArray(item.content)) {
        content = item.content;
      } else {
        content = item.content.content || item.content.paragraphs || [];
      }
    }
    navigation.navigate("Poetry", { title, content });
  }

  return (
    <ScrollView>
      <List>
        {data.map((item, index) => (
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
      <InfiniteScroll loadMore={loadMore} hasMore={hasMore} />
    </ScrollView>
  );
}
