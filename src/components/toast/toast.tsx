import React from "react";
import ReactDom from 'react-dom';
import {append, remove} from "ramda";
import {of} from "rxjs";
import {delay} from "rxjs/operators";
import {useTransition,animated} from "react-spring";
export class Toast {
    private static container:HTMLDivElement;
    private static toastList: string[]=[];
    private static init() {
        if (!this.container) {
            this.container = document.createElement("div");
            document.body.appendChild(this.container)
        }
    }

    static info(text: string) {
        this.init();
        this.toastList = append(text, this.toastList);
        ReactDom.render(<ToastComponent textList={this.toastList}/>, this.container);
        of(1).pipe(delay(3000)).subscribe(() => {
            this.toastList = remove(0, 1, this.toastList);
            ReactDom.render(<ToastComponent textList={this.toastList}/>, this.container);
        });
    }
}
type Props={
    textList: string[];
}
const ToastComponent:React.FC<Props> = (props) => {
    const transition = useTransition(props.textList, str => str, {
        from: {
            transform: `translateY(40vh)`,
            opacity: 0
        },
        enter: {
            transform: `translateY(0)`,
            opacity: 1
        },
        leave: {
            opacity: 0
        }
    });
    return <div data-testid={'toast'} className="absolute w-full flex flex-col items-center" style={{top: '60vh'}}>
        {transition.map((value) => <animated.div key={value.item}
                                                 className="mx-auto rounded-lg bg-black p-2 text-white text-lg mb-2 shadow-md"
                                                 style={value.props}>{value.item}</animated.div>)}
    </div>;
};
