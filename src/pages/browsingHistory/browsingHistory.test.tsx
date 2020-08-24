import React from "react";
import {partialMockInTestCase, render} from "../../testUtils";
import BrowsingHistory from "./browsingHistory";
import {fireEvent, waitFor} from "@testing-library/dom";
jest.mock('../../util.ts')
describe("browsingHistory", () => {
    it("有数据时正确渲染,点击可删除", async function () {
        const wrapper = render(<BrowsingHistory />);
        await wrapper.findAllByText(/光荣与梦想/);
        fireEvent.click(wrapper.getAllByTestId("deleteicon")[0]);
        await wrapper.findByTestId('delete confirm');
        fireEvent.click(wrapper.getByTestId('delete confirm'))
        await waitFor(()=>{
            expect(wrapper.queryByTestId('delete confirm')).toBeFalsy()
        })
    });
    it('没有数据的时候，显示tip', function () {
        jest.resetModules()
        partialMockInTestCase('./util.ts',{
            ask: jest.fn().mockImplementation(() => Promise.resolve({
                data: []
            }))
        })
        const wrapper = render(<BrowsingHistory/>);
        waitFor(()=>{
            expect(wrapper.getByText(/没有收藏的商品/)).not.toThrow();
        })
    });
});
