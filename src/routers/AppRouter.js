import React from 'react'
import {Router , Route, Switch, Link, NavLink} from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import ExpenseDashboardPage from '../Components/ExpenseDashboardPage'
import AddexpensePage from '../Components/AddExpensePage'
import EditexpensePage from '../Components/EditExpensePage'
import PageNotFound from '../Components/PageNotFound'
import Login from '../Components/Login'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

export const history=createHistory()

const AppRouter=()=>(
    <Router history={history}>
        <div>
            
                <Switch>
                <PublicRoute path='/' component={Login} exact={true}/>
                <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
                <PrivateRoute path="/create" component={AddexpensePage} />
                <PrivateRoute path="/edit/:id" component={EditexpensePage} />
                <Route  component={PageNotFound} />
                </Switch>
        </div>
    </Router>
)



export default AppRouter
