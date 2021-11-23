import caocao from "../data/caocao/caocao.json";
import chuci from "../data/chuci/chuci.json";
import lunyu from "../data/lunyu/lunyu.json";
import shijing from "../data/shijing/shijing.json";
import yuanqu from "../data/yuanqu/yuanqu.json";
import daxue from "../data/sishuwujing/daxue.json";
import mengzi from "../data/sishuwujing/mengzi.json";
import zhongyong from "../data/sishuwujing/zhongyong.json";
import baijiaxing from "../data/mengxue/baijiaxing.json";
import dizigui from "../data/mengxue/dizigui.json";
import guwenguanzhi from "../data/mengxue/guwenguanzhi.json";
import qianjiashi from "../data/mengxue/qianjiashi.json";
import qianziwen from "../data/mengxue/qianziwen.json";
import sanzijingNew from "../data/mengxue/sanzijing-new.json";
import sanzijingOld from "../data/mengxue/sanzijing-traditional.json";
import shenglvqimeng from "../data/mengxue/shenglvqimeng.json";
import tangshisanbaishou from "../data/mengxue/tangshisanbaishou.json";
import wenzimengqiu from "../data/mengxue/wenzimengqiu.json";
import youxueqionglin from "../data/mengxue/youxueqionglin.json";
import zengguangxianwen from "../data/mengxue/zengguangxianwen.json";
import zhuzijiaxun from "../data/mengxue/zhuzijiaxun.json";

export type ContentType =
  | typeof caocao
  | typeof chuci
  | typeof lunyu
  | typeof shijing
  | PoetryItem[];

export interface PoetryItem {
  title: string;
  key: string;
  content?: ContentType;
  children?: PoetryItem[];
}

export const PoetryList = [
  {
    title: "曹操诗集",
    key: "caocao",
    content: caocao,
  },
  {
    title: "楚辞",
    key: "chuci",
    content: chuci,
  },
  {
    title: "论语",
    key: "lunyu",
    content: lunyu,
  },
  {
    title: "诗经",
    key: "shijing",
    content: shijing,
  },
  {
    title: "四书五经",
    key: "sishuwujing",
    children: [
      {
        title: "大学",
        key: "daxue",
        content: daxue,
      },
      {
        title: "中庸",
        key: "zhongyong",
        content: zhongyong,
      },
      {
        title: "孟子",
        key: "mengzi",
        content: mengzi,
      },
    ],
  },
  {
    title: "元曲",
    key: "yuanqu",
    content: yuanqu,
  },
  {
    title: "蒙学",
    key: "mengxue",
    children: [
      {
        title: "百家姓",
        key: "baijiaxing",
        content: baijiaxing,
      },
      {
        title: "古文觀止",
        key: "guwenguanzhi",
        content: guwenguanzhi,
      },
      {
        title: "千家詩",
        key: "qianjiashi",
        content: qianjiashi,
      },
      {
        title: "千字文",
        key: "qianziwen",
        content: qianziwen,
      },
      {
        title: "三字經（新版）",
        key: "sanzijing-new",
        content: sanzijingNew,
      },
      {
        title: "三字經（旧版）",
        key: "sanzijing-traditional",
        content: sanzijingOld,
      },
      {
        title: "聲律啓蒙",
        key: "shenglvqimeng",
        content: shenglvqimeng,
      },
    ],
  },
];
