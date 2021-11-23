import React from "react";
import {
  AppOutline,
  UnorderedListOutline,
  UserOutline,
} from "antd-mobile-icons";
import { TabBar } from "antd-mobile";

export default function LayoutNavBar({ route, navigation }) {
  const setRouteActive = (routeName: string) => {
    navigation.navigate(routeName);
  };

  const tabs = [
    {
      name: "Home",
      title: "首页",
      icon: <AppOutline />,
    },
    {
      name: "Category",
      title: "分类",
      icon: <UnorderedListOutline />,
    },
    {
      name: "About",
      title: "关于我",
      icon: <UserOutline />,
    },
  ];

  return (
    <TabBar activeKey={route.name} onChange={(value) => setRouteActive(value)}>
      {tabs.map((item) => (
        <TabBar.Item key={item.name} icon={item.icon} title={item.title} />
      ))}
    </TabBar>
  );
}
