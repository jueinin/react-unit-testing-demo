import React, {ReactNode, useRef, useState} from "react";
import { useHistory } from "react-router-dom";
import {useTransition, animated} from "react-spring";
import {
    HomeOutlined,
    FindInPageOutlined,
    ShoppingCartOutlined,
    PersonOutlined,
    NavigateBefore, Close, MoreHoriz
} from "@material-ui/icons";
interface NavBarProps {
    centerPart: ReactNode;
    leftPart?: ReactNode;
    rightPart?: ReactNode;
    coverPanel?: ReactNode;
}
const NavBar: React.FC<NavBarProps> = (props)=> {
    const [open, setOpen] = useState(false);
    const history = useHistory();
    const transition = useTransition(open, null, {
        from: {
            height: 0,
            opacity: 0
        },
        enter: {
            height: 65,
            opacity: 1
        },
        leave: {
            height: 0,
            opacity: 0
        },
    });
    const items = useRef([
        {
            title: '首页',
            path: '/',
            icon: <HomeOutlined className="text-3xl" />,
        },
        {
            title: '3D演示',
            path: '/3d',
            icon: <FindInPageOutlined className="text-3xl" />,
        },
        {
            title: '购物车',
            path: '/shoppingCart',
            icon: <ShoppingCartOutlined className="text-3xl" />,
        },
        {
            title: '我的',
            path: '/me',
            icon: <PersonOutlined className="text-3xl" />,
        },
    ]);
    return <div>
        <div className="h-12 px-2 bg-white shadow-sm border border-solid border-gray-200 flex items-center">
            {props.leftPart || <NavigateBefore data-testid={'navBefore'} onClick={() => history.goBack()} className="text-3xl" />}
            <div className="text-center flex-grow">{props.centerPart}</div>
            {props.rightPart || <div data-testid={'navpost'} onClick={() => setOpen(!open)}>{open ? <Close className="text-3xl " /> : <MoreHoriz className="text-3xl" />}</div>}
        </div>
        {props.rightPart ? props.coverPanel:
            transition.map((value) => {
                return (
                    value.item && (
                        <animated.ul key={value.key} className="bg-gray-400 grid grid-cols-4 justify-items-center items-center" style={value.props}>
                            {items.current.map((value,index) => {
                                return (
                                    <li key={index} className="text-center"  onClick={() => {
                                        if (!(value.path === '/3d')) {
                                            history.push(value.path);
                                        } else {
                                            window.location.pathname='/3d/3d.html'
                                        }
                                    }}>
                                        <div className="text-red-400">{value.icon}</div>
                                        <span className="">{value.title}</span>
                                    </li>
                                );
                            })}
                        </animated.ul>
                    )
                );
            })}
    </div>
}
export default NavBar