import React from "react";
import {Toast} from "./toast";
import {render} from "../../testUtils";
describe("toast",()=> {
    it('调用Toast.info的时候出现一个toast',async function () {
        const wrapper = render(<div></div>)
        Toast.info("like")
        await wrapper.findByText('like')
    });
})