import Home from "../pages/Home";
import About from "../pages/About";
import Category from "../pages/Category";
import Poetry from "../pages/Poetry";
import PoetryType from "../pages/PoetryType";
import { RouteItem } from "./type";

export const routes: RouteItem[] = [
  {
    name: "Home",
    options: {
      title: "首页",
    },
    component: Home,
  },
  {
    name: "Category",
    options: {
      title: "分类",
    },
    component: Category,
  },
  {
    name: "About",
    options: {
      title: "关于我",
    },
    component: About,
  },
  {
    name: "Poetry",
    options: {
      title: "诗歌",
    },
    component: Poetry,
  },
  {
    name: "PoetryType",
    options: {
      title: "诗歌分类",
    },
    component: PoetryType,
  },
];
