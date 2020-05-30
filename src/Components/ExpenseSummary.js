import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import ExpenseTotal from '../selectors/ExpenseTotal'
import SelectExpenses from '../selectors/expenses'
import numeral from 'numeral'

export const ExpenseSummary=(props)=>{
    const expenseWord=props.expenses.length===1?'expense':'expenses'
    const formattedAmount=numeral(props.expensesTotal/100).format('$0,0.00')
    return(
        <div className='page-header'>
            <div className='content-container'>
            <h1 className='page-header__title'>Viewing <span>{props.expenses.length}</span> {expenseWord} totalling <span>{formattedAmount}</span></h1>
            <div className='page-header__actions'>
            <Link className='button' to='/create'>Add Expense</Link>
            </div>
            </div>
            
            </div>
            )    
}

// const ConnectedExpensesList=connect((state)=>{
//     return {
//         name:'swamy'
//     }
// })(ExpanseList)

const MapStateToProps=(state)=>{
    return {
        expenses:SelectExpenses(state.expenses,state.filters),
        expensesTotal:ExpenseTotal(SelectExpenses(state.expenses,state.filters))
    }
}

export default connect(MapStateToProps)(ExpenseSummary)