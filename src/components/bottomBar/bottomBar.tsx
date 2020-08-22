import React from "react";
import { Home, Person, Comment } from "@material-ui/icons";
import {BottomNavigation, BottomNavigationAction} from "@material-ui/core";
import { useHistory } from "react-router-dom";
interface BottomBarProps {
    className?: string;
    currentValue: '/' | "/forum" | '/me';
}
const path = [
    {
        name: "首页",
        path: "/",
        icon: <Home />
    },
    {
        name: "论坛",
        path: "/forum",
        icon: <Comment />
    },
    {
        name: "我的",
        path: "/me",
        icon: <Person />
    }
];
const BottomBar:React.FC<BottomBarProps>=(props)=>{
    const history = useHistory();
    const onChange = (event: React.ChangeEvent<{}>, value: string) => {
        history.push(value);
    };
    return <BottomNavigation
        className="mt-auto fixed bottom-0 w-full"
        showLabels
        value={props.currentValue}
        onChange={onChange}
    >
        {path.map(value => {
            return (
                <BottomNavigationAction
                    label={value.name}
                    key={value.name}
                    icon={value.icon}
                    value={value.path}
                    onClick={() => {
                        history.push(value.path);
                    }}
                />
            );
        })}
    </BottomNavigation>
}
export default BottomBar;