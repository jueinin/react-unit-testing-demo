import React from "react";
import NavBar from "./navbar";
import {RenderResult, render, act, waitForDomChange, getByText} from "@testing-library/react";
import { fireEvent } from "@testing-library/dom";
describe('navbar',() => {
    it('should render', function () {
        expect(() => render(<NavBar centerPart={'666'}/>)).not.toThrow();
    });
    it('左右部分具有默认值 ', function () {
        const hook:RenderResult = render(<NavBar centerPart={'666'}/>)
        expect(hook.getByTestId(/navBefore/i)).toBeInTheDocument()
        expect(hook.getByTestId(/navpost/i)).toBeInTheDocument()
        expect(hook.getByText(/666/)).toBeInTheDocument()
    });
    it('点击能够切换panel显示', async function () {
        const hook = render(<NavBar centerPart={'d'}/>);
        fireEvent.click(hook.getByTestId(/navpost/));
        await hook.findByText(/我的/);
        fireEvent.click(hook.getByTestId(/navpost/))
        await waitForDomChange();
        expect(()=>hook.getByText(/我的/)).toThrow()
    });
})