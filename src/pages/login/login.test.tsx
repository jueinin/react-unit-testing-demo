import React from "react";
import {inputValue, render, cleanup} from "../../testUtils";
import {fireEvent, waitFor, waitForElementToBeRemoved} from "@testing-library/dom";

jest.mock('../../util.ts');
/**
 * @description 登录界面，输入用户名密码，登录成功后跳转首页，做一下简单的登录验证
 */
describe("login",()=>{
    afterEach(()=>{
        cleanup()
    })
    it('输入用户名密码，登录后跳转首页', async function () {
        const Login =require('./login').default
        const wrapper = render(<Login/>)
        const userNameInput = wrapper.getByPlaceholderText(/邮箱/);
        const passwordInput = wrapper.getByPlaceholderText(/密码/);
        const loginButton =await wrapper.findByTestId('login button')
        inputValue(userNameInput, 'username');
        inputValue(passwordInput, 'sdas');
        fireEvent.click(loginButton);
        await waitFor(() => {
            expect(window.location.pathname).toEqual('/');
            wrapper.getByText(/登录成功/)
        });
    });
    it('登录错误出现提示信息', async function () {
        jest.useFakeTimers()
        require('../../util.ts').ask.mockImplementation(()=>Promise.reject({data: {message: "该用户不存在"}}))
        const Login = require('./login').default
        const wrapper = render(<Login/>)
        const userNameInput = wrapper.getByPlaceholderText(/邮箱/);
        const passwordInput = wrapper.getByPlaceholderText(/密码/);
        const loginButton =await wrapper.findByTestId('login button')
        inputValue(userNameInput, '');
        fireEvent.click(loginButton)

        await wrapper.findByText("用户名密码必填");
        await waitForElementToBeRemoved(wrapper.getByText("用户名密码必填"))
        inputValue(passwordInput,'jueinin')
        inputValue(userNameInput, 'jeuininasd');
        fireEvent.click(loginButton);
        await wrapper.findByText("该用户不存在")
    });

})