import React from 'react';
import ReactDOM from 'react-dom';
import {Switch, Router, Route} from 'react-router-dom';
import './index.css';
import App from './App';
import { createBrowserHistory } from "history";
import Hakkimizda from './components/Hakkimizda';
import Galeri from './components/Galeri';
import Giris from './components/Giris';
import Iletisim from './components/Iletisim';

const history= createBrowserHistory();

ReactDOM.render(
    <Router history={history}>
        <Switch>
            <Route path='/'exact component={App}></Route>
            <Route path='/hakkimizda' component={Hakkimizda}></Route>
            <Route path='/galeri' component={Galeri}></Route>
            <Route path='/iletisim' component={Iletisim}></Route>
            <Route path='/giris' component={Giris}></Route>
        </Switch>
    </Router>, document.getElementById('root'));
