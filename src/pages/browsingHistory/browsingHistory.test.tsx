import React from "react";
import { render } from "../../testUtils";
import BrowsingHistory from "./browsingHistory";
import {fireEvent, waitFor, waitForElementToBeRemoved} from "@testing-library/dom";

jest.mock("../../util.ts", () => {
    const browsingHistoryData = [
        {
            time: "5月7日",
            items: [
                {
                    bookId: 5340,
                    image: "http://img3m6.ddimg.cn/98/24/23648426-1_h_4.jpg",
                    title: "光荣与梦想（精装全四册）",
                    price: 151,
                    id: 358,
                },
                {
                    bookId: 5340,
                    image: "http://img3m6.ddimg.cn/98/24/23648426-1_h_4.jpg",
                    title: "光荣与梦想（精装全四册）",
                    price: 151,
                    id: 357,
                },
                {
                    bookId: 5340,
                    image: "http://img3m6.ddimg.cn/98/24/23648426-1_h_4.jpg",
                    title: "光荣与梦想（精装全四册）",
                    price: 151,
                    id: 356,
                },
                {
                    bookId: 3580,
                    image: "http://img3m0.ddimg.cn/78/8/26440800-1_h_2.jpg",
                    title: "哲学史讲演录",
                    price: 112.6,
                    id: 355,
                },
                {
                    bookId: 3580,
                    image: "http://img3m0.ddimg.cn/78/8/26440800-1_h_2.jpg",
                    title: "哲学史讲演录",
                    price: 112.6,
                    id: 354,
                },
            ],
        },
        {
            time: "5月6日",
            items: [
                {
                    bookId: 3652,
                    image: "http://img3m0.ddimg.cn/67/4/24003310-1_h_7.jpg",
                    title: "Python编程 从入门到实践",
                    price: 59.7,
                    id: 345,
                },
                {
                    bookId: 3652,
                    image: "http://img3m0.ddimg.cn/67/4/24003310-1_h_7.jpg",
                    title: "Python编程 从入门到实践",
                    price: 59.7,
                    id: 344,
                },
                {
                    bookId: 3652,
                    image: "http://img3m0.ddimg.cn/67/4/24003310-1_h_7.jpg",
                    title: "Python编程 从入门到实践",
                    price: 59.7,
                    id: 343,
                },
                {
                    bookId: 3652,
                    image: "http://img3m0.ddimg.cn/67/4/24003310-1_h_7.jpg",
                    title: "Python编程 从入门到实践",
                    price: 59.7,
                    id: 342,
                },
                {
                    bookId: 3654,
                    image: "http://img3m0.ddimg.cn/2/7/23594870-1_h_13.jpg",
                    title: "数学之美(第二版)",
                    price: 47,
                    id: 340,
                },
            ],
        },
        {
            time: "5月5日",
            items: [
                {
                    bookId: 4970,
                    image: "http://img3m0.ddimg.cn/67/11/23774620-1_h_2.jpg",
                    title: "读懂“一带一路”",
                    price: 37.1,
                    id: 339,
                },
                {
                    bookId: 39,
                    image: "http://img3m3.ddimg.cn/43/36/28470463-1_h_15.jpg",
                    title: "乖，摸摸头2.0（大冰作品！当当专享100%大冰签名。和大冰一起，DIY专属自己的小乖！）",
                    price: 37.6,
                    id: 338,
                },
                {
                    bookId: 39,
                    image: "http://img3m3.ddimg.cn/43/36/28470463-1_h_15.jpg",
                    title: "乖，摸摸头2.0（大冰作品！当当专享100%大冰签名。和大冰一起，DIY专属自己的小乖！）",
                    price: 37.6,
                    id: 337,
                },
                {
                    bookId: 39,
                    image: "http://img3m3.ddimg.cn/43/36/28470463-1_h_15.jpg",
                    title: "乖，摸摸头2.0（大冰作品！当当专享100%大冰签名。和大冰一起，DIY专属自己的小乖！）",
                    price: 37.6,
                    id: 336,
                },
                {
                    bookId: 39,
                    image: "http://img3m3.ddimg.cn/43/36/28470463-1_h_15.jpg",
                    title: "乖，摸摸头2.0（大冰作品！当当专享100%大冰签名。和大冰一起，DIY专属自己的小乖！）",
                    price: 37.6,
                    id: 335,
                },
                {
                    bookId: 39,
                    image: "http://img3m3.ddimg.cn/43/36/28470463-1_h_15.jpg",
                    title: "乖，摸摸头2.0（大冰作品！当当专享100%大冰签名。和大冰一起，DIY专属自己的小乖！）",
                    price: 37.6,
                    id: 334,
                },
                {
                    bookId: 39,
                    image: "http://img3m3.ddimg.cn/43/36/28470463-1_h_15.jpg",
                    title: "乖，摸摸头2.0（大冰作品！当当专享100%大冰签名。和大冰一起，DIY专属自己的小乖！）",
                    price: 37.6,
                    id: 333,
                },
                {
                    bookId: 39,
                    image: "http://img3m3.ddimg.cn/43/36/28470463-1_h_15.jpg",
                    title: "乖，摸摸头2.0（大冰作品！当当专享100%大冰签名。和大冰一起，DIY专属自己的小乖！）",
                    price: 37.6,
                    id: 332,
                },
                {
                    bookId: 39,
                    image: "http://img3m3.ddimg.cn/43/36/28470463-1_h_15.jpg",
                    title: "乖，摸摸头2.0（大冰作品！当当专享100%大冰签名。和大冰一起，DIY专属自己的小乖！）",
                    price: 37.6,
                    id: 331,
                },
                {
                    bookId: 39,
                    image: "http://img3m3.ddimg.cn/43/36/28470463-1_h_15.jpg",
                    title: "乖，摸摸头2.0（大冰作品！当当专享100%大冰签名。和大冰一起，DIY专属自己的小乖！）",
                    price: 37.6,
                    id: 330,
                },
                {
                    bookId: 37,
                    image: "http://img3m5.ddimg.cn/56/4/23761145-1_h_6.jpg",
                    title: "人间失格（日本小说家太宰治的自传体小说，李现推荐）",
                    price: 18.8,
                    id: 329,
                },
                {
                    bookId: 38,
                    image: "http://img3m0.ddimg.cn/7/27/25137790-1_h_4.jpg",
                    title: "活着（2017年新版）",
                    price: 26.6,
                    id: 328,
                },
                {
                    bookId: 2526,
                    image: "http://img3m2.ddimg.cn/37/16/24220882-1_h_3.jpg",
                    title: "刻意练习+练习的心态+学习之道（励志套装3册）",
                    price: 72.3,
                    id: 327,
                },
                {
                    bookId: 1407,
                    image: "http://img3m2.ddimg.cn/56/24/25082102-1_h_3.jpg",
                    title: "林巧稚传",
                    price: 30,
                    id: 326,
                },
            ],
        },
        {
            time: "4月24日",
            items: [
                {
                    bookId: 259,
                    image: "http://img3m5.ddimg.cn/45/1/25100505-1_h_2.jpg",
                    title:
                        "角儿（严歌苓最新作品：书中收录《小顾艳传》《角儿》《青柠檬色的鸟》《乖乖贝比》《老囚》《谁家有女初长成》等十部严歌苓精选的中短篇小说）",
                    price: 23.5,
                    id: 325,
                },
                {
                    bookId: 259,
                    image: "http://img3m5.ddimg.cn/45/1/25100505-1_h_2.jpg",
                    title:
                        "角儿（严歌苓最新作品：书中收录《小顾艳传》《角儿》《青柠檬色的鸟》《乖乖贝比》《老囚》《谁家有女初长成》等十部严歌苓精选的中短篇小说）",
                    price: 23.5,
                    id: 324,
                },
                {
                    bookId: 259,
                    image: "http://img3m5.ddimg.cn/45/1/25100505-1_h_2.jpg",
                    title:
                        "角儿（严歌苓最新作品：书中收录《小顾艳传》《角儿》《青柠檬色的鸟》《乖乖贝比》《老囚》《谁家有女初长成》等十部严歌苓精选的中短篇小说）",
                    price: 23.5,
                    id: 323,
                },
                {
                    bookId: 333,
                    image: "http://img3m5.ddimg.cn/56/30/23278025-1_h_2.jpg",
                    title: "米格尔街（诺贝尔文学奖得主奈保尔成名作，获毛姆文学奖；生活如此绝望，每个人却都兴高采烈地活着）",
                    price: 26.6,
                    id: 322,
                },
                {
                    bookId: 333,
                    image: "http://img3m5.ddimg.cn/56/30/23278025-1_h_2.jpg",
                    title: "米格尔街（诺贝尔文学奖得主奈保尔成名作，获毛姆文学奖；生活如此绝望，每个人却都兴高采烈地活着）",
                    price: 26.6,
                    id: 321,
                },
            ],
        },
        {
            time: "4月12日",
            items: [
                {
                    bookId: 2189,
                    image: "http://img3m4.ddimg.cn/40/11/25299094-1_h_2.jpg",
                    title: "非洲手鼓入门一本通",
                    price: 52.7,
                    id: 320,
                },
                {
                    bookId: 2189,
                    image: "http://img3m4.ddimg.cn/40/11/25299094-1_h_2.jpg",
                    title: "非洲手鼓入门一本通",
                    price: 52.7,
                    id: 319,
                },
                {
                    bookId: 2189,
                    image: "http://img3m4.ddimg.cn/40/11/25299094-1_h_2.jpg",
                    title: "非洲手鼓入门一本通",
                    price: 52.7,
                    id: 317,
                },
                {
                    bookId: 2189,
                    image: "http://img3m4.ddimg.cn/40/11/25299094-1_h_2.jpg",
                    title: "非洲手鼓入门一本通",
                    price: 52.7,
                    id: 316,
                },
                {
                    bookId: 1670,
                    image: "http://img3m8.ddimg.cn/83/19/23720978-1_h_2.jpg",
                    title: "观看之道",
                    price: 26.9,
                    id: 313,
                },
                {
                    bookId: 5215,
                    image: "http://img3m7.ddimg.cn/38/22/27932987-1_h_5.jpg",
                    title: "我和我的祖国（庆祝共和国70华诞！团购电话：4001066666转6）",
                    price: 67.6,
                    id: 312,
                },
                {
                    bookId: 5215,
                    image: "http://img3m7.ddimg.cn/38/22/27932987-1_h_5.jpg",
                    title: "我和我的祖国（庆祝共和国70华诞！团购电话：4001066666转6）",
                    price: 67.6,
                    id: 311,
                },
            ],
        },
        {
            time: "4月11日",
            items: [
                {
                    bookId: 1908,
                    image: "http://img3m1.ddimg.cn/17/19/25275311-1_h_1.jpg",
                    title: "褚遂良雁塔圣教序（中华经典碑帖彩色放大本）",
                    price: 20,
                    id: 310,
                },
                {
                    bookId: 1624,
                    image: "http://img3m1.ddimg.cn/71/30/23976881-1_h_6.jpg",
                    title: "华夏万卷钢笔字帖 《道德经》硬笔楷书字帖（全新升级 附彩色作品纸）田英章书 硬笔书法学生成人字帖 大学男女生临摹描红手写体",
                    price: 9.7,
                    id: 309,
                },
                {
                    bookId: 231,
                    image: "http://img3m6.ddimg.cn/24/29/25199286-1_h_4.jpg",
                    title: "斯通纳",
                    price: 30.4,
                    id: 308,
                },
            ],
        },
        {
            time: "4月9日",
            items: [
                {
                    bookId: 44,
                    image: "http://img3m2.ddimg.cn/62/32/25119332-1_h_9.jpg",
                    title: "东野圭吾：白夜行（易烊千玺、孟非推荐，东野圭吾作品无冕之王）",
                    price: 59.6,
                    id: 307,
                },
                {
                    bookId: 4382,
                    image: "http://img3m7.ddimg.cn/42/18/25307907-1_h_9.jpg",
                    title: "薛兆丰经济学讲义",
                    price: 40.8,
                    id: 306,
                },
                {
                    bookId: 3654,
                    image: "http://img3m0.ddimg.cn/2/7/23594870-1_h_13.jpg",
                    title: "数学之美(第二版)",
                    price: 47,
                    id: 305,
                },
                {
                    bookId: 2553,
                    image: "http://img3m7.ddimg.cn/72/25/27854217-1_h_7.jpg",
                    title: "精力管理手册：时间管理专家、畅销书作家张萌新作，50个高效充电法，做不疲惫的职场人",
                    price: 37.7,
                    id: 304,
                },
            ],
        },
        {
            time: "4月5日",
            items: [
                {
                    bookId: 1638,
                    image: "http://img3m5.ddimg.cn/27/21/23954265-1_h_9.jpg",
                    title: "雕刻时光",
                    price: 42.8,
                    id: 248,
                },
                {
                    bookId: 2386,
                    image: "http://img3m6.ddimg.cn/25/12/28472326-1_h_3.jpg",
                    title: "脑力赋能：一看就会的用脑秘籍，拿来即用的高效指南",
                    price: 33,
                    id: 246,
                },
                {
                    bookId: 3457,
                    image: "http://img3m8.ddimg.cn/26/3/23366798-1_h_2.jpg",
                    title: "圣洁",
                    price: 27.1,
                    id: 242,
                },
                {
                    bookId: 3457,
                    image: "http://img3m8.ddimg.cn/26/3/23366798-1_h_2.jpg",
                    title: "圣洁",
                    price: 27.1,
                    id: 241,
                },
                {
                    bookId: 180,
                    image: "http://img3m3.ddimg.cn/82/35/23978773-1_h_5.jpg",
                    title: "流浪地球：刘慈欣授权，电影原著小说",
                    price: 22.4,
                    id: 240,
                },
            ],
        },
        {
            time: "4月4日",
            items: [
                {
                    bookId: 5323,
                    image: "http://img3m0.ddimg.cn/55/33/25315840-1_h_2.jpg",
                    title: "上下五千年（彩图珍藏版，函套精装全三册）",
                    price: 116.8,
                    id: 239,
                },
                {
                    bookId: 3962,
                    image: "http://img3m3.ddimg.cn/39/32/25203063-1_h_14.jpg",
                    title: "阿里巴巴Java开发手册",
                    price: 33.6,
                    id: 238,
                },
                {
                    bookId: 3820,
                    image: "http://img3m9.ddimg.cn/78/30/25073709-1_h_1.jpg",
                    title: "Netty实战",
                    price: 66.2,
                    id: 237,
                },
                {
                    bookId: 5340,
                    image: "http://img3m6.ddimg.cn/98/24/23648426-1_h_4.jpg",
                    title: "光荣与梦想（精装全四册）",
                    price: 151,
                    id: 236,
                },
                {
                    bookId: 1293,
                    image: "http://img3m0.ddimg.cn/32/3/25291760-1_h_2.jpg",
                    title: "大汉战神:霍去病传",
                    price: 29.7,
                    id: 235,
                },
                {
                    bookId: 753,
                    image: "http://img3m4.ddimg.cn/49/19/25284154-1_h_3.jpg",
                    title: "我们仨（新版）",
                    price: 16.5,
                    id: 234,
                },
            ],
        },
        {
            time: "4月3日",
            items: [
                {
                    bookId: 3966,
                    image: "http://img3m6.ddimg.cn/46/1/24144166-1_h_30016.jpg",
                    title: "第一行代码 Android 第2版",
                    price: 62.4,
                    id: 231,
                },
            ],
        },
        {
            time: "4月2日",
            items: [
                {
                    bookId: 86,
                    image: "http://img3m7.ddimg.cn/50/25/23706887-1_h_1.jpg",
                    title: "我是猫（陈乔恩推荐！百万畅销译本。日本“国民大师”夏目漱石笔下会“吐槽”的猫。译文轻松幽默，好读，爱猫的你一定喜欢）",
                    price: 37,
                    id: 228,
                },
            ],
        },
        {
            time: "4月1日",
            items: [
                {
                    bookId: 1463,
                    image: "http://img3m6.ddimg.cn/2/3/25271336-1_h_4.jpg",
                    title: "张爱玲私语录",
                    price: 46.6,
                    id: 227,
                },
                {
                    bookId: 5784,
                    image: "http://img3m9.ddimg.cn/53/25/25317719-1_h_3.jpg",
                    title: "非常言",
                    price: 40.3,
                    id: 226,
                },
                {
                    bookId: 792,
                    image: "http://img3m4.ddimg.cn/16/23/1524553684-1_h_1.jpg",
                    title:
                        "中国皇帝全书 中国皇帝传 中国皇帝大传 中国皇帝全传 全套6册 历史人物历代中国皇帝大全传 政治人物 400余位历代皇帝的人生传奇 生平事迹人物传记书籍 雍正乾隆康熙 历代皇帝 皇帝史",
                    price: 94,
                    id: 225,
                },
                {
                    bookId: 3700,
                    image: "http://img3m3.ddimg.cn/15/12/27885543-1_h_4.jpg",
                    title: "自学是门手艺：没有自学能力的人没有未来",
                    price: 95.1,
                    id: 224,
                },
                {
                    bookId: 5093,
                    image: "http://img3m5.ddimg.cn/60/18/25309905-1_h_15.jpg",
                    title: "半小时漫画中国史1+中国史2+中国史3+世界史（套装共4册，作者签章版）",
                    price: 156.4,
                    id: 223,
                },
                {
                    bookId: 4116,
                    image: "http://img3m6.ddimg.cn/1/7/25536556-1_h_2.jpg",
                    title: "数字绘画技法丛书--Procreate绘画创作从入门到精通",
                    price: 56.8,
                    id: 222,
                },
                {
                    bookId: 4116,
                    image: "http://img3m6.ddimg.cn/1/7/25536556-1_h_2.jpg",
                    title: "数字绘画技法丛书--Procreate绘画创作从入门到精通",
                    price: 56.8,
                    id: 220,
                },
                {
                    bookId: 2154,
                    image: "http://img3m3.ddimg.cn/72/12/25575633-1_h_2.jpg",
                    title: "丰子恺艺术入门（全四册）：《音乐入门》《认识绘画》《认识建筑》《美的情绪》",
                    price: 230.1,
                    id: 217,
                },
                {
                    bookId: 4371,
                    image: "http://img3m2.ddimg.cn/63/27/28476522-1_h_1.jpg",
                    title: "Python数据分析与大数据处理从入门到精通",
                    price: 70.3,
                    id: 215,
                },
                {
                    bookId: 4371,
                    image: "http://img3m2.ddimg.cn/63/27/28476522-1_h_1.jpg",
                    title: "Python数据分析与大数据处理从入门到精通",
                    price: 70.3,
                    id: 214,
                },
                {
                    bookId: 4371,
                    image: "http://img3m2.ddimg.cn/63/27/28476522-1_h_1.jpg",
                    title: "Python数据分析与大数据处理从入门到精通",
                    price: 70.3,
                    id: 213,
                },
                {
                    bookId: 4371,
                    image: "http://img3m2.ddimg.cn/63/27/28476522-1_h_1.jpg",
                    title: "Python数据分析与大数据处理从入门到精通",
                    price: 70.3,
                    id: 212,
                },
                {
                    bookId: 4371,
                    image: "http://img3m2.ddimg.cn/63/27/28476522-1_h_1.jpg",
                    title: "Python数据分析与大数据处理从入门到精通",
                    price: 70.3,
                    id: 211,
                },
                {
                    bookId: 4371,
                    image: "http://img3m2.ddimg.cn/63/27/28476522-1_h_1.jpg",
                    title: "Python数据分析与大数据处理从入门到精通",
                    price: 70.3,
                    id: 210,
                },
                {
                    bookId: 4371,
                    image: "http://img3m2.ddimg.cn/63/27/28476522-1_h_1.jpg",
                    title: "Python数据分析与大数据处理从入门到精通",
                    price: 70.3,
                    id: 209,
                },
                {
                    bookId: 1929,
                    image: "http://img3m1.ddimg.cn/92/15/27947891-1_h_3.jpg",
                    title: "空的空间",
                    price: 31.9,
                    id: 208,
                },
                {
                    bookId: 4371,
                    image: "http://img3m2.ddimg.cn/63/27/28476522-1_h_1.jpg",
                    title: "Python数据分析与大数据处理从入门到精通",
                    price: 70.3,
                    id: 207,
                },
                {
                    bookId: 4371,
                    image: "http://img3m2.ddimg.cn/63/27/28476522-1_h_1.jpg",
                    title: "Python数据分析与大数据处理从入门到精通",
                    price: 70.3,
                    id: 206,
                },
                {
                    bookId: 3692,
                    image: "http://img3m5.ddimg.cn/54/18/26916075-1_h_4.jpg",
                    title: "Excel应用技巧速查宝典（视频案例版 彩色印刷）",
                    price: 112.6,
                    id: 205,
                },
                {
                    bookId: 4371,
                    image: "http://img3m2.ddimg.cn/63/27/28476522-1_h_1.jpg",
                    title: "Python数据分析与大数据处理从入门到精通",
                    price: 70.3,
                    id: 204,
                },
                {
                    bookId: 4371,
                    image: "http://img3m2.ddimg.cn/63/27/28476522-1_h_1.jpg",
                    title: "Python数据分析与大数据处理从入门到精通",
                    price: 70.3,
                    id: 203,
                },
                {
                    bookId: 3864,
                    image: "http://img3m0.ddimg.cn/80/2/28482380-1_h_5.jpg",
                    title: "5G革命：新流量时代商业方法论",
                    price: 63.2,
                    id: 202,
                },
                {
                    bookId: 75,
                    image: "http://img3m5.ddimg.cn/30/3/25808835-1_h_3.jpg",
                    title: "北上（第十届茅盾文学奖获奖作品，2018年度中国好书作品）",
                    price: 55.5,
                    id: 201,
                },
                {
                    bookId: 75,
                    image: "http://img3m5.ddimg.cn/30/3/25808835-1_h_3.jpg",
                    title: "北上（第十届茅盾文学奖获奖作品，2018年度中国好书作品）",
                    price: 55.5,
                    id: 200,
                },
                {
                    bookId: 75,
                    image: "http://img3m5.ddimg.cn/30/3/25808835-1_h_3.jpg",
                    title: "北上（第十届茅盾文学奖获奖作品，2018年度中国好书作品）",
                    price: 55.5,
                    id: 199,
                },
                {
                    bookId: 75,
                    image: "http://img3m5.ddimg.cn/30/3/25808835-1_h_3.jpg",
                    title: "北上（第十届茅盾文学奖获奖作品，2018年度中国好书作品）",
                    price: 55.5,
                    id: 198,
                },
                {
                    bookId: 75,
                    image: "http://img3m5.ddimg.cn/30/3/25808835-1_h_3.jpg",
                    title: "北上（第十届茅盾文学奖获奖作品，2018年度中国好书作品）",
                    price: 55.5,
                    id: 197,
                },
                {
                    bookId: 3692,
                    image: "http://img3m5.ddimg.cn/54/18/26916075-1_h_4.jpg",
                    title: "Excel应用技巧速查宝典（视频案例版 彩色印刷）",
                    price: 112.6,
                    id: 196,
                },
                {
                    bookId: 3692,
                    image: "http://img3m5.ddimg.cn/54/18/26916075-1_h_4.jpg",
                    title: "Excel应用技巧速查宝典（视频案例版 彩色印刷）",
                    price: 112.6,
                    id: 195,
                },
                {
                    bookId: 3692,
                    image: "http://img3m5.ddimg.cn/54/18/26916075-1_h_4.jpg",
                    title: "Excel应用技巧速查宝典（视频案例版 彩色印刷）",
                    price: 112.6,
                    id: 194,
                },
                {
                    bookId: 4213,
                    image: "http://img3m8.ddimg.cn/83/24/25279238-1_h_2.jpg",
                    title: "图解深度学习",
                    price: 46.6,
                    id: 193,
                },
                {
                    bookId: 4213,
                    image: "http://img3m8.ddimg.cn/83/24/25279238-1_h_2.jpg",
                    title: "图解深度学习",
                    price: 46.6,
                    id: 192,
                },
                {
                    bookId: 4213,
                    image: "http://img3m8.ddimg.cn/83/24/25279238-1_h_2.jpg",
                    title: "图解深度学习",
                    price: 46.6,
                    id: 191,
                },
                {
                    bookId: 4213,
                    image: "http://img3m8.ddimg.cn/83/24/25279238-1_h_2.jpg",
                    title: "图解深度学习",
                    price: 46.6,
                    id: 190,
                },
                {
                    bookId: 1638,
                    image: "http://img3m5.ddimg.cn/27/21/23954265-1_h_9.jpg",
                    title: "雕刻时光",
                    price: 42.8,
                    id: 189,
                },
                {
                    bookId: 3757,
                    image: "http://img3m0.ddimg.cn/61/26/25147150-1_h_3.jpg",
                    title: "Word Excel PPT 2016商务办公全能一本通 全彩版",
                    price: 47.8,
                    id: 188,
                },
                {
                    bookId: 3757,
                    image: "http://img3m0.ddimg.cn/61/26/25147150-1_h_3.jpg",
                    title: "Word Excel PPT 2016商务办公全能一本通 全彩版",
                    price: 47.8,
                    id: 187,
                },
                {
                    bookId: 5097,
                    image: "http://img3m3.ddimg.cn/38/27/25102973-1_h_4.jpg",
                    title: "明朝那些事儿全集 增补版（新版全套9册）",
                    price: 178.2,
                    id: 186,
                },
                {
                    bookId: 5223,
                    image: "http://img3m6.ddimg.cn/4/13/22504486-1_h_1.jpg",
                    title: "民国风度",
                    price: 24.6,
                    id: 185,
                },
            ],
        },
        {
            time: "3月28日",
            items: [
                {
                    bookId: 180,
                    image: "http://img3m3.ddimg.cn/82/35/23978773-1_h_5.jpg",
                    title: "流浪地球：刘慈欣授权，电影原著小说",
                    price: 22.4,
                    id: 184,
                },
                {
                    bookId: 180,
                    image: "http://img3m3.ddimg.cn/82/35/23978773-1_h_5.jpg",
                    title: "流浪地球：刘慈欣授权，电影原著小说",
                    price: 22.4,
                    id: 183,
                },
                {
                    bookId: 180,
                    image: "http://img3m3.ddimg.cn/82/35/23978773-1_h_5.jpg",
                    title: "流浪地球：刘慈欣授权，电影原著小说",
                    price: 22.4,
                    id: 182,
                },
                {
                    bookId: 180,
                    image: "http://img3m3.ddimg.cn/82/35/23978773-1_h_5.jpg",
                    title: "流浪地球：刘慈欣授权，电影原著小说",
                    price: 22.4,
                    id: 181,
                },
                {
                    bookId: 180,
                    image: "http://img3m3.ddimg.cn/82/35/23978773-1_h_5.jpg",
                    title: "流浪地球：刘慈欣授权，电影原著小说",
                    price: 22.4,
                    id: 180,
                },
            ],
        },
    ];
    return {
        __esModule: true,
        ...jest.requireActual("../../util.ts"),
        ask: jest.fn((options: any) => {
            let data: any = null;
            if (options.url === "/api/browsingHistory") {
                data = browsingHistoryData;
            }
            if (options.url === "/api/removeBrowsingHistory") {
                data = {
                    status: 'ok'
                }
            }
            return Promise.resolve({
                data: data,
            });
        }),
    };
});
describe("browsingHistory", () => {
    it("有数据时正确渲染", async function () {
        const wrapper = render(<BrowsingHistory />);
        await wrapper.findAllByText(/光荣与梦想/);
        fireEvent.click(wrapper.getAllByTestId("deleteicon")[0]);
        await wrapper.findByTestId('delete confirm');
        // await waitFor(()=>{
        //     expect(wrapper.getByTestId('delete confirm')).not.toBeInTheDocument()
        // })
    });
});
