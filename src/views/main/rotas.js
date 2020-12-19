import React from 'react';

import { Route, Switch, HashRouter } from 'react-router-dom';

import Home from './home';
import Login from './login';


function Rotas() {
    return (
        <HashRouter>
            <Switch>
                <Route exact path="/login" component={Login} />
                <Route path="/home" component={Home} />
            </Switch>
        </HashRouter>
    )
}

export default Rotas;