import React, { useEffect, useState } from "react";
import NavBar from "../../components/navBar/navbar";
import style from "../cover.module.css";
import { PersonOutlined, MailOutline, LockOutlined } from "@material-ui/icons";
import { ask, isEmail } from "../../util";
import { Toast } from "../../components/toast/toast";
import { interval } from "rxjs";
import { map, take, tap } from "rxjs/operators";
import classNames from "classnames";
import { useMutation } from "react-query";
import { useHistory } from "react-router-dom";
import { useStore } from "../../model";
const SignUp: React.FC = () => {
    const history = useHistory();
    const { userStore } = useStore();
    const [userName, setUserName] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [rePassword, setrePassword] = useState("");
    const [verificationCode, setverificationCode] = useState("");
    const [mailLoading, setmailLoading] = useState(false);
    const [mailCountDown, setmailCountDown] = useState<number>(0);
    const [onSendMailCode] = useMutation(() => {
        return ask({
            url: `/api/sendMailCode?email=${email}`,
        })
            .then((value) => {
                Toast.info("发送成功！");
                setmailLoading(true);
                interval(1000)
                    .pipe(
                        take(61),
                        map((value1) => 60 - value1)
                    )
                    .subscribe((second) => {
                        setmailCountDown(second);
                        if (second === 0) {
                            setmailLoading(false);
                        }
                    });
            })
            .catch((reason) => {
                Toast.info(reason.response.data.message);
            });
    });
    const [onSignUp] = useMutation(() => {
        return ask({
            method: "post",
            url: `/api/signUp`,
            data: {
                userName: userName,
                email: email,
                password: password,
                signUpCode: Number(verificationCode),
            },
        }).then((value) => {
            Toast.info("注册成功！");
            userStore.getUserData();
            history.push("/");
        });
    });
    return (
        <div className="">
            <NavBar centerPart={"注册成为新用户"} />
            <div className="mx-10 mt-20">
                <h2 className="text-center w-full text-lg">欢迎注册</h2>
                <div className={"flex py-1 mt-2 border-b border-solid border-gray-900 items-center " + style.simpleInput}>
                    <PersonOutlined className="mr-1 text-gray-700" />
                    <input
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        className="flex-grow"
                        maxLength={8}
                        placeholder="请输入用户名"
                    />
                </div>
                <div className={"flex py-1 mt-2 border-b border-solid border-gray-900 items-center " + style.simpleInput}>
                    <MailOutline className="mr-1 text-gray-700" />
                    <input value={email} onChange={(e) => setemail(e.target.value)} className="flex-grow" type="email" placeholder="请输入邮箱" />
                </div>
                <div className={"flex py-1 mt-2 border-b border-solid border-gray-900 items-center " + style.simpleInput}>
                    <LockOutlined className="mr-1 text-gray-700" />
                    <input
                        className="flex-grow"
                        type="password"
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}
                        placeholder="请输入密码"
                    />
                </div>
                <div className={"flex py-1 mt-2 border-b border-solid border-gray-900 items-center " + style.simpleInput}>
                    <LockOutlined className="mr-1 text-gray-700" />
                    <input
                        className="flex-grow"
                        type="password"
                        value={rePassword}
                        onChange={(e) => setrePassword(e.target.value)}
                        placeholder="请输入确认密码"
                    />
                </div>
                <div className="flex mt-2">
                    <input
                        className="border mr-auto"
                        placeholder="请输入您的邮箱验证码"
                        value={verificationCode}
                        onChange={(e) => setverificationCode(e.target.value)}
                    />
                    <button
                        className={classNames(
                            {
                                "bg-gray-400": mailLoading,
                            },
                            "p-2 ml-auto shadow-sm border "
                        )}
                        onClick={() => {
                            if (!mailLoading) {
                                onSendMailCode();
                            }
                        }}
                    >
                        {mailLoading ? <span>{mailCountDown}秒</span> : "点击获取"}
                    </button>
                </div>
                <div className="mt-4">
                    <button
                        className="flex flex-center py-2 text-lg text-white bg-red-500 w-full"
                        onClick={() => {
                            const message = [];
                            if (userName.length <= 0 || userName.length > 8) {
                                message.push("用户名0-8个字符");
                            }
                            if (!isEmail(email)) {
                                message.push("邮箱格式错误");
                            }
                            if (password.length < 8) {
                                console.log("password", password, rePassword);
                                message.push("密码起码8位");
                            }
                            if (rePassword !== password) {
                                message.push("确认密码错误");
                            }
                            if (message.length > 0) {
                                Toast.info(message.join("\n"));
                            } else {
                                onSignUp();
                                // Toast.info('验证成功');
                            }
                        }}
                    >
                        注册
                    </button>
                </div>
            </div>
        </div>
    );
};
export default SignUp;
