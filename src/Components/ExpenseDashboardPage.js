import React from 'react'
import ExpenseList from './ExpenseList'
import ExpenseListFilter from './ExpenseListFilter'
import ExpenseSummary from './ExpenseSummary'
import DeleteModal from './deleteModal'

const ExpenseDashboardPage=()=>(
    <div>
        <ExpenseSummary />
        <ExpenseListFilter />
        <ExpenseList />
    </div>    
)

export default ExpenseDashboardPage