import React, { useState } from "react";
import NavBar from "../../components/navBar/navbar";
import { PersonOutlined, LockOutlined } from "@material-ui/icons";
import style from "../cover.module.css";
import { useHistory } from "react-router-dom";
import { ask } from "../../util";
import { useStore } from "../../model";
import { Toast } from "../../components/toast/toast";
import { Transition } from "react-spring/renderprops";
import { useMutation } from "react-query";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    const {userStore} = useStore();
    const [onLogin] = useMutation(() => {
        return ask({
            url: `/api/login`,
            data: {email, password},
            method: "post",
        })
            .then((value: any) => {
                userStore.getUserData();
                history.push("/");
                Toast.info("登录成功，跳转中...");
            })
            .catch((err) => {
                const errMsg = err.data.message;
                Toast.info(errMsg);
            });
    });
    return (
        <div>
            <NavBar centerPart={"登录"}/>
            <div className="pt-20 px-16">
                <div className={"flex py-1 border-b border-solid border-gray-900 items-center " + style.simpleInput}>
                    <PersonOutlined className="mr-1 text-gray-700"/>
                    <input className="flex-grow" value={email} onChange={(event) => setEmail(event.target.value)}
                           placeholder="请输入邮箱"/>
                </div>
                <div
                    className={"flex mt-4 py-1 border-b border-solid border-gray-900 items-center " + style.simpleInput}>
                    <LockOutlined className="mr-1 text-gray-700"/>
                    <input
                        className="flex-grow"
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        placeholder="请输入密码"
                    />
                </div>
                <div className="w-full mt-4">
                    <Transition items={null} from={{opacity: 0}} enter={{opacity: 1}}>
                        {(item) => (props) => (
                            <button
                                data-testid={'login button'}
                                className="text-center py-2 text-lg text-white bg-red-400 w-full"
                                style={{...props}}
                                onClick={() => {
                                    if (email && password) {
                                        onLogin();
                                    } else Toast.info("用户名密码必填");
                                }}
                            >
                                登录
                            </button>
                        )}
                    </Transition>
                </div>
                <div className="text-red-400 text-sm mt-3 flex">
                    <span className="mr-auto">忘记密码？</span>
                    <span className="ml-auto" onClick={() => history.push("/signUp")}>
                        立即注册
                    </span>
                </div>
            </div>
        </div>
    );
};
export default Login
