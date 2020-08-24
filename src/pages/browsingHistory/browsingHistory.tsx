import React, { useEffect } from 'react';
import { ask } from '../../util';
import NavBar from '../../components/navBar/navbar';
import {useHistory} from 'react-router-dom';
import {DeleteOutlined} from "@material-ui/icons";
import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from "@material-ui/core";
import {always, prop} from "ramda";
import Loading from "../../components/loading/loading";
import {queryCache, useMutation, useQuery} from "react-query";
import {useModal} from "../../useModal";
type Data = {
    time: string;
    items: {
        id: number;
        bookId: number;
        title: string;
        price: number;
        image: string;
    }[];
}[];
export default ()=>{
    const history = useHistory();
    const [onDeleteHistory] = useMutation(
        (id) =>
            ask({
                url: `/api/removeBrowsingHistory`,
                method: 'post',
                data: { id },
            }).then(prop('data')),
        {
            onSuccess: (data1) => {
                queryCache.refetchQueries(`/api/browsingHistory`);
                closeModal();
            },
        }
    );
    const { data, isFetching } = useQuery<Data,string>(`/api/browsingHistory`, (url) => ask({ url }).then(prop('data')));
    const { openModal, closeModal } = useModal((props: any) => {
        return (
            <Dialog open className="bg-transparent" onClose={closeModal}>
                <DialogContent>
                    确认删除吗?
                </DialogContent>
                <DialogActions>
                    <Button color={"primary"} onClick={closeModal}>取消</Button>
                    <Button color={"primary"} data-testid={'delete confirm'} onClick={()=>onDeleteHistory(props.id)}>确认</Button>
                </DialogActions>
            </Dialog>
        );
    });
    return <div>
        <NavBar centerPart={'浏览历史'}/>
        <div className="mt-2 pl-2 ">仅保留最近100条记录哦！</div>
        {data && data.map((value) => {
            return (
                <div className="mt-2" key={value.time}>
                    <div className="px-2 bg-gray-200">{value.time}</div>
                    <div>
                        {value.items.map((value1, index) => {
                            return (
                                <div key={index} className="flex px-2 border-b mt-1" onClick={() => {
                                    history.push(`/bookDetail?bookId=${value1.bookId}`);
                                }}>
                                    <img alt="cover" src={value1.image} className="w-1/4"/>
                                    <div className="flex flex-col flex-grow ml-1">
                                        <div className="truncate-2-lines h-12 mt-1">{value1.title}</div>
                                        <div className="text-red-500 mt-auto mb-2 flex">
                                            <span>￥{value1.price}</span>
                                            <span className="ml-auto" data-testid={"deleteicon"} onClickCapture={event => {
                                                event.stopPropagation();
                                                event.preventDefault();
                                                openModal({id: value1.id})
                                            }}><DeleteOutlined className="text-red-500"/></span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            );
        })}
        <Loading loading={isFetching} />
        {data && data.length === 0 && !isFetching && <div className="w-full h-40 flex-center">居然还没有收藏的商品,快去转转吧!</div>}

    </div>
}
