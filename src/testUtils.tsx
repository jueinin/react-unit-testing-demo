import {render, RenderOptions, RenderResult} from '@testing-library/react'
import React from "react";
import {ReactQueryConfigProvider} from "react-query";
import {BrowserRouter} from "react-router-dom";

export const loadingClass = "MuiCircularProgress-root";
const customRender = (ui: React.ReactElement, options?: RenderOptions):RenderResult => {
    return render(ui, {
        wrapper: props => <BrowserRouter>
            <ReactQueryConfigProvider config={{}}>
                {props.children}
                <div id="modalid"></div>
            </ReactQueryConfigProvider>
        </BrowserRouter>,
        ...options
    })
};
/**
 * @description 单文件内mock模块，本文件生效，需要在describe之前调用本函数
 * @param moduleName
 * @param partial
 */
export const partialMockInFile = (moduleName:string,partial: any) => {
    return jest.mock(moduleName,()=>{
        const actual = jest.requireActual(moduleName)
        return {
            __esModule: true,
            ...actual,
            ...partial
        }
    })
}
export const partialMockInTestCase = (moduleName:string,partial: any) => {
    return jest.doMock(moduleName,()=>{
        const actual = jest.requireActual(moduleName)
        return {
            __esModule: true,
            ...actual,
            ...partial
        }
    })
}
export * from '@testing-library/react'
export {customRender as render}
