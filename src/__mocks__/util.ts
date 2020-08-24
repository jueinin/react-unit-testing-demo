import Axios from "axios";
import { useEffect } from "react";

export const ask = jest.fn((options: any) => {
    let url: string = options.url;
    if (url.includes("api/sendMailCode") || url.includes('/api/logout') || url.includes('/api/isLogin') || url.includes("/api/signUp") || url.includes("/api/removeBrowsingHistory") || url.includes('/api/login')) {
        console.log('request',options.url)
        return Promise.resolve({
            data: { status: "ok" },
        });
    }
    if (url.includes("/api/recommends")) {
        return Promise.resolve({
            data: [
                {
                    bookId: 3842,
                    author: "何晗",
                    title: "自然语言处理入门",
                    imgUrl: "http://img3m1.ddimg.cn/94/23/28469821-4_h_3.jpg",
                    price: 68.3,
                    comments: 0,
                    goodComments: 0,
                },
                {
                    bookId: 5035,
                    author: "王志刚、隋斌 周泾 施洵",
                    title: "医疗+保险：如何构建跨界融合生态圈",
                    imgUrl: "http://img3m5.ddimg.cn/21/34/25575285-3_h_3.jpg",
                    price: 31.3,
                    comments: 0,
                    goodComments: 0,
                },
                {
                    bookId: 2956,
                    author: "(美) 尼尔?布朗 (Neil Browne) ，斯图尔特?基利 (Stuart Keeley) 著",
                    title: "学会提问（原书第11版） 团购电话:4001066666转6",
                    imgUrl: "http://img3m7.ddimg.cn/91/15/26922547-4_h_2.jpg",
                    price: 37.8,
                    comments: 0,
                    goodComments: 0,
                },
                {
                    bookId: 556,
                    author: "(清)袁枚，果麦文化 出品",
                    title: "子不语（怪、力、乱、神，纯正的东方鬼怪故事集；精美原创鬼怪插图）",
                    imgUrl: "http://img3m7.ddimg.cn/33/30/24010107-1_h_11.jpg",
                    price: 39.8,
                    comments: 0,
                    goodComments: 0,
                },
                {
                    bookId: 4650,
                    author: "(美)乔舒亚·安格里斯特，约恩-斯特芬·皮施克 著 郎金焕，李井奎 译",
                    title: "基本无害的计量经济学：实证研究者指南(当代经济学系列丛书)",
                    imgUrl: "http://img3m1.ddimg.cn/66/5/25161411-2_h_2.jpg",
                    price: 30.1,
                    comments: 0,
                    goodComments: 0,
                },
                {
                    bookId: 2979,
                    author: "(英)莎拉·贝克韦尔(Sarah Bakewell)",
                    title: "存在主义咖啡馆——自由、存在和杏子鸡尾酒",
                    imgUrl: "http://img3m4.ddimg.cn/81/33/25198254-2_h_3.jpg",
                    price: 72.6,
                    comments: 0,
                    goodComments: 0,
                },
                {
                    bookId: 1208,
                    author: "孙力科",
                    title: "任正非传（精装新版）",
                    imgUrl: "http://img3m5.ddimg.cn/69/15/27888765-2_h_2.jpg",
                    price: 40.1,
                    comments: 0,
                    goodComments: 0,
                },
                {
                    bookId: 2103,
                    author: "高居翰,黄晓,刘珊珊",
                    title: "不朽的林泉",
                    imgUrl: "http://img3m2.ddimg.cn/82/17/22856212-1_h_2.jpg",
                    price: 46.2,
                    comments: 0,
                    goodComments: 0,
                },
                {
                    bookId: 468,
                    author: "莉莉·海沃德、译者张玫瑰，酷威文化 出品",
                    title: "尤尔小屋的猫",
                    imgUrl: "http://img3m0.ddimg.cn/33/33/25197810-5_h_3.jpg",
                    price: 32.9,
                    comments: 0,
                    goodComments: 0,
                },
                {
                    bookId: 5524,
                    author: "(美)王国斌",
                    title: "海外中国研究·转变的中国：历史变迁与欧洲经验的局限（当当独家定制精装版！)",
                    imgUrl: "http://img3m9.ddimg.cn/73/27/25576129-1_h_3.jpg",
                    price: 52,
                    comments: 0,
                    goodComments: 0,
                },
            ],
        });
    }
    if (url.includes("/api/browsingHistory")) {
        return Promise.resolve({
            data: [
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
                            title:
                                "华夏万卷钢笔字帖 《道德经》硬笔楷书字帖（全新升级 附彩色作品纸）田英章书 硬笔书法学生成人字帖 大学男女生临摹描红手写体",
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
            ],
        });
    }
    if (url.includes("/api/userData")) {
        return Promise.resolve({
            data: {
                shoppingCart: {
                    items: [
                        {
                            bookId: 792,
                            title:
                                "中国皇帝全书 中国皇帝传 中国皇帝大传 中国皇帝全传 全套6册 历史人物历代中国皇帝大全传 政治人物 400余位历代皇帝的人生传奇 生平事迹人物传记书籍 雍正乾隆康熙 历代皇帝 皇帝史",
                            price: 94,
                            id: 10,
                            smallImage: "http://img3m4.ddimg.cn/16/23/1524553684-1_h_1.jpg",
                        },
                        { bookId: 1463, title: "张爱玲私语录", price: 46.6, id: 11, smallImage: "http://img3m6.ddimg.cn/2/3/25271336-1_h_4.jpg" },
                        {
                            bookId: 2264,
                            title: "情商：为什么情商比智商更重要",
                            price: 42.7,
                            id: 12,
                            smallImage: "http://img3m0.ddimg.cn/59/9/25212290-1_h_6.jpg",
                        },
                        {
                            bookId: 5340,
                            title: "光荣与梦想（精装全四册）",
                            price: 151,
                            id: 13,
                            smallImage: "http://img3m6.ddimg.cn/98/24/23648426-1_h_4.jpg",
                        },
                        { bookId: 3820, title: "Netty实战", price: 66.2, id: 14, smallImage: "http://img3m9.ddimg.cn/78/30/25073709-1_h_1.jpg" },
                        {
                            bookId: 3962,
                            title: "阿里巴巴Java开发手册",
                            price: 33.6,
                            id: 15,
                            smallImage: "http://img3m3.ddimg.cn/39/32/25203063-1_h_14.jpg",
                        },
                        {
                            bookId: 2466,
                            title: "请停止无效努力：如何用正确的方法快速进阶",
                            price: 31.4,
                            id: 16,
                            smallImage: "http://img3m3.ddimg.cn/88/34/24163513-1_h_6.jpg",
                        },
                        {
                            bookId: 1306,
                            title: "丘吉尔传 (丘吉尔官方传记, 历届英国首相推荐图书 )",
                            price: 25.5,
                            id: 17,
                            smallImage: "http://img3m2.ddimg.cn/11/22/24135122-1_h_11.jpg",
                        },
                        { bookId: 858, title: "人类群星闪耀时", price: 16.5, id: 18, smallImage: "http://img3m3.ddimg.cn/36/11/23926653-1_h_6.jpg" },
                        {
                            bookId: 752,
                            title: "苏东坡传（林语堂精装2018版）（1-9年级必读书单）",
                            price: 47.3,
                            id: 19,
                            smallImage: "http://img3m8.ddimg.cn/40/0/25211578-1_h_3.jpg",
                        },
                        {
                            bookId: 760,
                            title: "向前一步(珍藏版)",
                            price: 30.4,
                            id: 20,
                            smallImage: "http://img3m8.ddimg.cn/89/36/23574068-1_h_5.jpg",
                        },
                        {
                            bookId: 40,
                            title: "福尔摩斯探案全集（复刻典藏版，套装共3册！复刻652幅原版插画！豪华精装，精美函套）",
                            price: 213.4,
                            id: 21,
                            smallImage: "http://img3m3.ddimg.cn/60/11/27904893-1_h_6.jpg",
                        },
                        {
                            bookId: 37,
                            title: "人间失格（日本小说家太宰治的自传体小说，李现推荐）",
                            price: 18.8,
                            id: 22,
                            smallImage: "http://img3m5.ddimg.cn/56/4/23761145-1_h_6.jpg",
                        },
                        {
                            bookId: 43,
                            title: "三体：全三册 刘慈欣代表作，亚洲首部“雨果奖”获奖作品！",
                            price: 92.1,
                            id: 23,
                            smallImage: "http://img3m4.ddimg.cn/32/35/23579654-1_h_3.jpg",
                        },
                        {
                            bookId: 759,
                            title:
                                "成为becoming：米歇尔·奥巴马自传（精装版）2019读者年度“十大影响力图书”、年度“人物传记”作品！美国前第一夫人米歇尔亲笔自传！全球销售超1000万册！",
                            price: 80.9,
                            id: 24,
                            smallImage: "http://img3m7.ddimg.cn/26/36/26438867-1_h_5.jpg",
                        },
                        {
                            bookId: 752,
                            title: "苏东坡传（林语堂精装2018版）（1-9年级必读书单）",
                            price: 47.3,
                            id: 25,
                            smallImage: "http://img3m8.ddimg.cn/40/0/25211578-1_h_3.jpg",
                        },
                        {
                            bookId: 760,
                            title: "向前一步(珍藏版)",
                            price: 30.4,
                            id: 26,
                            smallImage: "http://img3m8.ddimg.cn/89/36/23574068-1_h_5.jpg",
                        },
                        {
                            bookId: 646,
                            title: "美国众神：十周年作者修订版（作者入围2018年新文学院奖终选）",
                            price: 68.5,
                            id: 27,
                            smallImage: "http://img3m5.ddimg.cn/44/8/24535115-1_h_10.jpg",
                        },
                        {
                            bookId: 5643,
                            title: "利玛窦的记忆宫殿",
                            price: 31.9,
                            id: 28,
                            smallImage: "http://img3m7.ddimg.cn/64/22/23793427-1_h_1.jpg",
                        },
                        {
                            bookId: 1263,
                            title: "人类群星闪耀时:十四篇历史人物画像（茨威格作品集）",
                            price: 21.2,
                            id: 29,
                            smallImage: "http://img3m9.ddimg.cn/86/1/25198259-1_h_4.jpg",
                        },
                        {
                            bookId: 184,
                            title: "从你的全世界路过",
                            price: 33.5,
                            id: 30,
                            smallImage: "http://img3m2.ddimg.cn/34/15/23353342-1_h_8.jpg",
                        },
                        {
                            bookId: 5235,
                            title: "沈从文中国古代服饰研究",
                            price: 68.3,
                            id: 31,
                            smallImage: "http://img3m3.ddimg.cn/15/6/22623693-1_h_1.jpg",
                        },
                        {
                            bookId: 3652,
                            title: "Python编程 从入门到实践",
                            price: 59.7,
                            id: 32,
                            smallImage: "http://img3m0.ddimg.cn/67/4/24003310-1_h_7.jpg",
                        },
                        {
                            bookId: 3653,
                            title: "未来教育2019年9月全国计算机等级考试二级MS Office上机考试题库+模拟考场计算机2级高级应用真考题库（共2册）",
                            price: 55.2,
                            id: 33,
                            smallImage: "http://img3m3.ddimg.cn/96/35/27850083-1_h_1.jpg",
                        },
                        { bookId: 3658, title: "机器学习", price: 61.6, id: 34, smallImage: "http://img3m0.ddimg.cn/20/24/23898620-1_h_3.jpg" },
                        {
                            bookId: 3660,
                            title: "深度学习   人工智能算法，机器学习奠基之作，AI圣经",
                            price: 119,
                            id: 35,
                            smallImage: "http://img3m2.ddimg.cn/32/0/25111382-1_h_3.jpg",
                        },
                        {
                            bookId: 3680,
                            title: "深入理解Java虚拟机：JVM高级特性与最佳实践（第2版）",
                            price: 62.4,
                            id: 36,
                            smallImage: "http://img3m1.ddimg.cn/77/14/23259731-1_h_1.jpg",
                        },
                        {
                            bookId: 3682,
                            title: "TensorFlow深度学习算法原理与编程实战 人工智能机器学习技术丛书",
                            price: 87.8,
                            id: 37,
                            smallImage: "http://img3m1.ddimg.cn/18/11/25580331-1_h_4.jpg",
                        },
                        {
                            bookId: 2359,
                            title: "情商高，就是说话让人舒服",
                            price: 33.4,
                            id: 38,
                            smallImage: "http://img3m0.ddimg.cn/14/2/24135620-1_h_5.jpg",
                        },
                        {
                            bookId: 4024,
                            title: "SPSS统计分析从入门到精通（第四版）",
                            price: 70.3,
                            id: 39,
                            smallImage: "http://img3m0.ddimg.cn/85/13/26436550-1_h_3.jpg",
                        },
                        {
                            bookId: 5144,
                            title: "未来简史       一本好书 腾讯视频栏目推荐",
                            price: 43.5,
                            id: 40,
                            smallImage: "http://img3m0.ddimg.cn/48/6/24170700-1_h_22.jpg",
                        },
                        {
                            bookId: 98,
                            title: "一九八四（又译作“1984”）",
                            price: 28.5,
                            id: 41,
                            smallImage: "http://img3m4.ddimg.cn/96/20/25215594-1_h_2.jpg",
                        },
                        {
                            bookId: 5207,
                            title: "中国通史（经典收藏版）史学大师写给普通读者的国史入门书，与钱穆《国史大纲》双峰对峙的国史巨作。",
                            price: 17.1,
                            id: 42,
                            smallImage: "http://img3m1.ddimg.cn/56/23/23953601-1_h_8.jpg",
                        },
                        {
                            bookId: 5092,
                            title: "万历十五年 一本好书 腾讯视频栏目推荐",
                            price: 26,
                            id: 43,
                            smallImage: "http://img3m5.ddimg.cn/98/7/23445575-1_h_5.jpg",
                        },
                        {
                            bookId: 5093,
                            title: "半小时漫画中国史1+中国史2+中国史3+世界史（套装共4册，作者签章版）",
                            price: 156.4,
                            id: 44,
                            smallImage: "http://img3m5.ddimg.cn/60/18/25309905-1_h_15.jpg",
                        },
                        {
                            bookId: 5100,
                            title: "全球通史:从史前史到21世纪（第7版修订版上下册，当当独家赠送全球通史主题笔记本）",
                            price: 59.6,
                            id: 45,
                            smallImage: "http://img3m8.ddimg.cn/43/20/9231298-1_h_7.jpg",
                        },
                        {
                            bookId: 379,
                            title: "安德的游戏（全新典藏版）",
                            price: 37,
                            id: 46,
                            smallImage: "http://img3m5.ddimg.cn/19/10/23964355-1_h_6.jpg",
                        },
                        {
                            bookId: 39,
                            title: "乖，摸摸头2.0（大冰作品！当当专享100%大冰签名。和大冰一起，DIY专属自己的小乖！）",
                            price: 37.6,
                            id: 47,
                            smallImage: "http://img3m3.ddimg.cn/43/36/28470463-1_h_15.jpg",
                        },
                        {
                            bookId: 45,
                            title: "作家榜经典：月亮与六便士（畅销250万册！荣获2018当当名著桂冠！2017豆瓣阅读桂冠！上海国际学校指定必读译本）",
                            price: 35.02,
                            id: 48,
                            smallImage: "http://img3m1.ddimg.cn/66/15/24175371-1_h_103.jpg",
                        },
                        {
                            bookId: 2927,
                            title: "鬼谷子—中华经典藏书（平装）",
                            price: 30.6,
                            id: 49,
                            smallImage: "http://img3m0.ddimg.cn/5/26/23691200-1_h_10.jpg",
                        },
                        {
                            bookId: 2936,
                            title: "人生的智慧：如何才能幸福度过一生",
                            price: 36.2,
                            id: 50,
                            smallImage: "http://img3m2.ddimg.cn/20/32/23798432-1_h_16.jpg",
                        },
                        {
                            bookId: 2935,
                            title: "论语别裁（独家授权简体版套装两册）",
                            price: 91,
                            id: 51,
                            smallImage: "http://img3m7.ddimg.cn/87/13/25274787-1_h_11.jpg",
                        },
                        {
                            bookId: 2565,
                            title: "The Power力量（2019修订版）",
                            price: 48.3,
                            id: 52,
                            smallImage: "http://img3m2.ddimg.cn/8/2/27917612-1_h_3.jpg",
                        },
                        {
                            bookId: 42,
                            title: "人生海海（麦家重磅新作！莫言、董卿、王家卫、高晓松、杨洋倾力推荐）",
                            price: 51.1,
                            id: 53,
                            smallImage: "http://img3m5.ddimg.cn/51/34/26921715-1_h_2.jpg",
                        },
                    ],
                },
                user: {
                    id: 3,
                    email: "623073156@qq.com",
                    userName: "qwer",
                    avatar: "https://jueinin.oss-cn-hongkong.aliyuncs.com/%E5%B0%8F%E7%A8%8B%E5%BA%8F/%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F.jpg",
                    sex: null,
                    description: "",
                    addresses: [
                        {
                            id: 8,
                            name: "陈亮",
                            address: "北京市西城区三里河路52号.",
                            phoneNumber: "16565656545",
                            isDefaultAddress: true,
                            createDate: "2020-04-02T05:11:30.799Z",
                            updateDate: "2020-05-07T21:37:55.000Z",
                        },
                        {
                            id: 9,
                            name: "liangl",
                            address: "北京市三里河路52号6",
                            phoneNumber: "18854542562",
                            isDefaultAddress: false,
                            createDate: "2020-04-02T05:58:51.985Z",
                            updateDate: "2020-05-07T21:37:55.000Z",
                        },
                        {
                            id: 17,
                            name: "陈亮",
                            address: "米歇尔·奥巴马自传（精装版）2019读者年度“十大影响力图书”、年度“人物传记”作品！美国前第一夫人米歇尔亲笔自传！",
                            phoneNumber: "18865473652",
                            isDefaultAddress: false,
                            createDate: "2020-04-17T02:34:06.841Z",
                            updateDate: "2020-05-07T21:37:55.000Z",
                        },
                        {
                            id: 18,
                            name: "chen",
                            address: "dasdasafaf",
                            phoneNumber: "18982828374",
                            isDefaultAddress: false,
                            createDate: "2020-04-17T05:03:38.934Z",
                            updateDate: "2020-05-07T21:37:55.000Z",
                        },
                    ],
                },
            },
        });
    }
    if (url.includes('/api/orderItems?type=all')) {
        return Promise.resolve({
            data: [{"id":212,"count":4,"status":"pendingPayment","addressId":8,"createDate":"2020-05-07T21:41:20.468Z","updateDate":"2020-05-07T21:41:20.468Z","book":{"id":1463,"name":"张爱玲私语录","description":"拨开迷雾，带你认识一个天真健谈、语带机锋的张爱玲","author":"张爱玲 宋淇 宋邝文美著，宋以朗编","price":46.6,"publisher":"北京十月文艺出版社","publishDate":"2018-05","category":"传记","productId":"25271336","smallImage":{"id":10296,"url":"http://img3m6.ddimg.cn/2/3/25271336-1_h_4.jpg","type":"smallImage"}}},{"id":211,"count":1,"status":"pendingPayment","addressId":8,"createDate":"2020-05-07T21:41:20.465Z","updateDate":"2020-05-07T21:41:20.465Z","book":{"id":792,"name":"中国皇帝全书 中国皇帝传 中国皇帝大传 中国皇帝全传 全套6册 历史人物历代中国皇帝大全传 政治人物 400余位历代皇帝的人生传奇 生平事迹人物传记书籍 雍正乾隆康熙 历代皇帝 皇帝史","description":"","author":"无","price":94,"publisher":"光明日报出版社","publishDate":"2015-07","category":"传记","productId":"1524553684","smallImage":{"id":6278,"url":"http://img3m4.ddimg.cn/16/23/1524553684-1_h_1.jpg","type":"smallImage"}}},{"id":210,"count":1,"status":"pendingReceived","addressId":8,"createDate":"2020-05-07T21:39:29.984Z","updateDate":"2020-05-07T21:39:34.000Z","book":{"id":5340,"name":"光荣与梦想（精装全四册）","description":"王石、何怀宏、何帆、俞敏洪激荡推荐。另一个国家的历史，激起一代中国年轻人的共鸣。这是一本了解美国精神气质缘起的书，是一本启迪了无数作者的经典。","author":"(美) 威廉· 曼彻斯特 著，四川外国语大学翻译学院翻译组 译","price":151,"publisher":"中信出版社","publishDate":"2015-03","category":"历史","productId":"23648426","smallImage":{"id":36733,"url":"http://img3m6.ddimg.cn/98/24/23648426-1_h_4.jpg","type":"smallImage"}}},{"id":209,"count":1,"status":"pendingReceived","addressId":8,"createDate":"2020-05-07T21:37:59.253Z","updateDate":"2020-05-07T21:38:15.000Z","book":{"id":3580,"name":"哲学史讲演录","description":"（新校重排本，据译者手迹修订，古典哲学大师黑格尔*天才的著作之一，哲学史的开山之作和必读经典）","author":"(德)黑格尔","price":112.6,"publisher":"上海人民出版社","publishDate":"2013-01","category":"哲学","productId":"26440800","smallImage":{"id":25023,"url":"http://img3m0.ddimg.cn/78/8/26440800-1_h_2.jpg","type":"smallImage"}}},{"id":66,"count":1,"status":"pendingComment","addressId":8,"createDate":"2020-04-04T07:53:45.938Z","updateDate":"2020-05-06T17:52:54.000Z","book":{"id":3820,"name":"Netty实战","description":"Java高性能网络编程参考书 Netty之父Trustin Lee作序推荐 含有大量即用型的优质示例 附带行业一线公司的案例研究 实用的Netty技术书","author":"(美) 诺曼·毛瑞尔(Norman Maurer)马文·艾伦·沃尔夫泰尔(Marvin Allen Wolfthal)","price":66.2,"publisher":"人民邮电出版社","publishDate":"2017-04","category":"计算机","productId":"25073709","smallImage":{"id":26881,"url":"http://img3m9.ddimg.cn/78/30/25073709-1_h_1.jpg","type":"smallImage"}}},{"id":193,"count":8,"status":"pendingComment","addressId":8,"createDate":"2020-04-09T22:01:24.177Z","updateDate":"2020-05-06T17:52:52.000Z","book":{"id":44,"name":"东野圭吾：白夜行（易烊千玺、孟非推荐，东野圭吾作品无冕之王）","description":"我一直走在白夜里，从来就没有太阳，所以不怕失去。中文版发行量超600万册。","author":"(日)东野圭吾 著，新经典 出品","price":59.6,"publisher":"南海出版公司","publishDate":"2017-08","category":"小说","productId":"25119332","smallImage":{"id":390,"url":"http://img3m2.ddimg.cn/62/32/25119332-1_h_9.jpg","type":"smallImage"}}},{"id":199,"count":1,"status":"pendingComment","addressId":8,"createDate":"2020-04-11T03:07:15.860Z","updateDate":"2020-05-06T17:52:50.000Z","book":{"id":3962,"name":"阿里巴巴Java开发手册","description":"来自于阿里集团的智慧与经验，用血淋淋的故障换来的总结 阿里经济体全球技术开发准则；阿里经济体全球技术开发准则； 帮助工程师脱离烦琐，重燃技术激情； 降低企业技术沟通成本，提高团队协同研发效能","author":"杨冠宝","price":33.6,"publisher":"电子工业出版社","publishDate":"2018-01","category":"计算机","productId":"25203063","smallImage":{"id":27989,"url":"http://img3m3.ddimg.cn/39/32/25203063-1_h_14.jpg","type":"smallImage"}}},{"id":197,"count":1,"status":"pendingComment","addressId":8,"createDate":"2020-04-11T03:07:15.845Z","updateDate":"2020-05-06T17:52:47.000Z","book":{"id":5340,"name":"光荣与梦想（精装全四册）","description":"王石、何怀宏、何帆、俞敏洪激荡推荐。另一个国家的历史，激起一代中国年轻人的共鸣。这是一本了解美国精神气质缘起的书，是一本启迪了无数作者的经典。","author":"(美) 威廉· 曼彻斯特 著，四川外国语大学翻译学院翻译组 译","price":151,"publisher":"中信出版社","publishDate":"2015-03","category":"历史","productId":"23648426","smallImage":{"id":36733,"url":"http://img3m6.ddimg.cn/98/24/23648426-1_h_4.jpg","type":"smallImage"}}},{"id":201,"count":1,"status":"pendingComment","addressId":8,"createDate":"2020-04-12T22:23:09.902Z","updateDate":"2020-05-06T17:52:45.000Z","book":{"id":792,"name":"中国皇帝全书 中国皇帝传 中国皇帝大传 中国皇帝全传 全套6册 历史人物历代中国皇帝大全传 政治人物 400余位历代皇帝的人生传奇 生平事迹人物传记书籍 雍正乾隆康熙 历代皇帝 皇帝史","description":"","author":"无","price":94,"publisher":"光明日报出版社","publishDate":"2015-07","category":"传记","productId":"1524553684","smallImage":{"id":6278,"url":"http://img3m4.ddimg.cn/16/23/1524553684-1_h_1.jpg","type":"smallImage"}}},{"id":203,"count":1,"status":"pendingComment","addressId":8,"createDate":"2020-04-12T22:23:10.084Z","updateDate":"2020-05-06T17:52:29.000Z","book":{"id":2264,"name":"情商：为什么情商比智商更重要","description":"全球销量超过10000000册的《情商》作者、“情商之父” 丹尼尔·戈尔曼倾情之作！","author":"丹尼尔·戈尔曼 著","price":42.7,"publisher":"中信出版社","publishDate":"2018-01","category":"励志","productId":"25212290","smallImage":{"id":16347,"url":"http://img3m0.ddimg.cn/59/9/25212290-1_h_6.jpg","type":"smallImage"}}},{"id":202,"count":1,"status":"pendingComment","addressId":8,"createDate":"2020-04-12T22:23:10.002Z","updateDate":"2020-05-06T17:52:25.000Z","book":{"id":1463,"name":"张爱玲私语录","description":"拨开迷雾，带你认识一个天真健谈、语带机锋的张爱玲","author":"张爱玲 宋淇 宋邝文美著，宋以朗编","price":46.6,"publisher":"北京十月文艺出版社","publishDate":"2018-05","category":"传记","productId":"25271336","smallImage":{"id":10296,"url":"http://img3m6.ddimg.cn/2/3/25271336-1_h_4.jpg","type":"smallImage"}}},{"id":207,"count":3,"status":"pendingComment","addressId":8,"createDate":"2020-04-17T02:30:16.691Z","updateDate":"2020-05-06T17:52:00.000Z","book":{"id":1463,"name":"张爱玲私语录","description":"拨开迷雾，带你认识一个天真健谈、语带机锋的张爱玲","author":"张爱玲 宋淇 宋邝文美著，宋以朗编","price":46.6,"publisher":"北京十月文艺出版社","publishDate":"2018-05","category":"传记","productId":"25271336","smallImage":{"id":10296,"url":"http://img3m6.ddimg.cn/2/3/25271336-1_h_4.jpg","type":"smallImage"}}},{"id":208,"count":4,"status":"pendingComment","addressId":8,"createDate":"2020-04-17T02:30:16.789Z","updateDate":"2020-05-06T17:51:55.000Z","book":{"id":2264,"name":"情商：为什么情商比智商更重要","description":"全球销量超过10000000册的《情商》作者、“情商之父” 丹尼尔·戈尔曼倾情之作！","author":"丹尼尔·戈尔曼 著","price":42.7,"publisher":"中信出版社","publishDate":"2018-01","category":"励志","productId":"25212290","smallImage":{"id":16347,"url":"http://img3m0.ddimg.cn/59/9/25212290-1_h_6.jpg","type":"smallImage"}}},{"id":200,"count":1,"status":"finish","addressId":8,"createDate":"2020-04-12T02:31:00.411Z","updateDate":"2020-04-12T22:44:49.000Z","book":{"id":1908,"name":"褚遂良雁塔圣教序（中华经典碑帖彩色放大本）","description":"雅昌艺术精印。超大八开。四色还原。释文准确。中华书局出版。","author":"中华书局编辑部 著","price":20,"publisher":"中华书局","publishDate":"2018-05","category":"艺术","productId":"25275311","smallImage":{"id":13641,"url":"http://img3m1.ddimg.cn/17/19/25275311-1_h_1.jpg","type":"smallImage"}}},{"id":63,"count":1,"status":"finish","addressId":8,"createDate":"2020-04-04T07:53:45.905Z","updateDate":"2020-04-11T03:10:03.000Z","book":{"id":1463,"name":"张爱玲私语录","description":"拨开迷雾，带你认识一个天真健谈、语带机锋的张爱玲","author":"张爱玲 宋淇 宋邝文美著，宋以朗编","price":46.6,"publisher":"北京十月文艺出版社","publishDate":"2018-05","category":"传记","productId":"25271336","smallImage":{"id":10296,"url":"http://img3m6.ddimg.cn/2/3/25271336-1_h_4.jpg","type":"smallImage"}}},{"id":72,"count":3,"status":"finish","addressId":8,"createDate":"2020-04-05T18:14:45.786Z","updateDate":"2020-04-11T03:09:44.000Z","book":{"id":180,"name":"流浪地球：刘慈欣授权，电影原著小说","description":"（继《三体》之后，刘慈欣2019霸榜作品，绽放“中国想象力”，跻身世界科幻舞台！同名电影《流浪地球》火爆上映中！刘慈欣短篇小说精选，辑录“散落在三体之外的刘慈欣宇宙”。）","author":"刘慈欣 著，磨铁图书 出品","price":22.4,"publisher":"中国华侨出版社","publishDate":"2016-06","category":"小说","productId":"23978773","smallImage":{"id":1412,"url":"http://img3m3.ddimg.cn/82/35/23978773-1_h_5.jpg","type":"smallImage"}}},{"id":194,"count":1,"status":"finish","addressId":8,"createDate":"2020-04-11T03:07:15.818Z","updateDate":"2020-04-11T03:09:30.000Z","book":{"id":792,"name":"中国皇帝全书 中国皇帝传 中国皇帝大传 中国皇帝全传 全套6册 历史人物历代中国皇帝大全传 政治人物 400余位历代皇帝的人生传奇 生平事迹人物传记书籍 雍正乾隆康熙 历代皇帝 皇帝史","description":"","author":"无","price":94,"publisher":"光明日报出版社","publishDate":"2015-07","category":"传记","productId":"1524553684","smallImage":{"id":6278,"url":"http://img3m4.ddimg.cn/16/23/1524553684-1_h_1.jpg","type":"smallImage"}}},{"id":195,"count":1,"status":"finish","addressId":8,"createDate":"2020-04-11T03:07:15.828Z","updateDate":"2020-04-11T03:09:21.000Z","book":{"id":1463,"name":"张爱玲私语录","description":"拨开迷雾，带你认识一个天真健谈、语带机锋的张爱玲","author":"张爱玲 宋淇 宋邝文美著，宋以朗编","price":46.6,"publisher":"北京十月文艺出版社","publishDate":"2018-05","category":"传记","productId":"25271336","smallImage":{"id":10296,"url":"http://img3m6.ddimg.cn/2/3/25271336-1_h_4.jpg","type":"smallImage"}}},{"id":67,"count":1,"status":"finish","addressId":8,"createDate":"2020-04-04T07:53:45.948Z","updateDate":"2020-04-11T03:08:56.000Z","book":{"id":3962,"name":"阿里巴巴Java开发手册","description":"来自于阿里集团的智慧与经验，用血淋淋的故障换来的总结 阿里经济体全球技术开发准则；阿里经济体全球技术开发准则； 帮助工程师脱离烦琐，重燃技术激情； 降低企业技术沟通成本，提高团队协同研发效能","author":"杨冠宝","price":33.6,"publisher":"电子工业出版社","publishDate":"2018-01","category":"计算机","productId":"25203063","smallImage":{"id":27989,"url":"http://img3m3.ddimg.cn/39/32/25203063-1_h_14.jpg","type":"smallImage"}}},{"id":198,"count":1,"status":"finish","addressId":8,"createDate":"2020-04-11T03:07:15.853Z","updateDate":"2020-04-11T03:08:26.000Z","book":{"id":3820,"name":"Netty实战","description":"Java高性能网络编程参考书 Netty之父Trustin Lee作序推荐 含有大量即用型的优质示例 附带行业一线公司的案例研究 实用的Netty技术书","author":"(美) 诺曼·毛瑞尔(Norman Maurer)马文·艾伦·沃尔夫泰尔(Marvin Allen Wolfthal)","price":66.2,"publisher":"人民邮电出版社","publishDate":"2017-04","category":"计算机","productId":"25073709","smallImage":{"id":26881,"url":"http://img3m9.ddimg.cn/78/30/25073709-1_h_1.jpg","type":"smallImage"}}},{"id":196,"count":1,"status":"finish","addressId":8,"createDate":"2020-04-11T03:07:15.836Z","updateDate":"2020-04-11T03:07:58.000Z","book":{"id":2264,"name":"情商：为什么情商比智商更重要","description":"全球销量超过10000000册的《情商》作者、“情商之父” 丹尼尔·戈尔曼倾情之作！","author":"丹尼尔·戈尔曼 著","price":42.7,"publisher":"中信出版社","publishDate":"2018-01","category":"励志","productId":"25212290","smallImage":{"id":16347,"url":"http://img3m0.ddimg.cn/59/9/25212290-1_h_6.jpg","type":"smallImage"}}},{"id":62,"count":1,"status":"pendingReceived","addressId":8,"createDate":"2020-04-04T07:52:52.385Z","updateDate":"2020-04-04T07:52:57.000Z","book":{"id":1293,"name":"大汉战神:霍去病传","description":"一代战神，骑兵战天才人物，缔造军事传奇","author":"李继红，田玉洪","price":29.7,"publisher":"华中科技大学出版社","publishDate":"2018-06","category":"传记","productId":"25291760","smallImage":{"id":9428,"url":"http://img3m0.ddimg.cn/32/3/25291760-1_h_2.jpg","type":"smallImage"}}},{"id":61,"count":4,"status":"finish","addressId":9,"createDate":"2020-04-04T01:13:12.605Z","updateDate":"2020-04-04T01:13:44.000Z","book":{"id":2264,"name":"情商：为什么情商比智商更重要","description":"全球销量超过10000000册的《情商》作者、“情商之父” 丹尼尔·戈尔曼倾情之作！","author":"丹尼尔·戈尔曼 著","price":42.7,"publisher":"中信出版社","publishDate":"2018-01","category":"励志","productId":"25212290","smallImage":{"id":16347,"url":"http://img3m0.ddimg.cn/59/9/25212290-1_h_6.jpg","type":"smallImage"}}}]
        })
    }
});
export const defaultAvatar = "https://jueinin.oss-cn-hongkong.aliyuncs.com/%E5%B0%8F%E7%A8%8B%E5%BA%8F/%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F.jpg";
// ask.interceptors.response.use(
//     (res) => {
//         return res;
//     },
//     (error) => {
//         if (error.response.status === 403) {
//             (window as any).browserHistory.push('/login');
//             // Toast.info('请先登录再查看该页面');
//         }
//         return Promise.reject(error);
//     }
// );
export const useReachBottom = (element: HTMLElement | null, callback?: () => void) => {
    // 监听元素滚动到底部
    useEffect(() => {
        if (!element) {
            return;
        }
        const listener = (ev: any) => {
            const isBottom = element.scrollHeight - element.scrollTop - element.clientHeight < 130;
            if (isBottom) {
                callback && callback();
            }
        };
        element.addEventListener("scroll", listener);
        return () => element.removeEventListener("scroll", listener);
    }, [element]);
};
export const isEmail = (value: string) => {
    return /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
        value
    );
};
