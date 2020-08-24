import { computed, observable } from 'mobx';
import { ask } from '../util';
import { persist } from 'mobx-persist';
import {useState} from "react";
export interface UserAddressItem {
    id: number;
    name: string;
    address: string;
    phoneNumber: string;
    isDefaultAddress: boolean;
}
export interface ShoppingCartItem {
    bookId: number;
    title: string;
    price: number;
    smallImage: string;
    checked: boolean;
    id: number;
    count: number;
}
export type UserData = {
    shoppingCart: {
        items: ShoppingCartItem[];
    };
    user: {
        id: number;
        email: string;
        userName: string;
        avatar: string;
        sex: string;
        description: string;
        addresses: UserAddressItem[];
    };
};

export class UserStore {
    @observable userData = null;
    @persist('object') @observable currentBuyItemInfo: {
        // 点击立即购买时订单结算页的信息，其实最好的办法是传给服务端再获取，不然会有一堆问题
        bookId: number;
        title: string;
        price: number;
        smallImages: string;
        count: number;
    } | undefined;
    @computed get isLogin() {
        return !!this.userData;
    }

    getUserData = () => {
        ask({
            url: `/api/userData`,
        }).then((value) => {
            const data: UserData = value.data;
            data.shoppingCart.items = data.shoppingCart.items.map((value1) => {
                value1.checked = false;
                value1.count = 1;
                return value1;
            });
            this.userData = data;
        });
    };
    getAddress = () => {
        ask({
            url: '/api/getAddress',
        }).then((value) => {
            this.userData!.user.addresses = value.data;
        });
    };
}
