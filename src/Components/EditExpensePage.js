import React from 'react'
import ExpenseForm from './ExpenseForm'
import { startEditExpenses } from '../actions/expenses'
import { connect } from 'react-redux'
import { startRemoveExpenses } from '../actions/expenses'
import expenses from '../tests/fixtures/expenses'

export class EditexpensePage extends React.Component{
    onSubmit=(expense)=>{
        this.props.startEditExpenses(this.props.expense.id,expense)
        this.props.history.push('/dashboard')
    }
    onRemove=()=>{
        this.props.startRemoveExpenses({id:this.props.expense.id})
        this.props.history.push('/dashboard')
    }
    render(){
        return(
            <div>
                <div className='page-header'>
                    <div className='content-container'>
                        <h1 className='page-header__title'>Edit Expense</h1>
                    </div>
                 </div>
                <div className='content-container'>
                <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit}/>
                <button className='button button--secondary' onClick={this.onRemove}>Remove Expense</button>
                </div>
            </div> 
        )
    }
}

// const EditexpensePage=(props)=>{
//     return(
//         <div>            
//             <ExpenseForm expense={props.expenses}
//                     onSubmit={(expense)=>{
//                         props.dispatch(editexpense(props.expenses.id,expense))
//                         console.log('updated',expense)
//                         props.history.push('/')
//             }}/>
//                 <button onClick={()=>{props.dispatch(removeexpense({id:props.expenses.id}))
//                     props.history.push('/')
//                     }}>Remove Expense</button>
//      </div>
//     ) 
// }

const MapsStoreToProps=(store,props)=>{
    return{
        expense:store.expenses.find((expense)=>(expense.id===props.match.params.id))
    }
}

const mapsDispatchToProps=(dispatch,props)=>{
    return{ 
        startEditExpenses:(id,expense)=>dispatch(startEditExpenses(id,expense)),
        startRemoveExpenses:(id)=>dispatch(startRemoveExpenses(id))
    }

}

export default connect(MapsStoreToProps,mapsDispatchToProps)(EditexpensePage)
