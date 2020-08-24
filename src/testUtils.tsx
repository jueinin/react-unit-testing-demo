import { fireEvent, render, RenderOptions, RenderResult } from "@testing-library/react";
import React, {useEffect} from "react";
import { ReactQueryConfigProvider } from "react-query";
import { BrowserRouter, useHistory } from "react-router-dom";
import { useStore, StoreProvider, rootStore } from "./model";
import {ask} from "./util";
const TestWrapper:React.FC = (props)=>{
    const history = useHistory();
    const { userStore } = useStore();
    useEffect(() => {
        (window as any).browserHistory = history;
        ask({
            url: `/api/isLogin`,
        }).then((value) => {
            if (value.data.status) {
                userStore.getUserData();
            }
        });
    }, []);
    return <React.Fragment>
        {props.children}
    </React.Fragment>
}
export const loadingClass = "MuiCircularProgress-root";
const customRender = (ui: React.ReactElement, options?: RenderOptions): RenderResult => {
    return render(ui, {
        wrapper: (props) => (
            <BrowserRouter>
                <StoreProvider.Provider value={rootStore}>
                    <ReactQueryConfigProvider config={{}}>
                        <TestWrapper>
                            {props.children}
                            <div id="modalid"></div>
                        </TestWrapper>
                    </ReactQueryConfigProvider>
                </StoreProvider.Provider>
            </BrowserRouter>
        ),
        ...options,
    });
};
/**
 * @description 单文件内mock模块，本文件生效，需要在describe之前调用本函数
 * @param moduleName
 * @param partial
 */
export const partialMockInFile = (moduleName: string, partial: any) => {
    return jest.mock(moduleName, () => {
        const actual = jest.requireActual(moduleName);
        return {
            __esModule: true,
            ...actual,
            ...partial,
        };
    });
};
export const partialMockInTestCase = (moduleName: string, partial: any) => {
    return jest.doMock(moduleName, () => {
        const actual = jest.requireActual(moduleName);
        return {
            __esModule: true,
            ...actual,
            ...partial,
        };
    });
};
export const inputValue = (target: HTMLElement, value: string) =>
    fireEvent.change(target, {
        target: {
            value: value,
        },
    });
export const sleep = (timeout: number) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve("ddd"), timeout);
    });
};
export * from "@testing-library/react";
export { customRender as render };
