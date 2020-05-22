import React from 'react'
import { connect } from 'react-redux'
import ExpenseTotal from '../selectors/ExpenseTotal'
import SelectExpenses from '../selectors/expenses'
import numeral from 'numeral'

export const ExpenseSummary=(props)=>{
    const expenseWord=props.expenses.length===1?'expense':'expenses'
    const formattedAmount=numeral(props.expensesTotal/100).format('$0,0.00')
    return(
            <div>
            <h1>viewing {props.expenses.length} {expenseWord} totalling {formattedAmount}</h1>
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