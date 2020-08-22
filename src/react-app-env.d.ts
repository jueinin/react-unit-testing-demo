/// <reference types="react-scripts" />
interface MyWindow extends Window {
    browserHistory: History
}
declare var window: MyWindow