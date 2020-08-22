import React, {useRef, useState} from "react";
import ReactDom from "react-dom";

export const useModal = (Node) => {
    const [open, setOpen] = useState(false);
    const openModal = (props) => {
        setOpen(true);
        ReactDom.render(<Node {...props}/>, document.getElementById('modalid')); // 理论上应该自己创建一个dom的  但是不知道为啥这玩意儿他就是有问题，useRef每次都会重置
    };
    const closeModal = () => {
        setOpen(false)
        ReactDom.unmountComponentAtNode(document.getElementById('modalid'));
    };
    const isOpen = open;
    return {openModal, closeModal, isOpen};
};
