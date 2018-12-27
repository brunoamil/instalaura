import React from 'react';
import ReactDOM from 'react-dom';
import './css/reset.css';
import './css/timeline.css';
import './css/login.css';
import App from './App';
import Login from './componentes/Login';
import Logout from './componentes/Logout';

import * as serviceWorker from './serviceWorker';
import {Router, Route, browserHistory} from 'react-router';

function verificacaoAutenticacao(nextState, replace){
    if(localStorage.getItem('auth-token') === null){
        replace('/?msg=você precisa estar logado para acessar o endereço');
    }
}

ReactDOM.render(
    (
        <Router history={browserHistory}>
            <Route path="/" component={Login}></Route>
            <Route path="/timeline" component={App} onEnter={verificacaoAutenticacao}></Route>
            <Route path="/logout" component={Logout}></Route>

        </Router>
    ), document.getElementById('root'));


serviceWorker.unregister();
