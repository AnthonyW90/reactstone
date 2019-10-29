import React, { setGlobal, addCallback} from 'reactn';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import Application from './application'

const initialState ={
    token: null,
    loggedIn: false,
    username: null,
    role: null,
    users: null,
    buldings: null,
    apartments: null,
    applications: null,
    leases: null,
    tickets: null,
    applicationStatus: null,
}

const rehydrateState = () => {
    const state = localStorage.getItem("globalState")

    if(state) return JSON.parse(state)

    return initialState
}

setGlobal(rehydrateState())

addCallback((state) => {
    localStorage.setItem("globalState", JSON.stringify(state))
})

ReactDOM.render(<Application><App /></Application>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
