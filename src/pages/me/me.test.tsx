import {render} from "../../testUtils";
import React from "react";
import Me from "./me";
import {getByText, waitFor} from "@testing-library/dom";

jest.mock('../../util.ts');
describe("me",()=>{
    it('在登录状态下显示用户名，购物车，订单相关的数量', async function () {
        const wrapper = render(<Me/>)
        const topPart = document.querySelector(`[data-name="上半部分"]`)!
        await waitFor(()=>{
            // expect(getByText(topPart as HTMLElement, /44/));
            expect(getByText(wrapper.getByText(/待付款/).parentElement!, /2/));
            expect(getByText(wrapper.getByText(/待收货/).parentElement!, /3/));
            expect(getByText(wrapper.getByText(/待评价/).parentElement!, /9/));
            expect(getByText(wrapper.getByText(/全部订单/).parentElement!, /23/));
            expect(getByText(document.querySelector(`[data-name="顶部头像区域"]`)! as HTMLElement, /qwer/));
        })
    });
})