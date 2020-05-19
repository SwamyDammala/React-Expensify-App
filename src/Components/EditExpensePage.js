import React from 'react'
import ExpenseForm from './ExpenseForm'
import { editexpense } from '../actions/expenses'
import { connect } from 'react-redux'
import { removeexpense } from '../actions/expenses'
import expenses from '../tests/fixtures/expenses'

export class EditexpensePage extends React.Component{
    onSubmit=(expense)=>{
        this.props.editexpense(this.props.expense.id,expense)
        this.props.history.push('/')
    }
    onRemove=()=>{
        this.props.removeexpense({id:this.props.expense.id})
        this.props.history.push('/')
    }
    render(){
        return(
            <div>
            <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit}/>
                <button onClick={this.onRemove}>Remove Expense</button>
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
        editexpense:(id,expense)=>dispatch(editexpense(id,expense)),
        removeexpense:(id)=>dispatch(removeexpense(id))
    }

}

export default connect(MapsStoreToProps,mapsDispatchToProps)(EditexpensePage)
