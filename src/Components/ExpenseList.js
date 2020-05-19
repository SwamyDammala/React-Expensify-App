import React from 'react'
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import SelectExpenses from '../selectors/expenses'

export const ExpenseList=(props)=>(
    <div>
        {
            props.expenses.length===0?<p>No Expenses</p>:
            props.expenses.map(expense=><ExpenseListItem key={expense.id} {...expense} />)
        }
        
    </div>
)

// const ConnectedExpensesList=connect((state)=>{
//     return {
//         name:'swamy'
//     }
// })(ExpanseList)

const MapStateToProps=((state)=>{
    return {
        expenses:SelectExpenses(state.expenses,state.filters)
    }
})

export default connect(MapStateToProps)(ExpenseList)

