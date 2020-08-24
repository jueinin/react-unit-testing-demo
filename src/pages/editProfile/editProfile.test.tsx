import {render} from "../../testUtils";
import EditProfile from "./editProfile";
import React from "react";
import {fireEvent, waitFor} from "@testing-library/dom";
describe("editProfile",()=>{
    it('点击退出登录，跳转到首页', function () {
        const wrapper = render(<EditProfile/>);
        waitFor(()=>{
            fireEvent.click(wrapper.getByText(/退出登录/));
            expect(window.location.pathname).toEqual('/')
        })
    });
})