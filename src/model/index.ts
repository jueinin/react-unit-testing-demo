import {create} from 'mobx-persist';
import React, {useContext} from "react";
import {UserStore} from "./userStore";

const hydrate = create({
    storage: localStorage,
    jsonify: true,
});
const userStore = new UserStore();
hydrate('userStore', userStore)
export const rootStore = {
    userStore: userStore
};
export const StoreProvider = React.createContext(rootStore);
export const useStore = () => {
    return useContext(StoreProvider);
};
