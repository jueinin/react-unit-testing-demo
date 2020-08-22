import { partialMockInFile, partialMockInTestCase, render } from "../../testUtils";
import React from "react";
import IndexPage from "./indexPage";
import { fireEvent, getByText, waitFor } from "@testing-library/dom";
import { cleanup } from "@testing-library/react";
jest.mock('../../util.ts',()=>({
    __esModule: true,
    ...jest.requireActual('../../util.ts'),
    ask: jest.fn((url: string) => {
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
    })
}))
describe("indexPage", () => {
    afterEach(() => {
        cleanup();
    });
    afterAll(()=>jest.resetModules())
    it("点击搜索，跳转到搜索 输入界面", function () {
        const wrapper = render(<IndexPage />);
        fireEvent.focus(wrapper.getByPlaceholderText(/搜索/));
        expect(window.location.pathname).toEqual("/searchInput");
    });
    it("点击分类跳转", function () {
        const wrapper = render(<IndexPage />);
        const category = wrapper.container.querySelector(`[data-name="分类"]`)!;
        fireEvent.click(getByText(category as HTMLElement, /计算机/));
        expect(window.location.pathname).toEqual(`/searchResultList`);
        expect(window.location.search).toEqual(`?keyword=${encodeURIComponent("计算机")}`);
    });
    it("should 加载推荐数据，下拉到底时加载下一页", async function () {
        const wrapper = render(<IndexPage />);
        await wrapper.findByText(/学会提问/);
        fireEvent.scroll(wrapper.container.firstChild!)
        await waitFor(()=> {
            expect(wrapper.getAllByText(/学会提问/).length).toEqual(2);
        })
    });
});
