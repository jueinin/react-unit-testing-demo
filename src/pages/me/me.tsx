import React, {useEffect, useState} from 'react';
import BottomBar from '../../components/bottomBar/bottomBar';
import { useHistory } from 'react-router-dom';
import NavBar from '../../components/navBar/navbar';
import {
    NearMeOutlined,
    CardMembership,
    LocalShippingOutlined,
    ChatOutlined,
    SettingsBackupRestoreOutlined,
    ReorderOutlined,
    StarBorderOutlined,
    ShoppingCartOutlined,
    StarOutlined,
    MessageOutlined
} from '@material-ui/icons';
import { useStore } from '../../model';
import { equals, ifElse } from 'ramda';
import {ask, defaultAvatar} from '../../util';
import {observer} from "mobx-react";

const Me: React.FC = () => {
    const { userStore } = useStore();
    const { isLogin, userData } = userStore;
    const history = useHistory();
    useEffect(() => {
        if (!isLogin) {
            return;
        }
        ask({
            url: `/api/orderItems?type=all`
        }).then(value => {
            setBottomItems(bottomItems => {
                bottomItems[0].count = value.data.filter(value => value.status === 'pendingPayment').length;
                bottomItems[1].count = value.data.filter(value => value.status === 'pendingReceived').length;
                bottomItems[2].count = value.data.filter(value => value.status === 'pendingComment').length;
                bottomItems[4].count = value.data.length;
                return [...bottomItems];
            })
        });
        const cartItems = userStore.userData.shoppingCart?.items?.length;
        setTopItems(topItems=>{
            topItems[3].count = cartItems;
            return [...topItems];
        })
    }, [isLogin]);
    const [topItems,setTopItems] = useState([
        {
            title: '浏览历史',
            icon: <NearMeOutlined />,
            onClick: () => {
                history.push('/browserHistory');
            },
            count: null
        },
        {
            title: '我的收藏',
            icon: <StarBorderOutlined/>,
            onClick: () => {
                history.push('/favorites');
            },
            count: null
        },
        {
            title: '论坛消息',
            icon: <MessageOutlined />,
            count: null
        },
        {
            title: '购物车',
            icon: <ShoppingCartOutlined />,
            onClick: () => {
                history.push('/shoppingCart');
            },
            count: null
        },
    ]);
    const [bottomItems,setBottomItems] = useState([
        {
            title: '待付款',
            icon: <CardMembership />,
            path: '/order?type=pendingPayment',
            count: null
        },
        {
            title: '待收货',
            icon: <LocalShippingOutlined />,
            path: '/order?type=pendingReceived',
            count: null
        },
        {
            title: '待评价',
            icon: <ChatOutlined />,
            path: '/order?type=pendingComment',
            count: null
        },
        {
            title: '退款/售后',
            icon: <SettingsBackupRestoreOutlined />,
            path: '/order?type=all',
            count: null
        },
        {
            title: '全部订单',
            icon: <ReorderOutlined />,
            path: '/order?type=all',
            count: null
        },
    ]);
    const onAvatarClick = () => {
        ifElse(
            equals(true),
            () => {
                history.push('/editProfile')
            },
            () => {
                (window as any).browserHistory.push('/login');
            }
        )(isLogin);
    };
    return (
        <div className="bg-gray-200">
            <NavBar centerPart={'我的'} />
            <div className="bg-red-500 p-3" data-name={'顶部头像区域'}>
                <div className="grid gap-6" style={{
                    gridTemplateColumns: '4rem auto',
                    justifyItems:'start'
                }}>
                    <img alt="" src={defaultAvatar} onClick={onAvatarClick} className="w-16 h-16 bg-green-300 rounded-full" />
                    <div className="text-lg text-white" onClick={onAvatarClick}>
                        {isLogin ? userData.user.userName : `登录 >`}
                    </div>
                </div>
            </div>
            <div data-name={'工具栏'} className="w-full">
                <div data-name={'上半部分'} className="grid grid-cols-4 mt-2 justify-items-center items-center">
                    {topItems.map((value) => {
                        return (
                            <div key={value.title} className="text-center" onClick={value.onClick}>
                                <div className="my-1 text-lg text-red-500 relative">
                                    {value.icon}
                                    {value.count && <div  className="absolute text-xs h-5 flex-center border rounded-full text-red-500 border-red-500" style={{
                                        top: '-.6rem',
                                        right: '-.6rem',
                                        minWidth: '1.25rem'
                                    }}>{value.count}</div>}
                                </div>
                                <span className="text-sm">{value.title}</span>
                            </div>
                        );
                    })}
                </div>
                <div data-name={'下半部分'} className="grid-cols-5 grid justify-items-center items-center py-3 mx-8 rounded-lg shadow-lg mt-2 bg-white">
                    {bottomItems.map((value) => {
                        return (
                            <div key={value.title} className="flex flex-col items-center" onClick={() => history.push(value.path)}>
                                <div className="my-1 text-red-500 text-lg relative">
                                    {value.icon}
                                    {value.count!==0 && value.count!==null && <div className="absolute text-xs h-5 flex-center border rounded-full text-red-500 border-red-500" style={{
                                        top: '-.8rem',
                                        right: '-.8rem',
                                        minWidth: '1.25rem'
                                    }}>{value.count}</div>}
                                </div>
                                <span className="text-sm">{value.title}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
            <BottomBar currentValue="/me" />
        </div>
    );
};
export default observer(Me);
