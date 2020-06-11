import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import ExpenseTotal from '../selectors/ExpenseTotal'
import SelectExpenses from '../selectors/expenses'
import numeral from 'numeral'

export const ExpenseSummary=(props)=>{
    const expenseWord=props.expenses.length===1?'expense':'expenses'
    const formattedAmount=numeral(props.expensesTotal/100).format('$0,0.00')
    console.log(props.expensesWithOutFilters.length)
    const hiddenItems=props.expensesWithOutFilters.length-props.expenses.length
    
    return(
        <div className='page-header'>
            <div className='content-container'>
            <h1 className='page-header__title'>Viewing <span>{props.expenses.length}</span> {expenseWord} totalling <span>{formattedAmount}</span></h1>
            {hiddenItems!==0 && <p>Hidden expenses count <span style={{color:'red'}}>{hiddenItems}</span>.Please remove every filter to see all the items</p>}
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
        expensesTotal:ExpenseTotal(SelectExpenses(state.expenses,state.filters)),
        expensesWithOutFilters:SelectExpenses(state.expenses,{text:'',sortBy:'date',startDate:0,endDate:0})
    }
}

export default connect(MapStateToProps)(ExpenseSummary)