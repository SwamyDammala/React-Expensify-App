import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { removeexpense } from '../actions/expenses'
import  moment from 'moment'
import numeral from 'numeral'

const ExpenseListItem=({id,description,amount,createdAt,notes})=>(    
        <Link to={`/edit/${id}`} className='list-item'>
            <div>
                <h3 className='list-item__title'>{description}</h3>
                <span className='list-item__subtitle'>{moment(createdAt).format('MMMM Do, YYYY')}</span>
            </div>
            <h3 className='list-item__data'>{numeral(amount/100).format('$0,0.00')}</h3>
            </Link>

        // {/* <button onClick={()=>{dispatch(removeexpense({id}))}}>Remove Expense</button> */}
    
)




export default ExpenseListItem