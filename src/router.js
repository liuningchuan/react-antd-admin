import React from 'react';
import {
    Route,
    HashRouter,
} from 'react-router-dom';

import Login from './pages/login'
import Dashboard from './pages/dashboard';

export default () => (
    <HashRouter>
        {/*这里指定exact意思是精确匹配，为了给其他组件一个机会获取到url改变*/}
        <Route path='/' exact component={Login} />
        <Route path='/dashboard' component={Dashboard} />
    </HashRouter>
)