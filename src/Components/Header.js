import React from 'react'
import { NavLink } from 'react-router-dom'

const Header=()=>(
    <header>
        <div>
            <h1>Expensify</h1>  
            <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink><br/>
            <NavLink to="/create" activeClassName="is-active">Create expense</NavLink><br/>
            <NavLink to="/edit" activeClassName="is-active">Edit expense Page</NavLink><br/>
            {/* <NavLink to="/help" activeClassName="is-active">Help</NavLink><br/> */}
        </div>
    </header>
);

export default Header