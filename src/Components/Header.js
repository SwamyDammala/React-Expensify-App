import React from 'react'
import { NavLink } from 'react-router-dom'
import {connect} from 'react-redux'
import {startLogout} from '../actions/auth'

export const Header=(props)=>(
    <header>
        <div>
            <h1>Expensify</h1>  
            <NavLink to="/dashboard" activeClassName="is-active">Dashboard</NavLink><br/>
            <NavLink to="/create" activeClassName="is-active">Create expense</NavLink><br/>
            {/* <NavLink to="/edit" activeClassName="is-active">Edit expense Page</NavLink><br/> */}
            {/* <NavLink to="/help" activeClassName="is-active">Help</NavLink><br/> */}
            <button onClick={props.startLogout}>LogOut</button>
        </div>
    </header>
);

const mapDispatchToProps=(dispatch)=>({
    startLogout:()=>dispatch(startLogout())
})

export default connect(undefined,mapDispatchToProps)(Header)