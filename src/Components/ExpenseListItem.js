import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { removeexpense } from '../actions/expenses'


const ExpenseListItem=({id,description,amount,createdAt,notes})=>(
    <div>
        <Link to={`/edit/${id}`}>{description}</Link>
        <p>Expense Description:{description}</p>
        <p>CreatedAt:{createdAt}</p>
        <p>Amount:{amount}</p>
        <p>Notes:{notes}</p>
        {/* <button onClick={()=>{dispatch(removeexpense({id}))}}>Remove Expense</button> */}
    </div>
)




export default ExpenseListItem