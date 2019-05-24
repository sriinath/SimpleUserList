import * as React from 'react'
import { UserLoginPage, DashboardPage } from '../'
import { Global } from './styled'
import { BrowserRouter, Route, Switch } from 'react-router-dom' 

const App = () => {
    return <>
        <Global />
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={UserLoginPage} />
                <Route exact path='/dashboard' component={DashboardPage} />
            </Switch>
        </BrowserRouter>
    </>
}

export { App }