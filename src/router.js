import React from 'react';
import {
    Router,
    Route
} from 'react-router-dom';
import { createBrowserHistory } from 'history'

import Login from './components/login/Login'

//如果使用createHashHistory()，则url中会出现#号
const history = createBrowserHistory();

//react-router4中不能再使用Route嵌套路由了

export default () => (
    <Router history={history}>
        {/*这里指定exact意思是精确匹配，为了给其他组件一个机会获取到url改变*/}
        <Route path='/' exact component={Login} />
    </Router>
)