import {inputValue, screen, partialMockInTestCase, render, sleep} from "../../testUtils";
import React from "react";
import {fireEvent, waitFor, waitForElementToBeRemoved} from "@testing-library/dom";
jest.mock('../../util.ts')
describe("signup", () => {
    it("输入邮箱后 可以获取验证码,获取验证码有60秒的间隔", async function () {

        // mock完了还得跑一下require
        const SignUp = require("./signUp").default;
        const wrapper = render(<SignUp />);
        const emailCodeInput = wrapper.getByPlaceholderText(/邮箱验证码/);
        const emailInput = wrapper.getByPlaceholderText(/请输入邮箱/);
        inputValue(emailInput, "655da6s464@qq.com");
        fireEvent.click(wrapper.getByText(/点击获取/));
        await wrapper.findByText(/59秒/);
        // 这个用rxjs写的 很难mock，把这一分钟过去，先不测试了
    });
    it("输入信息需要验证，包括用户名邮箱密码和确认密码,用户名0-8字符，密码起码8位", async function () {
        const SignUp = require("./signUp").default;
        const wrapper = render(<SignUp />);
        const userInput = wrapper.getByPlaceholderText(/用户名/);
        const emailInput = wrapper.getByPlaceholderText(/输入邮箱/);
        const passwordInput = wrapper.getByPlaceholderText(/请输入密码/);
        const rePasswordInput = wrapper.getByPlaceholderText(/确认密码/);
        const verifyCodeInput = wrapper.getByPlaceholderText(/验证码/);
        const submit = wrapper.getByText('注册');
        inputValue(userInput, "jueinin"); //7位
        inputValue(emailInput, "iijjddsj@qq.com");
        inputValue(passwordInput, "8888");
        inputValue(rePasswordInput, "8888");
        inputValue(verifyCodeInput, "5524");
        fireEvent.click(submit);
        await wrapper.findByTestId('toast')
        let toast = wrapper.getByTestId("toast");
        expect(toast).not.toHaveTextContent("用户名");
        expect(toast).not.toHaveTextContent("邮箱");
        expect(toast).toHaveTextContent("密码起码");
        expect(toast).not.toContain("确认密码");
        await waitForElementToBeRemoved(wrapper.getByTestId('toast'))
        fireEvent.change(passwordInput,{target: {value: "djdlakshjdjash"}})
        console.log((passwordInput as HTMLInputElement).value,(rePasswordInput as HTMLInputElement).value)
        fireEvent.click(submit);
        await wrapper.findByTestId('toast');
        toast = wrapper.getByTestId('toast');
        waitFor(()=>{ //这里有个动画问题
            expect(toast).toHaveTextContent("确认密码错误")
            expect(toast).not.toHaveTextContent('密码起码8位')
        })
        inputValue(rePasswordInput,"djdlakshjdjash")
        fireEvent.click(submit);
        await wrapper.findByText(/注册成功/);
        expect(window.location.pathname).toEqual('/')
    });
});
