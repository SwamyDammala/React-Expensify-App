import React from 'react'
import ExpenseForm from './ExpenseForm'
import { connect } from 'react-redux'
import { addexpense } from '../actions/expenses'


export class AddexpensePage extends React.Component{
    onSubmit=(expense)=>{
        this.props.addexpense((expense))
        this.props.history.push('/')
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
    addexpense:(expense)=>dispatch(addexpense(expense))
})

export default connect(undefined,mapsDispatchToProps)(AddexpensePage)