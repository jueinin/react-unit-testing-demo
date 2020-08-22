import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, useHistory} from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import {ReactQueryConfigProvider} from "react-query";
const TestWrapper:React.FC = (props)=> {
    const history = useHistory()
    useEffect(()=>{
        // @ts-ignore
        window.browserHistory = history

    },[history])
    return <React.Fragment>
        {props.children}
    </React.Fragment>
}
export const Wrapper:React.FC = (props) => {
    return <BrowserRouter>
        <ReactQueryConfigProvider>
            {props.children}
        </ReactQueryConfigProvider>
    </BrowserRouter>
}
ReactDOM.render(
  <React.StrictMode>
    <Wrapper>
        <TestWrapper>
            <App/>
        </TestWrapper>
    </Wrapper>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
