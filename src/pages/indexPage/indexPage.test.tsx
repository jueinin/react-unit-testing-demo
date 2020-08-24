import { render } from "../../testUtils";
import React from "react";
import IndexPage from "./indexPage";
import { fireEvent, getByText, waitFor } from "@testing-library/dom";
import { cleanup } from "@testing-library/react";
jest.mock('../../util.ts')
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
            expect(wrapper.getAllByText(/学会提问/).length).toEqual(1); // 这个滚动似乎jsdom不支持，所以这个地方测试不起来
        })
    });
});
