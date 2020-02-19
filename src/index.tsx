import React from 'react';
import ReactDOM from 'react-dom';
import { Home } from './features/home';
import { Counter } from './features/counter';
import { UserList } from './features/userList';
import { StateProvider } from './stateProvider';
import { Route } from 'react-router';
import { Switch, BrowserRouter, Link } from 'react-router-dom';
import './styles/index.scss'

ReactDOM.render(
    <StateProvider>
        <BrowserRouter>
            <Link to="/home">Home</Link>
            <span> | </span>
            <Link to="/counter">Counter</Link>
            <span> | </span>
            <Link to="/userList">User List</Link>

            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/counter" component={Counter} />
                <Route path="/userList" component={UserList} />
            </Switch>
        </BrowserRouter>
    </StateProvider>,
    document.getElementById('root')
);
