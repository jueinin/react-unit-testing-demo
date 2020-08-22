import {render} from "../../testUtils";
import BottomBar from "./bottomBar";
import React from "react";
import {fireEvent} from "@testing-library/dom";
describe("bottom bar",()=> {
    it('should ', function () {
        const wrapper = render(<BottomBar currentValue={"/me"}/>)
        expect(wrapper.getByText(/我的/)).toHaveClass("Mui-selected")
        expect(wrapper.getByText(/论坛/)).not.toHaveClass("Mui-selected")
        expect(wrapper.getByText(/首页/)).not.toHaveClass("Mui-selected")
        fireEvent.click(wrapper.getByText(/论坛/)) //点击 跳转路由
        expect(window.location.pathname).toEqual("/forum")
    });
})