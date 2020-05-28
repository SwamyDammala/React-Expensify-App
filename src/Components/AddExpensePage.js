import React from 'react'
import ExpenseForm from './ExpenseForm'
import { connect } from 'react-redux'
import { startAddExpense } from '../actions/expenses'


export class AddexpensePage extends React.Component{
    onSubmit=(expense)=>{
        this.props.startAddExpense((expense))
        this.props.history.push('/dashboard')
    }
    render(){
        return(
            <div>
            <h3>This is new expense page</h3>
            <ExpenseForm onSubmit={this.onSubmit} />
            </div>
        )
    }
}

//This is firstway to dispatch the add expense method with out using maps to props
// const AddexpensePage=(props)=>(
//     <div>
//         <h3>This is new expense page</h3>
//         <ExpenseForm onSubmit={(expense)=>{
//             props.dispatch(addexpense(expense))
//             props.history.push('/')
//         }} />
//     </div>    
// )

const mapsDispatchToProps=(dispatch)=>({
    startAddExpense:(expense)=>dispatch(startAddExpense(expense))
})

export default connect(undefined,mapsDispatchToProps)(AddexpensePage)