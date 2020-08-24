import React from 'react';
import NavBar from '../../components/navBar/navbar';
import { observable } from 'mobx';
import { observer, useLocalStore } from 'mobx-react';
import { useStore } from '../../model';
import Loading from '../../components/loading/loading';
import { ask } from '../../util';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextareaAutosize } from '@material-ui/core';
import { Toast } from '../../components/toast/toast';
import { CheckCircle } from '@material-ui/icons';
export class Logic {
    @observable userNameData = {
        open: false,
        value: '',
    };
    @observable sexData = {
        open: false,
        value: '',
    };
    @observable descriptionData = {
        open: false,
        value: '',
    };
    onLogout=()=>{
        ask({
            url: `/api/logout`,
            method: 'post'
        }).then(value => {
            if (value.data.status === 'ok') {
                window.location.href='/'
            }
        })
    }
}
const EditProfile: React.FC = () => {
    const { userStore } = useStore();
    const logic = useLocalStore(() => new Logic());
    const editProfile = (obj: { userName?: string; description?: string; sex?: string }) => {
        return ask({
            url: `/api/editProfile`,
            method: 'post',
            data: obj,
        }).then((value) => {
            userStore.getUserData();
        });
    };
    const onUserNameClose = () => {
        logic.userNameData.value = '';
        logic.userNameData.open = false;
    };
    const onSexClose = () => {
        logic.sexData.value = '';
        logic.sexData.open = false;
    };
    const onDescriptionClose = () => {
        logic.descriptionData.value = '';
        logic.descriptionData.open = false;
    };
    if (!userStore.userData) {
        return <Loading loading={true} />;
    }
    return (
        <div className="flex flex-col bg-gray-200">
            <NavBar centerPart={'我的资料'} />
            <div className=" flex-grow text-gray-600 mt-2 w-full" style={{ height: '200vh' }}>
                <div
                    className="grid bg-white border-b px-2 items-center active:bg-gray-200"
                    style={{
                        gridTemplateColumns: '10rem auto 1rem',
                    }}
                    onClick={() => {
                        document.getElementById('input').click();
                    }}
                >
                    <span className="text-gray-600 self-center">头像</span>
                    <img className="h-12 w-12 rounded-full ml-auto" src={userStore.userData.user.avatar} />
                    <div className=" ml-1 self-center">></div>
                </div>
                <div
                    className="flex py-2 bg-white border-b px-2 items-center active:bg-gray-200"
                    onClick={() => {
                        logic.userNameData.open = true;
                        logic.userNameData.value = userStore.userData.user.userName;
                    }}
                >
                    <span className="text-gray-600 self-center">昵称</span>
                    <div className="ml-auto">{userStore.userData.user.userName}</div>
                    <div className="ml-4 self-center">></div>
                </div>
                <div
                    className="flex py-2 bg-white border-b px-2 items-center active:bg-gray-200"
                    onClick={() => {
                        logic.sexData.open = true;
                        logic.sexData.value = userStore.userData.user.sex;
                    }}
                >
                    <span className="text-gray-600 self-center">性别</span>
                    <div className="ml-auto">{userStore.userData.user.sex || '暂未设置性别'}</div>
                    <div className="ml-4 self-center">></div>
                </div>
                <div
                    className="flex py-2 bg-white border-b px-2 items-center active:bg-gray-200"
                    onClick={() => {
                        logic.descriptionData.value = userStore.userData.user.description;
                        logic.descriptionData.open = true;
                    }}
                >
                    <span className="text-gray-600 self-center">个人介绍</span>
                    <div className="ml-auto w-1/2 truncate-1-lines text-right">{userStore.userData.user.description || '快来介绍下自己吧！'}</div>
                    <div className="ml-4 self-center">></div>
                </div>
                <div className="absolute inset-x-0" style={{
                    top: '61.8vh'
                }}>
                    <button className="w-full text-white border rounded-lg active:bg-red-700 bg-red-500 py-4 text-lg" onClick={logic.onLogout}>退出登录</button>
                </div>
            </div>
            {logic.sexData.open && (
                <div
                    className="fixed inset-0 flex flex-col-reverse"
                    style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}
                    onClick={(e) => {
                        e.target === e.currentTarget && onSexClose();
                    }}
                >
                    <div className="bg-white">
                        <div className="px-4 py-2 shadow-sm flex justify-between border mb-2">
                            <button className="text-blue-400 active:bg-gray-100" onClick={onSexClose}>
                                取消
                            </button>
                            <button
                                className="text-blue-400 active:bg-gray-100"
                                onClick={() => {
                                    editProfile({
                                        sex: logic.sexData.value,
                                    }).then((value) => {
                                        onSexClose();
                                    });
                                }}
                            >
                                确认
                            </button>
                        </div>
                        {['男', '女'].map((value, index) => (
                            <div key={index} className="px-4 py-2" onClick={() => (logic.sexData.value = value)}>
                                <CheckCircle className={`mr-2 ${logic.sexData.value === value ? 'text-pink-500' : 'text-gray-500'}`} />
                                <span>{value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            {logic.descriptionData.open && (
                <div className="fixed inset-0 items-center flex-center" style={{ backgroundColor: 'rgba(0,0,0,0.4)' }} onClick={(event) => event.target === event.currentTarget && onDescriptionClose()}>
                    <div className="bg-white z-10 shadow-md rounded-lg w-4/5 p-4">
                        <div className="text-xl pb-4 border-b mb-4">一句话说说自己吧！</div>
                        <TextareaAutosize autoFocus className="bg-gray-100 w-full" value={logic.descriptionData.value} onChange={(event) => (logic.descriptionData.value = event.target.value)} />
                        <div className="px-4 py-2 border-t mt-4 flex justify-end">
                            <button className="active:bg-gray-500" onClick={onDescriptionClose}>
                                取消
                            </button>
                            <button
                                className="ml-2 text-blue-400 active:bg-blue-500"
                                onClick={() => {
                                    editProfile({
                                        description: logic.descriptionData.value,
                                    }).then(onDescriptionClose);
                                }}
                            >
                                确认
                            </button>
                        </div>
                    </div>
                </div>
            )}
            <Dialog open={logic.userNameData.open} onClose={onUserNameClose}>
                <DialogTitle>编辑昵称</DialogTitle>
                <DialogContent>
                    <input placeholder="输入您的新昵称" autoFocus className="border border-green-200 py-2 w-full" value={logic.userNameData.value} onChange={(event) => (logic.userNameData.value = event.target.value)} />
                </DialogContent>
                <DialogActions>
                    <button
                        className="px-4 py-2 bg-blue-400 rounded-lg hover:bg-blue-500 text-white active:bg-blue-600"
                        onClick={() => {
                            const value = logic.userNameData.value;
                            if (value.length > 3 || value.length < 10) {
                                editProfile({
                                    userName: value,
                                }).then((value1) => {
                                    onUserNameClose();
                                });
                            } else {
                                Toast.info('请输入正确的长度3-10');
                            }
                        }}
                    >
                        确认
                    </button>
                </DialogActions>
            </Dialog>
            <input
                className="hidden"
                id="input"
                type="file"
                onChange={(event) => {
                    const files = event.target.files;
                    if (files.length === 0) {
                        return;
                    }
                    const formData = new FormData();
                    formData.append('name', 'chen');
                    formData.append('img', files[0]);
                    ask({
                        url: `/api/editProfileAvatar`,
                        method: 'post',
                        data: formData,
                    }).then((value) => {
                        userStore.getUserData();
                    });
                }}
            />
        </div>
    );
};
export default observer(EditProfile);
