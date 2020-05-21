import React from 'react'
import {BrowserRouter , Route, Switch, Link, NavLink} from 'react-router-dom'
import ExpenseDashboardPage from '../Components/expenseDashboardPage'
import AddexpensePage from '../Components/AddexpensePage'
import EditexpensePage from '../Components/EditexpensePage'
import Header from '../Components/Header'
import HelpPage from '../Components/HelpPage'
import PageNotFound from '../Components/PageNotFound'


const AppRouter=()=>(
    <BrowserRouter>
        <div>
            <Header />
                <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true}/>
                <Route path="/create" component={AddexpensePage} />
                <Route path="/edit/:id" component={EditexpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route  component={PageNotFound} />
                </Switch>
        </div>
    </BrowserRouter>
)



export default AppRouter