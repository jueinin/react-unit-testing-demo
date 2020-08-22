import React from "react";
import {loadingClass, render} from "../../testUtils";
import Loading from "./loading";
describe("loading",()=> {
    it('loading为false的时候不渲染', function () {
        const wrapper = render(<Loading loading={false}/>);
        expect(wrapper.queryByTestId('loadingC')).toBeFalsy()
    });
    it('true时渲染一个loading', function () {
        const wrapper = render(<Loading loading={true}/>);
        expect(wrapper.container.querySelector(`.${loadingClass}`)).toBeTruthy();
    });
})