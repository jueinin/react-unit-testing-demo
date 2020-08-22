import {render} from "../../testUtils";
import BookItem from "./bookItem";
import React from "react";
import {fireEvent} from "@testing-library/dom";

describe('bookItem',()=> {
    it('展示型组件 各个属性都要显示出来，除了好评显示百分比', function () {
        const onClick = jest.fn()
        const wrapper = render(<BookItem goodComments={33} bookId={34} price={35} imgUrl={'dd'} author={'au'} title={'t'} comments={66} onClick={onClick}/>)
        expect(wrapper.getByText(`${(33/66).toFixed(2)}%`,{exact: false})).toBeInTheDocument()
        expect(wrapper.getByText('au')).toBeInTheDocument()
        expect(wrapper.getByText('t')).toBeInTheDocument()
        fireEvent.click(wrapper.container.firstChild!)
        expect(onClick).toBeCalledTimes(1);
        expect(wrapper.getByText(/35/)).toBeInTheDocument()
        expect(wrapper.getByAltText(/book cover/).getAttribute('src')).toEqual('dd');
        wrapper.rerender(<BookItem goodComments={2} bookId={2} price={2} imgUrl={'d'} author={'2'} title={'2'} comments={0}/>)
        expect(wrapper.getByText(/0%/)).toBeInTheDocument()
    });
})