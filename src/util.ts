import Axios from "axios";
import {useEffect} from "react";

export const ask = Axios.create({});
export const defaultAvatar = 'https://jueinin.oss-cn-hongkong.aliyuncs.com/%E5%B0%8F%E7%A8%8B%E5%BA%8F/%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F.jpg';
ask.interceptors.response.use(
    (res) => {
        return res;
    },
    (error) => {
        if (error.response.status === 403) {
            (window as any).browserHistory.push('/login');
            // Toast.info('请先登录再查看该页面');
        }
        return Promise.reject(error);
    }
);
export const useReachBottom = (element: HTMLElement | null, callback?: () => void) => {
    // 监听元素滚动到底部
    useEffect(() => {
        if (!element) {
            return;
        }
        const listener = (ev: any) => {
            const isBottom = element.scrollHeight - element.scrollTop - element.clientHeight < 130;
            if (isBottom) {
                callback && callback();
            }
        };
        element.addEventListener('scroll', listener);
        return () => element.removeEventListener('scroll', listener);
    }, [element]);
};