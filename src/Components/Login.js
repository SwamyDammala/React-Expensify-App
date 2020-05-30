import React from 'react'
import { connect } from 'react-redux'
import {startLogin} from '../actions/auth'

export const Login=(props)=>(
    <div className='box-layout'>
        <div className='box-layout__box'>
        <h1 className='box-layout__title'>Expensify</h1>
        <p>Track you expenses in a cool way</p>
        <button className='button' onClick={props.startLogin}>LogIn with Google</button>
        </div>
    </div>
)

const mapDispatchToProps=(dispatch)=>({
    startLogin:()=>dispatch(startLogin())
})

export default connect(undefined,mapDispatchToProps)(Login)