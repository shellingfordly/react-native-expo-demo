import tangAuthor from "../../data/json/authors.tang.json";
import songAuthor from "../../data/json/authors.song.json";
import songci from "../../data/ci/宋词三百首.json";
import tangshi from "../../data/json/唐诗三百首.json";
import caocao from "../../data/caocao/caocao.json";
import chuci from "../../data/chuci/chuci.json";
import lunyu from "../../data/lunyu/lunyu.json";
import shijing from "../../data/shijing/shijing.json";
import yuanqu from "../../data/yuanqu/yuanqu.json";
import daxue from "../../data/sishuwujing/daxue.json";
import mengzi from "../../data/sishuwujing/mengzi.json";
import zhongyong from "../../data/sishuwujing/zhongyong.json";
import baijiaxing from "../../data/mengxue/baijiaxing.json";
import dizigui from "../../data/mengxue/dizigui.json";
import guwenguanzhi from "../../data/mengxue/guwenguanzhi.json";
import qianjiashi from "../../data/mengxue/qianjiashi.json";
import qianziwen from "../../data/mengxue/qianziwen.json";
import sanzijingNew from "../../data/mengxue/sanzijing-new.json";
import sanzijingOld from "../../data/mengxue/sanzijing-traditional.json";
import shenglvqimeng from "../../data/mengxue/shenglvqimeng.json";
import tangshisanbaishou from "../../data/mengxue/tangshisanbaishou.json";
import wenzimengqiu from "../../data/mengxue/wenzimengqiu.json";
import youxueqionglin from "../../data/mengxue/youxueqionglin.json";
import zengguangxianwen from "../../data/mengxue/zengguangxianwen.json";
import zhuzijiaxun from "../../data/mengxue/zhuzijiaxun.json";

export const data = [
  {
    key: 0,
    title: "作者",
    url: require("../../assets/icon/author.svg"),
    hideNav: false,
    content: [
      {
        title: "唐代作者",
        content: tangAuthor,
      },
      {
        title: "宋代作者",
        content: songAuthor,
      },
    ],
  },
  {
    key: 1,
    title: "唐诗三百首",
    url: require("../../assets/icon/tangshi.svg"),
    hideNav: true,
    content: tangshi,
  },
  {
    key: 2,
    title: "宋词三百首",
    url: require("../../assets/icon/songci.svg"),
    hideNav: true,
    content: songci,
  },
  {
    key: 3,
    title: "曹操诗集",
    url: require("../../assets/icon/caocao.svg"),
    hideNav: true,
    content: caocao,
  },
  {
    key: 4,
    title: "楚辞",
    url: require("../../assets/icon/chuci.svg"),
    hideNav: true,
    content: chuci,
  },
  {
    key: 5,
    title: "论语",
    url: require("../../assets/icon/lunyu.svg"),
    hideNav: true,
    content: lunyu,
  },
  {
    key: 6,
    title: "诗经",
    url: require("../../assets/icon/shijing.svg"),
    hideNav: true,
    content: shijing,
  },
  {
    key: 7,
    title: "四书五经",
    url: require("../../assets/icon/sishuwujing.svg"),
    hideNav: true,
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
    key: 8,
    title: "元曲",
    url: require("../../assets/icon/yuanqu.svg"),
    hideNav: true,
    content: yuanqu,
  },
  {
    key: 9,
    title: "蒙学",
    url: require("../../assets/icon/mengxue.svg"),
    hideNav: true,
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
